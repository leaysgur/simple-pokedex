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

  var IndexView = Backbone.View.extend({
    initialize: function() {
      util.l('IndexView init');
      this.render();
    },
    template: Handlebars.compile($('#js-tmpl-index').html()),
    render: function() {
      var that = this;
      util.l('IndexView render', that);

      var data = _.map(that.collection.models, function(model) {
        return {
          name: model.attributes.name,
          cid: model.cid
        };
      });

      that.$el.html(that.template(data));

      util.title(conf.titles.index);

      return that;
    },
    events: {
      'touchend a': 'showDetail'
    },
    showDetail: function(e) {
      e.preventDefault();

      var $this = $(e.target);
      Backbone.history.navigate($this.data('href'), {trigger: true});
    }
  });



  return IndexView;
});
