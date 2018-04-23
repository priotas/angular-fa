import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default [
  // browser-friendly UMD build
  {
    input: 'src/angular-fa.js',
    output: {
      format: 'umd',
      name: 'angularFa',
      file: pkg.browser,
      globals: {
        angular: 'angular',
        '@fortawesome/fontawesome': '@fortawesome/fontawesome'
      }
    },
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      babel({
        exclude: ['node_modules/**'],
        presets: [
          [
            'env',
            {
              modules: false
            }
          ]
        ],
        babelrc: false,
        plugins: ['angularjs-annotate']
      })
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // the `targets` option which can specify `dest` and `format`)
  {
    input: 'src/angular-fa.js',
    external: ['ms'],
    output: [{ file: pkg.main, format: 'cjs' }, { file: pkg.module, format: 'es' }],
    plugins: [
      babel({
        exclude: ['node_modules/**'],
        presets: [
          [
            'env',
            {
              modules: false
            }
          ]
        ],
        babelrc: false,
        plugins: ['angularjs-annotate']
      })
    ]
  }
];
