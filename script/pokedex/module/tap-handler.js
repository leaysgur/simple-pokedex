define([
  'jquery'
],
function(
  $
) {
  'use strict';

  /**
   * @class TapHandler
   *
   * タップされた時にクラスくっつけて、
   * ちょっとしたらはがす人。
   */
  var TapHandler = {
    /**
     * いわゆるコンストラクタ的メソッド
     *
     * @param {Object} [options]
     *   オプションのオブジェクト
     */
    start: function(options) {
      options = $.extend({
        targetSelectors: ['a'],
        parentSelector: document,
        toggleDuration: 500,
        className: 'is-tapped'
      }, options);

      this.initialize(options);
    },
    /**
     * @param {Object} [options]
     *   オプションのオブジェクト
     */
    initialize: function(options) {
      var $parent = $(options.parentSelector);
      for (var i = 0, target; (target = options.targetSelectors[i]); i++) {
        $parent.on('tap', target, handleTap);
      }

      function handleTap(e) {
        var $tappedElm = $(e.currentTarget);
        $tappedElm.addClass(options.className);
        window.setTimeout(function() {
          $tappedElm.removeClass(options.className);
        }, options.toggleDuration);
      }
    }
  };

  return TapHandler;
});
