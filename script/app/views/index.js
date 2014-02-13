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


      var data = {
        titles: conf.titles
      };

      that.$el.html(that.template(data));

      util.title(conf.titles.index);

      return that;
    },
    events: {
      'click .js-go-to': util.navigate
    }
  });



  return IndexView;
});
