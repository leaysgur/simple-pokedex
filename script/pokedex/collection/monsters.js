define([
  'util',
  'conf',
  'backbone',
  'jquery',
  'underscore',
  'model/monster'
], function (
  util,
  conf,
  Backbone,
  $,
  _,
  MonsterModel
) {
  'use strict';

  var storageKey = conf.storageKey;
  var jsonPath = conf.jsonPath;

  var MonstersCollection = Backbone.Collection.extend({
    model: MonsterModel,
    comparator: 'nationalPokedexNumber',

    fetch: function() {
      var that = this;

      var d = $.Deferred();

      // LocalStorage使える && データが既にある
      if (util.isLocalStroageEnable() && (storageKey in localStorage)) {
        // 予防線をはっておくのよ
        try {
          that.fetchFromLocalStorage(d);
        } catch (e) {
          that.fetchFromServer(d);
        }
      // LocalStorage使える && データまだない
      // LocalStorage使えない
      } else {
        that.fetchFromServer(d);
      }

      return d.promise();
    },
    fetchFromLocalStorage: function(d) {
      var that = this;

      var fixedData = JSON.parse(localStorage.getItem(storageKey));

      that.reset(fixedData);
      d.resolve();
    },
    fetchFromServer: function(d) {
      var that = this;

      $.when(
        $.ajax({ url: jsonPath.base, dataType: 'json' }),
        $.ajax({ url: jsonPath.type, dataType: 'json' }),
        $.ajax({ url: jsonPath.lang, dataType: 'json' })
      ).done(function(base, type, lang) {

        var baseData = base[0], typeData = type[0], langData = lang[0];
        var fixedData = overrideBaseData(baseData.monsters, typeData, langData);

        if (util.isLocalStroageEnable()) {
          localStorage.removeItem(storageKey);
          localStorage.setItem(storageKey, JSON.stringify(fixedData));
        }

        that.reset(fixedData);
        d.resolve();

      }).fail(function() {
        location.href = '/';
      });
    }
  });

  return MonstersCollection;

  function overrideBaseData(baseData, typeData, langData) {
    var fixedData = _.map(baseData, function(e) {

      // まずタイプ相性のデータを保持
      e.typeChart = _.map(e.type, function(e) {
        return { defense: typeData.defense[e] };
      });

      // データがあるときだけ、名前と
      if (langData.name) {
        e.name = langData.name[e._key];
      }

      // とくせいを言語別に上書きする
      if (e.abilities.normal.length) {
        e.abilities.normal = _.map(e.abilities.normal, function(e) {
          return langData.ability[e];
        });
      }
      if (e.abilities.hidden.length) {
        e.abilities.hidden = _.map(e.abilities.hidden, function(e) {
          return langData.ability[e];
        });
      }

      return e;
    });

    baseData = typeData = langData = null;
    return fixedData;
  }
});
