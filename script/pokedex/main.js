/**
 * Require.jsの設定をココでしておく
 */
require.config({
  baseUrl: '/script/pokedex',
  paths: {
    templates:     './templates',
    underscore:   '../vendor/underscore',
    jquery:          '../vendor/jquery',
    jqueryFinger: '../vendor/jquery.finger',
    backbone:     '../vendor/backbone',
    marionette:   '../vendor/backbone.marionette'
  },
  shim: {
    templates: {
      exports: 'JST'
    },
    jquery: {
      exports: ['jQuery']
    },
    jqueryFinger: {
      deps: ['jquery']
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
  // 開発中はキャッシュOFF
  // ,urlArgs: "bust=" +  (new Date()).getTime()
});

/**
 * いわゆるMain。
 * ここでアプリとルーターを初期化してスタートする。
 */
require([
  'app',
  'controller',
  'templates',
  'router',
  'marionette'
],
function(
  App,
  Controller,
  JST,
  Router,
  Marionette
) {
  'use strict';

  // ルーター起動
  App.addInitializer(function() {
    new Router({
      controller : new Controller()
    });
  });

  // JSTのテンプレ使う
  App.addInitializer(function() {
    Marionette.Renderer.render = function(template, data) {
      if (!JST[template]) throw "Template '" + template + "' not found!";
        return JST[template](data);
    };
  });

  App.start();
});
