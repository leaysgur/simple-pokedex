require.config({
  baseUrl: '/script/app',
  paths: {
    underscore: '../vendor/underscore',
    jquery:     '../vendor/jquery',
    backbone:   '../vendor/backbone',
    handlebars: '../vendor/handlebars'
  },
  shim: {
    handlebars: {
      exports: 'Handlebars'
    },
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});
