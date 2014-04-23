define([
  'util',
  'conf',
  'backbone',
  'underscore'
], function (
  util,
  conf,
  Backbone,
  _
) {
  'use strict';

  var MonsterModel = Backbone.Model.extend({
    initialize: function() {
      this.addDynamicAttrs();
    },
    addDynamicAttrs: function() {
      var isJP = (conf.lang === 'ja');

      var types = this.get('type');
      types = _.map(types, function(type) {
        return {
          typeStr: conf.words.types[type],
          type: type
        };
      });
      this.set('types', types);

      var baseStats = this.get('baseStats');
      var total = _.reduce(_.values(baseStats), function(memo, num){ return memo + num; }, 0);
      baseStats['total'] = total;
      this.set('baseStats', baseStats);

      if (isJP) {
        this.set('weightStr', lbs2Kg(this.get('weight'))+'kg');
        this.set('heightStr', ft2M(this.get('height'))+'m');
      } else {
        this.set('weightStr', this.get('weight')+'lbs');
        this.set('heightStr', this.get('height')+'ft');
      }

    },
    getDefTypeChartStr: function() {
      var that = this;

      var defTypeCharts = _.pluck(that.get('typeChart'), 'defense');
      return getDefTypesChart(defTypeCharts);
    },
    getBaseStatsRatio: function() {
      var that = this;
      var baseStatsRatio = {};
      var baseStats = that.get('baseStats');
      for (var stat in baseStats) {
        baseStatsRatio[stat] = getBaseStatsRatio(baseStats[stat], stat === 'total');
      }

      return baseStatsRatio;
    }
  });

  return MonsterModel;

  /**
   * lbs -> kg
   * @param {Number} lbs
   * @return {Number} 小数点第一位までのキログラム
   */
  function lbs2Kg(lbs) {
    return ((+lbs) * 0.4536).toFixed(1);
  }
  /**
   * ft -> m
   * @param {String} ft ft(なんか変な文字ついてる)
   * @return {Number} 小数点第一位までのメートル
   */
  function ft2M(ft) {
    var splt = ft.split('′'),
        strFt = (splt[0]|0) + '.' + (splt[1].split('″')[0]);
    return ((+strFt) * 0.3048).toFixed(1);
  }
  /**
   * タイプ相性を割り出す(タイプが2つまでってことに依存してる)
   * @param {Array} defTypeCharts 自分のタイプそれぞれが、どういうタイプと相性なのかが入ったObjectの配列
   * @return {Object} 無効から4倍弱点まで精緻なタイプ相性が入ったObject
   */
  function getDefTypesChart(defTypeCharts) {
    var efx200 = _.pluck(defTypeCharts, '200');
    var efx200All = _.union(efx200[0], efx200[1]);

    var efx50 = _.pluck(defTypeCharts, '50');
    var efx50All = _.union(efx50[0], efx50[1]);

    var efx0 = _.pluck(defTypeCharts, '0');
    var efx0All = _.union(efx0[0], efx0[1]);

    // 2タイプとも効果抜群なら4倍弱点
    var efx400Unq = _.intersection(efx200[0], efx200[1]);

    // 2倍以上の中から、4倍と無効を削ったのが真の2倍
    var efx200Unq = _.difference(efx200All, efx400Unq, efx0All);

    // 2タイプとも半減なら1/4
    var efx25Unq = _.intersection(efx50[0], efx50[1]);

    // 2倍以上に片方のタイプで半減できるやつがある
    efx200Unq = _.difference(efx200Unq, efx50All, efx25Unq);
    // その逆も然り
    var efx50Unq = _.difference(efx50All, efx25Unq, efx200All, efx0All);
    // ゴミをとる
    var efx0Unq = _.compact(efx0All);

    return {
      efx400: efx400Unq,
      efx200: efx200Unq,
      efx50 :  efx50Unq,
      efx25 :  efx25Unq,
      efx0  :   efx0Unq
    };
  }
  /**
   * 種族値の棒グラフのために、最大から割合を計算する
   * @param {Number} stat 種族値
   * @param {Boolean} isTotal 6つの種族値の合計の計算かどうか
   * @return {Number} 小数点第一位までの割合
   */
  function getBaseStatsRatio(stat, isTotal) {
    // 現在の最高はH255とかいうバケモノなので255、合計は780という別のバケモノ
    var MAX_STAT = conf.max_stat, MAX_ALL_STAT = conf.max_all_stat;

    var maxStat = (isTotal) ? MAX_ALL_STAT : MAX_STAT;
    return ((stat / maxStat) * 100).toFixed(1);
  }
});
