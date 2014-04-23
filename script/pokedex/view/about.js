define([
  'conf',
  'util',
  'jquery',
  'marionette'
], function (
  conf,
  util,
  $,
  Marionette
) {
  'use strict';

  var AboutView = Marionette.ItemView.extend({
    template: 'about',
    className: 'l-view-about',
    onShow: function(){
      util.title(conf.titles.about);
    },
    events: {
      'tap #js-clear-storage': 'clearStorage'
    },
    serializeData: function() {
      var data = {
        titles: conf.titles,
        texts: conf.texts.about
      };

      return data;
    },
    clearStorage: function(e) {
      e.preventDefault();
      if (util.isLocalStroageEnable()) {
        localStorage.removeItem(conf.storageKey);
      }
      window.alert(conf.texts.misc.clearStorage);
      location.href = '/';
    }
  });

  return AboutView;
});
