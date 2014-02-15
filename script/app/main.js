require([
  'backbone',
  'handlebars',
  'router'
],
function(
  Backbone,
  Handlebars,
  AppRouter
) {
  'use strict';

  var ev = ('orientation' in window) ? {
    start: 'touchstart',
    move : 'touchmove',
    end  : 'touchend'
  } : {
    start: 'mousedown',
    move : 'mousemove',
    end  : 'click'
  };

  var App = {
    init: function() {
      this.Router = new AppRouter();
      Backbone.history.start();
      
      this.uiInteract();
    },
    uiInteract: function() {
      var that = this;

      $(document).on(ev.start, 'a', that.handleEvent)
                 .on(ev.move,  'a', that.handleEvent)
                 .on(ev.end,   'a', that.handleEvent);
    },
    handleEvent: function(e) {
      var $target = $(e.target);

      switch (e.type) {
        case ev.start:
        $target.addClass('is-active');
        break;
        
        case ev.move:
        break;
        
        case ev.end:
        var t = setTimeout(function() { $target.removeClass('is-active'); }, 250);
        clearTimeout(t);
        break;
      }
    }
  };

  App.init();

});
