import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'
import builtins from 'rollup-plugin-node-builtins'

export default {
  input: 'room.js',
  output: {
    file: `build/room.js`,
    name: 'test',
    format: 'umd',
    sourcemap: true
  },
  plugins: [
    resolve(),
    json(),
    commonjs(),
    builtins()
  ]
}
