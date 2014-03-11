require([
  'backbone',
  'router'
],
function(
  Backbone,
  AppRouter
) {
  'use strict';

  var App = {
    init: function() {
      this.Router = new AppRouter();
      Backbone.history.start();

      this.uiInteract();
    },
    uiInteract: function() {
      var that = this;
      if (!'orientation' in window) { return; }

      $(document).on('touchstart', 'a', that.handleEvent)
                 .on('touchmove',  'a', that.handleEvent)
                 .on('touchend',   'a', that.handleEvent);
    },
    handleEvent: function(e) {
      var $target = $(e.target);

      switch (e.type) {
        case 'touchstart':
        $target.addClass('is-active');
        break;

        case 'touchmove':
        case 'touchend':
        $target.removeClass('is-active');
        break;
      }
    }
  };

  App.init();

});
