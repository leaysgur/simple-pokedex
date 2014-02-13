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
      util.l('ListView init');
      this.render();
    },
    template: Handlebars.compile($('#js-tmpl-list').html()),
    render: function() {
      var that = this;
      util.l('ListView render', that);

      var monsters = _.map(that.collection.models, function(model) {
        return {
          name: model.attributes.name,
          id: model.attributes._id,
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
      'click .js-go-to': util.navigate,
      'click .js-show-detail': 'showDetail'
    },
    showDetail: function(e) {
      e.preventDefault();

      var $this = $(e.target);
      Backbone.history.navigate('/detail/'+$this.data('cid'), {trigger: true});
    }
  });



  return ListView;
});
