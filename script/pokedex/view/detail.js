define([
  'app',
  'conf',
  'util',
  'jquery',
  'marionette',
  'underscore'
], function (
  App,
  conf,
  util,
  $,
  Marionette,
  _
) {
  'use strict';

  var DetailView = Marionette.ItemView.extend({
    template: 'detail',
    className: 'l-view-detail',
    onShow: function(){
      App.vent.trigger('title', conf.titles.detail, this.model.get('name'));
    },
    events: {
      'tap .js-back-to': util.backTo
    },
    serializeData: function() {
      var cid = this.options.cid;

      this.model = this.collection.get(cid);

      var data = _.extend(this.model.attributes, {
        words: conf.words,
        titles: conf.titles
      });

      // タイプ相性
      data.typesChartStr = this.model.getDefTypeChartStr();
      var efx;
      for(efx in data.typesChartStr) {
        data.typesChartStr[efx] = _.map(data.typesChartStr[efx], getTypes);
      }

      // 種族値のグラフを出す
      data.baseStatsRatio = this.model.getBaseStatsRatio();

      return data;

      function getTypes(type) {
        return {
          typeStr: conf.words.types[type],
          type: type
        };
      }
    }
  });

  return DetailView;
});
