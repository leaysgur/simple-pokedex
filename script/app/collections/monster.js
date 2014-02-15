define([
  'util',
  'conf',
  'backbone',
  'models/monster'
], function (
  util,
  conf,
  Backbone,
  MonsterModel
) {
  'use strict';

  var storageKey = conf.storageKey;
  var jsonPath = conf.jsonPath;

  var MonsterCollection = Backbone.Collection.extend({
    model: MonsterModel,
    comparator: 'nationalPokedexNumber',
    initialize: function() {
      util.l('Collection init!');
    },

    fetch: function() {
      var that = this;

      var d = $.Deferred();

      // LocalStorage使える && データが既にある
      if (isLocalStroageEnable() && storageKey in localStorage) {
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
        // キャッシュOFFにしてるの忘れない
        $.ajax({ url: jsonPath.base, dataType: 'json', cache: false }),
        $.ajax({ url: jsonPath.type, dataType: 'json', cache: false }),
        $.ajax({ url: jsonPath.lang, dataType: 'json', cache: false })
      ).done(function(base, type, lang) {
        util.l('Ajax done', base, type, lang);

        var baseData = base[0], typeData = type[0], langData = lang[0];
        var fixedData = overrideBaseData(baseData, typeData, langData);

        if (isLocalStroageEnable()) {
          localStorage.removeItem(storageKey);
          localStorage.setItem(storageKey, JSON.stringify(fixedData));
        }

        that.reset(fixedData);
        d.resolve();

      }).fail(function(jqXHR, textStatus, errorThrown) {
        alert('えらー')
      });

    }
  });

  /* Private */
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

    baseData = null;
    typeData = null;
    langData = null;
    return fixedData;
  };

  function isLocalStroageEnable() {
    var chk = 'simplePokedex';
    try {
      localStorage.setItem(chk, chk);
      localStorage.removeItem(chk);
      return true;
    } catch(e) {
      return false;
    }
  }


  return MonsterCollection;

});
