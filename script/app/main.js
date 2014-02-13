require([
  'backbone',
  'router'
],
function(
  Backbone,
  AppRouter
) {
  'use strict';

  var App = {
    init: function() {
      this.Router = new AppRouter();
      Backbone.history.start();
    }
  };

  App.init();

});
