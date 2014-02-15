require.config({
  baseUrl: '/script/app',
  paths: {
    underscore: '../vendor/underscore',
    jquery:     '../vendor/jquery',
    backbone:   '../vendor/backbone'
  },
  shim: {
    jquery: {
      exports: ['$', 'jQuery']
    },
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  },
  // キャッシュOFF
  urlArgs: "bust=" +  (new Date()).getTime()
});
