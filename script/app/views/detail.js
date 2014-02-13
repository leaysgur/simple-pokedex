define([
  'util',
  'conf',
  'underscore',
  'jquery',
  'handlebars',
  'backbone'
], function (
  util,
  conf,
  _,
  $,
  Handlebars,
  Backbone
) {
  'use strict';

  var DetailView = Backbone.View.extend({
    initialize: function(prop, o) {
      util.l('DetailView init');

      this.cid = o.cid;
      this.render();
    },
    template: Handlebars.compile($('#js-tmpl-detail').html()),
    render: function() {
      util.l('DetailView render', this);

      this.model = this.collection.get(this.cid);

      var data = $.extend(this.model.attributes, {
        words: conf.words,
        titles: conf.titles
      });

      // タイプ相性
      data.typesChartStr = this.model.getDefTypeChartStr();
      for(var efx in data.typesChartStr) {
        data.typesChartStr[efx] = _.map(data.typesChartStr[efx], function(type) {
          return {
            typeStr: conf.words.types[type],
            type: type
          };
        });
      }

      // 種族値のグラフを出す
      data.baseStatsRatio = this.model.getBaseStatsRatio();

      this.$el.html(this.template(data));
      util.title(conf.titles.detail, data.name);

      return this;
    },
    events: {
      'click .js-go-to': util.navigate
    }
  });

  return DetailView;
});
