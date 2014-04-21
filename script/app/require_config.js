require.config({
  baseUrl: '/script/app',
  paths: {
    templates:  './tmpl/templates',
    underscore: '../vendor/underscore',
    jquery:     '../vendor/jquery',
    backbone:   '../vendor/backbone',
    marionette:   '../vendor/backbone.marionette'
  },
  shim: {
    templates: {
      exports: 'JST'
    },
    jquery: {
      exports: ['$', 'jQuery']
    },
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    marionette: {
      deps: ['underscore', 'jquery', 'backbone'],
      exports: 'Marionette'
    }
  }
  // キャッシュOFF
  ,urlArgs: "bust=" +  (new Date()).getTime()
});
