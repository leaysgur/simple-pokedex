define([
  'util',
  'conf',
  'backbone',
  'views/index',
  'views/about',
  'views/list',
  'views/detail',
  'collections/monster'
],
function(
  util,
  conf,
  Backbone,
  IndexView,
  AboutView,
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

      var $views = $('.js-view-contents');
      this.$views = $views;
      this.$view = (function() {
        var ret = {};
        $views.each(function(i, e) {
          var sfx = e.id.split('-').pop();
          ret[sfx] = $views.eq(i);
        });
        return ret;
      }());
    },
    routes: {
      '': 'index',
      'list': 'list',
      'list/ctg/:ctg': 'list',
      'detail/:cid': 'detail',
      'about': 'about'
    },
    index: function() {
      var that = this,
         IDENT = 'index';

      that.onRoute(IDENT, function() {
        new IndexView({
          el: that.$view[IDENT]
        });
      });
    },
    list: function(ctg) {
      var that = this,
         IDENT = 'list';

      that.onRoute(IDENT, function() {
        util.scroller.restore();
        that.collectionFetch.done(function() {
          new ListView({
            el: that.$view[IDENT],
            collection: that.collection
          },
          {
            ctg: ctg
          });
        });
      });
    },
    detail: function(cid) {
      var that = this,
         IDENT = 'detail';

      that.onRoute(IDENT, function() {
        util.scroller.store(window.scrollY);
        that.collectionFetch.done(function() {
          new DetailView({
            el: that.$view[IDENT],
            collection: that.collection
          }, {
            cid: cid
          });
        });
      });
    },
    about: function() {
      var that = this,
         IDENT = 'about';

      that.onRoute(IDENT, function() {
        new AboutView({
          el: that.$view[IDENT]
        });
      });
    },
    onRoute: function(route, routeFunc) {
      util.l('Routing', route);
      util.loading.show();

      routeFunc();

      util.l('Switch view to ->', route);
      this.$views.addClass('is-invisible');
      this.$view[route].removeClass('is-invisible');

      util.loading.hide();
    }
  });

  return AppRouter;

});
