import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'

export default {
  input: 'parse.js',
  output: {
    file: `build/parse.js`,
    name: 'test',
    format: 'umd',
    sourcemap: true
  },
  plugins: [
    json(),
    globals(),
    builtins(),
    resolve(),
    commonjs()
  ]
}
