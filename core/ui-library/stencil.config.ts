import { Config } from '@stencil/core';
// import { postcss } from '@stencil-community/postcss';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'ui-library',
  globalStyle: 'src/tokens/design-tokens.css',
  // plugins: [
  //   postcss({
  //     plugins: [require('tailwindcss'), require('autoprefixer')],
  //   }),
  // ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: '**/*.css',
          dest: '../test-apps/react-test-new/public/ui-library',
          warn: true
        },
        {
          src: '**/*.css',
          dest: '../test-apps/angular-test/public/ui-library',  
          warn: true
        },
        {
          src: '**/*.css',
          dest: '../test-apps/vue-test/public/ui-library',
          warn: true
        }
      ]
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    // CDN Bundle for script tag usage
    {
      type: 'dist-custom-elements',
      dir: 'dist/cdn',
      customElementsExportBehavior: 'single-export-module',
      generateTypeDeclarations: false,
      externalRuntime: false,
      includeGlobalScripts: true,
      minify: true,
    },
    reactOutputTarget({
      componentCorePackage: 'ui-library',
      proxiesFile: './dist/react/index.ts',
      includeDefineCustomElements: true,
      outDir: './dist/react/',
    }),
    vueOutputTarget({
      componentCorePackage: 'ui-library',
      proxiesFile: './dist/vue/components.ts',
      includeDefineCustomElements: false,
      includeImportCustomElements: true,
    }),
    angularOutputTarget({
      componentCorePackage: 'ui-library',
      outputType: 'component',
      directivesProxyFile: './dist/angular/components.ts',
      directivesArrayFile: './dist/angular/index.ts',
    }),
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null,
      dir: 'www',
    },
  ],
  testing: {
    browserHeadless: "shell",
  },
};
