define([
  'util',
  'conf',
  'backbone'
], function (
  util,
  conf,
  Backbone
) {
  'use strict';

  var AboutView = Backbone.View.extend({
    initialize: function() {
      util.l('AboutView init');
      this.render();
    },
    template: Handlebars.compile($('#js-tmpl-about').html()),
    render: function() {
      var that = this;
      util.l('AboutView render', that);


      var data = {
        titles: conf.titles,
        texts: conf.texts.about
      };

      that.$el.html(that.template(data));
      util.title(conf.titles.about);

      return that;
    },
    events: {
      'click .js-back-to': util.backTo
    }
  });



  return AboutView;
});
