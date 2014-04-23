define([
  'marionette'
], function(
  Marionette
) {
  'use strict';

  /**
   * @class Router
   *
   * ルーティングの定義だけ書く。
   * 実際の挙動はControllerに書いてあって、
   * インスタンス化はmainでやる。
   */
  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      '': 'index',
      'list': 'list',
      'list/ctg/:ctg': 'list',
      'detail/:cid': 'detail',
      'about': 'about'
    }
  });

  return Router;
});
