import path from 'path'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

const inputPath = path.resolve(__dirname, '../src/index.js')
const umdOutputPath = path.resolve(__dirname, '../dist/vue3-highlight.min.js')
const cjsOutputPath = path.resolve(__dirname, '../dist/vue3-highlight-cjs.min.js')
const esOutputPath = path.resolve(__dirname, '../dist/vue3-highlight-es.min.js')

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
  plugins: [babel(), terser()],
}
