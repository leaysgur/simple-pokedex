define([
  'conf',
  'util',
  'jquery',
  'backbone',
  'marionette'
], function (
  conf,
  util,
  $,
  Backbone,
  Marionette
) {
  'use strict';

  var IndexView = Marionette.ItemView.extend({
    template: 'index',
    className: 'l-view-index',
    onShow: function(){
      util.title(conf.titles.index);
    },
    serializeData: function() {
      var data = {
        titles: conf.titles,
        texts: conf.texts.index,
        categories: conf.categories
      };

      return data;
    },
    events: {
      // 'click .js-go-to': util.goTo,
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
