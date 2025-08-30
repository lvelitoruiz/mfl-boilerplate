import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/cdn-bundle.ts',
  output: [
    {
      file: 'dist/cdn/ui-library.js',
      format: 'iife',
      name: 'UILibrary',
      banner: '/* UI Library CDN Bundle - Include with script tag */',
      globals: {},
    },
    {
      file: 'dist/cdn/ui-library.min.js',
      format: 'iife', 
      name: 'UILibrary',
      banner: '/* UI Library CDN Bundle (Minified) */',
      plugins: [terser()],
      globals: {},
    }
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      declarationMap: false,
      declaration: false
    }),
    resolve({
      browser: true,
      preferBuiltins: false
    }),
    commonjs(),
  ],
  external: []
};