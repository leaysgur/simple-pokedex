require([
  'backbone',
  'router'
],
function(
  Backbone,
  AppRouter
) {
  'use strict';

  new AppRouter();
  Backbone.history.start();

});
