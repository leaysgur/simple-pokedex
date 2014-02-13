define([
  'util',
  'backbone',
  'jquery',
  'views/index',
  'views/detail',
  'collections/monster'
],
function(
  util,
  Backbone,
  $,
  IndexView,
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
      'detail/:cid': 'detail'
    },
    index: function() {
      var that = this;
      util.l('Routing index');

      util.scroller.restore();
      that.collectionFetch.done(function() {
        new IndexView({
          el: '#js-view-index',
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
    switchView: function(route) {
      util.l('Switch view to ->', route);

      $('.js-view-contents').hide();
      $('#js-view-'+route).show();
    }
  });

  return AppRouter;

});
