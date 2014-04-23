define([
  'backbone',
  'jquery'
], function (
  Backbone,
  $
) {
  'use strict';

  var util = {
    title: (function() {
      var $header = $('#js-view-header');
      return function(title) {
        var rep = Array.prototype.slice.call(arguments, 1);
        title = this.printf(title, rep);
        document.title = title;
        $header.text(title);
      };
    }()),
    printf: function(l) {
      var i = 1, args = arguments;
      return l.replace(/%s/g, function() {
        return (i < args.length) ? args[i++] : '';
      });
    },
    backTo: function(e) {
      e.preventDefault();
      history.back();
    },
    loading: (function() {
      var $layer = $('#js-loading-layer');
      return {
        show: function() {
          $layer.addClass('is-shown');
        },
        hide: function() {
          var t = setTimeout(function() {
            $layer.removeClass('is-shown');
            clearTimeout(t);
          }, 100);
        }
      };
    }()),
    scroller: (function() {
      var scrollY = 0;
      var $window = $('html,body');
      var animateScrollTop = function (y) {
        var t = window.setTimeout(function() {
          $window.animate({ scrollTop: y }, 250);
          clearTimeout(t);
        }, 100);
      };
      return {
        restore: function() {
          animateScrollTop(scrollY);
        },
        store: function() {
          scrollY = window.scrollY;
          animateScrollTop(0);
        }
      };
    }()),
    isLocalStroageEnable: function () {
      var chk = 'simplePokedex';
      try {
        localStorage.setItem(chk, chk);
        localStorage.removeItem(chk);
        return true;
      } catch(e) {
        return false;
      }
    }
  };

  return util;
});
