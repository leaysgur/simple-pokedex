define([
  'marionette',
  'util',
  'app',
  'collection/monsters',
  'view/about',
  'view/detail',
  'view/index',
  'view/list'
], function(
  Marionette,
  util,
  App,
  MonstersCollection,
  AboutView,
  DetailView,
  IndexView,
  ListView
) {
  'use strict';

  /**
   * @class Controller
   *
   * ルーターからキックされるコントローラー。
   */
  var Controller = Marionette.Controller.extend({
    initialize: function() {
      App.content.on('show', function() {
        util.loading.hide();
      });
      App.content.on('close', function() {
        util.loading.show();
      });
      this.collection = new MonstersCollection();
      this.collectionFetch = this.collection.fetch();
    },
    /**
     * いわゆるトップページ
     */
    index: function() {
      console.log('index');
      util.scroller.store();
      var indexView = new IndexView();
      App.content.show(indexView);
    },
    /**
     * このサイトについてページ
     */
    about: function() {
      console.log('about');
      util.scroller.store();
      var aboutView = new AboutView();
      App.content.show(aboutView);
    },
    /**
     * リストのページ
     * カテゴリで絞りこまれればその内容を、指定がなければ全てを一覧で。
     *
     * @param {String} ctg 名前の頭文字のカテゴリ
     */
    list: function(ctg) {
      console.log('list', ctg);
      util.scroller.restore();
      var that = this;
      that.collectionFetch.done(function() {
        var listView = new ListView({
          collection: that.collection,
          category: ctg
        });
        App.content.show(listView);
      });
    },
    /**
     * 詳細ページ
     * 渡されたcidで、モンスターの詳細を表示。
     *
     * @param {Number} cid モンスターのモデルのcid
     */
    detail: function(cid) {
      console.log('detail', cid);
      util.scroller.store();
      var that = this;
      that.collectionFetch.done(function() {
        var detailView = new DetailView({
          collection: that.collection,
          cid: cid
        });
        App.content.show(detailView);
      });
    }
  });

  return Controller;
});
