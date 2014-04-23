define([
  'backbone',
  'jquery',
  'marionette',
  'module/tap-handler',
  // 以下、読み込むだけのものたち
  'jqueryFinger'
], function(
  Backbone,
  $,
  Marionette,
  TapHandler
) {
  'use strict';

  /**
   * @class App
   *
   * アプリケーションのインスタンス作る。
   * あとは1回やればいいような処理もココでやる。
   */
  var App = new Marionette.Application();

  App.addRegions({
    header: '#js-view-header',
    content: '#js-view-content'
  });

  App.on('initialize:after', function() {
    Backbone.history.start();

    if ('orientation' in window) {
      TapHandler.start({
        targetSelectors: ['[class*=b-]'],
        parentSelector: '#js-view-content',
        toggleDuration: 250,
        className: 'is-acitve'
      });
    }
  });

  return App;
});
