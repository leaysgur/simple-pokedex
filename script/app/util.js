define('util', ['conf'], function (conf) {
  'use strict';

  var instance;
  if (instance) return instance;

  var util = {
    l: console.log.bind(console),
    title: (function() {
      var $header = $('#js-view-header');
      return function(base) {
        var rep = Array.prototype.slice.call(arguments, 1);
        base = this.printf(base, rep);
        document.title = base + conf.titles.site;
        $header.text(base + conf.titles.site);
      };
    }()),
    printf: function(l) {
      var i = 1, args = arguments;
      return l.replace(/%s/g, function() {
        return (i < args.length) ? args[i++] : '';
      });
    },
    scroller: (function() {
      var scrollY = 0;
      return {
        restore: function() {
          var t = setTimeout(function() {
            window.scrollTo(0, scrollY);
            clearTimeout(t);
          }, 100);
        },
        store: function(y) {
          scrollY = y || 0;
        }
      };
    }())
  };

  instance = util;
  return instance;

});
