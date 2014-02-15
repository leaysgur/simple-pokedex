define([
  'util',
  'conf',
  'backbone',
  'jquery',
  'views/index',
  'views/list',
  'views/detail',
  'collections/monster'
],
function(
  util,
  conf,
  Backbone,
  $,
  IndexView,
  ListView,
  DetailView,
  MonsterCollection
) {
  'use strict';


  var AppRouter = Backbone.Router.extend({
    initialize: function() {
      util.l('Router init!');

      this.collection = new MonsterCollection();
      this.collectionFetch = this.collection.fetch();
    },
    routes: {
      '': 'index',
      'list': 'list',
      'list/ctg/:ctg': 'list',
      'detail/:cid': 'detail',
      'about': 'about'
    },
    index: function() {
      var that = this;
      util.l('Routing index');

      that.onRouteStart('index');
      new IndexView({
        el: '#js-view-index'
      });
      that.onRouteEnd('index');
    },
    list: function(ctg) {
      var that = this;
      util.l('Routing list', ctg);

      that.onRouteStart('list');
      util.scroller.restore();
      that.collectionFetch.done(function() {
        new ListView({
          el: '#js-view-list',
          collection: that.collection
        },
        {
          ctg: ctg
        });
        that.onRouteEnd('list');
      });
    },
    detail: function(cid) {
      var that = this;
      util.l('Routing detail cid ->', cid);

      that.onRouteStart('detail');
      util.scroller.store(window.scrollY);
      that.collectionFetch.done(function() {
        new DetailView({
          el: '#js-view-detail',
          collection: that.collection
        }, {
          cid: cid
        });
        that.onRouteEnd('detail');
      });
    },
    about: function() {
      var that = this;
      util.l('Routing about');

      that.onRouteStart('about');
/*
      new IndexView({
        el: '#js-view-index'
      });
*/
      util.title(conf.titles.about);

      that.onRouteEnd('about');
    },
    onRouteStart: function(route) {
      util.loading.show();
    },
    onRouteEnd: function(route) {
      util.l('Switch view to ->', route);

      $('.js-view-contents').hide();
      $('#js-view-'+route).show();
      util.loading.hide();
    }
  });

  return AppRouter;

});
