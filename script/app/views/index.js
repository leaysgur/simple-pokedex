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

  var IndexView = Backbone.View.extend({
    initialize: function() {
      util.l('IndexView init');
      this.render();
    },
    template: _.template($('#js-tmpl-index').html()),
    render: function() {
      var that = this;
      util.l('IndexView render', that);

      var data = {
        titles: conf.titles,
        texts: conf.texts.index,
        categories: conf.categories
      };

      that.$el.html(that.template(data));
      util.title(conf.titles.index);

      return that;
    },
    events: {
      'click .js-go-to': util.goTo,
      'click .js-ctg-btn': 'doCtgSearch'
    },
    doCtgSearch: function(e) {
      e.preventDefault();
      var ctg = $(e.target).data('ctg-key');
      Backbone.history.navigate('/list/ctg/' + ctg, {trigger: true});
    }
  });

  return IndexView;
});
