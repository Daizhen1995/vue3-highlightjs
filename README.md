# vue3-highlightjs

[Vue.js 3.x](https://v3.vuejs.org/) syntax highlighting made easy, using [highlight.js](https://highlightjs.org/).

## Quickstart

### Install

npm install --save vue3-highlightjs or use dist/vue3-highlight.min.js

### Usage

For vue-cli/vite user:

```javascript
import { createApp } from 'vue'
import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/solarized-light.css'

const app = createApp({})

app.use(VueHighlightJS)
```

For standalone usage:

```html
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/default.min.css" />
<script src="https://cdn.bootcdn.net/ajax/libs/vue/3.0.2/vue.global.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/highlight.min.js"></script>
<script src="../dist/vue3-highlight.js"></script>
```

### Sample

In Vue sfc

```html
<pre v-highlightjs="sourcecode"><code class="javascript"></code></pre>

<pre v-highlightjs><code class="javascript">const s = new Date().toString()</code></pre>
```

In html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/default.min.css" />
  </head>

  <body>
    <div id="app">
      <pre v-highlightjs><code class="javascript">const s = new Date().toString()</code></pre>
    </div>
    <script src="https://cdn.bootcdn.net/ajax/libs/vue/3.0.2/vue.global.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/highlight.min.js"></script>
    <script src="../dist/vue3-highlight.js"></script>
    <script>
      Vue.createApp({}).use(Vue3Highlightjs).mount('#app')
    </script>
  </body>
</html>
```
