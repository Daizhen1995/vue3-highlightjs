import hljs from 'highlight.js';

function index (app) {
  app.directive('highlightjs', function (el, binding) {
    var codeNodes = el.querySelectorAll('code');

    for (var i = 0; i < codeNodes.length; i++) {
      var codeNode = codeNodes[i];

      if (typeof binding.value === 'string') {
        codeNode.textContent = binding.value;
      }

      hljs.highlightBlock(codeNode);
    }
  });
}

export default index;
