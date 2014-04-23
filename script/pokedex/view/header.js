define([
  'app',
  'util',
  'jquery',
  'marionette'
], function (
  App,
  util,
  $,
  Marionette
) {
  'use strict';

  var HeaderView = Marionette.ItemView.extend({
    el: '#js-view-header',
    initialize: function() {
      var that = this;
      App.vent.on('title', function(title){
        var rep = Array.prototype.slice.call(arguments, 1);
        title = util.printf(title, rep);
        document.title = title;
        that.$el.text(title);
      });
    }
  });

  return HeaderView;
});
