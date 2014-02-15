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

  var MonsterCollection = Backbone.Collection.extend({
    model: MonsterModel,
    comparator: 'nationalPokedexNumber',
    initialize: function() {
      util.l('Collection init!');
    },

    fetch: function() {
      var that = this;

      var d = $.Deferred();

      $.when(
        // キャッシュOFFにしてるの忘れない
        $.ajax({ url: conf.jsonPath.base, dataType: 'json', cache: false }),
        $.ajax({ url: conf.jsonPath.type, dataType: 'json', cache: false }),
        $.ajax({ url: conf.jsonPath.lang, dataType: 'json', cache: false })
      ).done(function(base, type, lang) {
        util.l('Ajax done', base, type, lang);

        var baseData = base[0], typeData = type[0], langData = lang[0];
        var fixedData = overrideBaseData(baseData, typeData, langData);

        that.reset(fixedData);
        d.resolve();

      }).fail(function(jqXHR, textStatus, errorThrown) {
        util.l('Error', textStatus, errorThrown);
        // エラーView.render(); みたいな

      });

      return d.promise();
    }
  });

  /* Private */
  var overrideBaseData = function(baseData, typeData, langData) {
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

  return MonsterCollection;

});
