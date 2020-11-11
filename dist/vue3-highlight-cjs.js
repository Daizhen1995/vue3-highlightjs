'use strict';

var hljs = require('highlight.js');

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

module.exports = index;
