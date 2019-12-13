const resolve = require('rollup-plugin-node-resolve');
const license = require('rollup-plugin-license');

export default {
  input: 'start.mjs',
  plugins:
  [
    resolve({
      only: [ 'wpe-lightning-spark', 'wpe-lightning' ]
    }),
    license({
      banner: {
        commentStyle: 'none', // INSERTING CODE !!!
        content:
`
////////////////////////////////////////////////////
const epoch_ms = Date.now(); // In the Beginning ...
////////////////////////////////////////////////////
`
      }
    }),
  ],
  output: {
    file: './lightning-perf-spark.js',
    format: 'cjs',
    name: 'lng'
  }
};