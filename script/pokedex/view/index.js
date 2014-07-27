define([
  'app',
  'conf',
  'util',
  'jquery',
  'backbone',
  'marionette'
], function (
  App,
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
      App.vent.trigger('title', conf.titles.index);
    },
    serializeData: function() {
      var data = {
        titles: conf.titles,
        texts: conf.texts.index,
        words: conf.words,
        categories: conf.categories
      };

      return data;
    }
  });

  return IndexView;
});
