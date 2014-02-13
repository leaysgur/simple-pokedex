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
      this.on('route', function(route) {
        this.switchView(route);
      });
    },
    routes: {
      '': 'index',
      'list': 'list',
      'detail/:cid': 'detail',
      'about': 'about'
    },
    index: function() {
      var that = this;
      util.l('Routing index');
      new IndexView({
        el: '#js-view-index'
      });
    },
    list: function() {
      var that = this;
      util.l('Routing list');

      util.scroller.restore();
      that.collectionFetch.done(function() {
        new ListView({
          el: '#js-view-list',
          collection: that.collection
        });
      });
    },
    detail: function(cid) {
      var that = this;
      util.l('Routing detail cid ->', cid);

      util.scroller.store(window.scrollY);
      that.collectionFetch.done(function() {
        new DetailView({
          el: '#js-view-detail',
          collection: that.collection
        }, {
          cid: cid
        });
      });
    },
    about: function() {
      var that = this;
      util.l('Routing about');
      util.title(conf.titles.about);
    },

    switchView: function(route) {
      util.l('Switch view to ->', route);

      $('.js-view-contents').hide();
      $('#js-view-'+route).show();
    }
  });

  return AppRouter;

});
