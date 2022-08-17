import hljs from 'highlight.js'

export default function (app) {
  app.directive('highlightjs', (el, binding) => {
    const codeNodes = el.querySelectorAll('code')

    for (let i = 0; i < codeNodes.length; i++) {
      const codeNode = codeNodes[i]

      if (typeof binding.value === 'string') {
        codeNode.textContent = binding.value
      }
      if (Number(hljs__default["default"].versionString.slice(0, 2)) >= 11){
        hljs.highlightElement(codeNode)
      }
      else{
        hljs.highlightBlock(codeNode)
      }
    }
  })
}
