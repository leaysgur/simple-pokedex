define([
  'app',
  'conf',
  'util',
  'backbone',
  'jquery',
  'marionette',
  'underscore'
], function (
  App,
  conf,
  util,
  Backbone,
  $,
  Marionette,
  _
) {
  'use strict';

  var ListView = Marionette.ItemView.extend({
    template: 'list',
    className: 'l-view-list',
    onShow: function(){
      if (this.options.category) {
        App.vent.trigger('title', conf.titles.categorisedList, this.options.firstCategoryStr);
      } else {
        App.vent.trigger('title', conf.titles.list);
      }
    },
    serializeData: function() {
      var monsters = [];
      var ctg = this.options.category = this.options.category || null;
      if (ctg) {
        var category = conf.categories[ctg];
        this.options.firstCategoryStr = category.label;
        var contents = category.contents;
        monsters = getCategorizedCollection(this.collection, contents);
      } else {
        monsters = this.collection;
      }

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

      return data;
    }
  });

  return ListView;

  /**
   * @param {Array} collection MonsterCollectionに準ずる配列
   * @param {String} contents どの絞り込みカテゴリたちか
   * @return {Array} monsters 絞りこまれ、ソートされたMonsterCollectionに準ずる配列
   */
  function getCategorizedCollection(collection, contents) {
    var monsters = [];
    // これで返ってくるのがBackbone.CollectionじゃなくてただのModelの詰まった配列・・
    monsters = collection.filter(function(model) {
      var firstLetter = model.get('name').charAt(0);
      return _.some(contents, function(content) {
        return content === firstLetter;
      });
    });
    // よって、Collection.sort() しても意味ないのでこっちでやる
    // まあそのおかげでカテゴリ絞ってない時のリストの並びは今まで通りでいられる
    monsters = _.sortBy(monsters, function(model) { return model.get('name'); });
    return monsters;
  }
});
