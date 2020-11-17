import path from 'path'
import babel from '@rollup/plugin-babel'

const inputPath = path.resolve(__dirname, '../src/index.js')
const umdOutputPath = path.resolve(__dirname, '../dist/vue3-highlight.js')
const cjsOutputPath = path.resolve(__dirname, '../dist/vue3-highlight-cjs.js')
const esOutputPath = path.resolve(__dirname, '../dist/vue3-highlight-es.js')

export default {
  input: inputPath,
  output: [
    {
      file: umdOutputPath,
      format: 'umd',
      name: 'Vue3Highlightjs',
      globals: {
        hljs: 'hljs',
      },
    },
    { file: cjsOutputPath, format: 'cjs' },
    { file: esOutputPath, format: 'es' },
  ],
  plugins: [babel()],
}
