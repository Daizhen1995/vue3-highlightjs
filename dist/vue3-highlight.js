(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('highlight.js')) :
  typeof define === 'function' && define.amd ? define(['highlight.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue3Highlightjs = factory(global.hljs));
}(this, (function (hljs) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var hljs__default = /*#__PURE__*/_interopDefaultLegacy(hljs);

  function index (app) {
    app.directive('highlightjs', function (el, binding) {
      var codeNodes = el.querySelectorAll('code');

      for (var i = 0; i < codeNodes.length; i++) {
        var codeNode = codeNodes[i];

        if (typeof binding.value === 'string') {
          codeNode.textContent = binding.value;
        }

        hljs__default['default'].highlightBlock(codeNode);
      }
    });
  }

  return index;

})));
