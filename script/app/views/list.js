define([
  'util',
  'conf',
  'underscore',
  'jquery',
  'handlebars',
  'backbone'
], function (
  util,
  conf,
  _,
  $,
  Handlebars,
  Backbone
) {
  'use strict';

  var ListView = Backbone.View.extend({
    initialize: function() {
      this.opt = Array.prototype.slice.call(arguments, 1)[0];
      util.l('ListView init with option ->', this.opt);
      this.render();
    },
    template: Handlebars.compile($('#js-tmpl-list').html()),
    render: function() {
      var that = this;
      util.l('ListView render', that);

      var monsters = [];
      var ctg = this.opt.ctg || null;
      if (ctg) {
        var contents = conf.categories[ctg].contents;
        // これで返ってくるのがBackbone.CollectionじゃなくてただのModelの詰まった配列・・
        monsters = that.collection.filter(function(model) {
          var firstLetter = model.get('name').charAt(0);
          return _.some(contents, function(content) {
            return content === firstLetter;
          });
        });
        // よって、Collection.sort() しても意味ないのでこっちでやる
        // まあそのおかげでカテゴリ絞ってない時のリストの並びは今まで通りでいられる
        monsters = _.sortBy(monsters, function(model) { return model.get('name'); });
      }

      // カテゴリ絞ってないとき
      if (!monsters.length) { monsters = that.collection; }

      monsters = monsters.map(function(model) {
        return {
          name: model.get('name'),
          id: model.get('_id'),
          cid: model.cid
        };
      });

      var data = {
        monsters: monsters,
        titles: conf.titles
      };


      that.$el.html(that.template(data));
      util.title(conf.titles.list);

      return that;
    },
    events: {
      'click .js-go-to': util.goTo,
      'click .js-show-detail': 'showDetail'
    },
    showDetail: function(e) {
      e.preventDefault();

      var cid = $(e.target).data('cid');
      Backbone.history.navigate('/detail/'+cid, {trigger: true});
    }
  });



  return ListView;
});