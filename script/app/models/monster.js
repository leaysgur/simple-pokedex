define([
  'util',
  'conf',
  'underscore',
  'jquery',
  'backbone'
], function (
  util,
  conf,
  _,
  $,
  Backbone
) {
  'use strict';

  var MonsterModel = Backbone.Model.extend({
    initialize: function() {
      this.addDynamicAttrs();
    },
    addDynamicAttrs: function() {
      var isJP = (conf.lang === 'ja');

      var types = this.get('type');
      var typesStr = _.map(types, function(type) {
        return conf.words.types[type]
      });
      this.set('typesStr', typesStr);

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
      
    }
  });


  return MonsterModel;


  // Privates
  function lbs2Kg(lbs) {
    return  ((+lbs) * 0.4536).toFixed(1);
  }
  function ft2M(ft) {
    var splt = ft.split('′'),
        strFt = (splt[0]|0) + '.' + (splt[1].split('″')[0]);
    return  ((+strFt) * 0.3048).toFixed(1);
  }

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

    return {
      efx400: efx400Unq,
      efx200: efx200Unq,
      efx50 :  efx50Unq,
      efx25 :  efx25Unq,
      efx0  :   efx0All
    }
  }

});
