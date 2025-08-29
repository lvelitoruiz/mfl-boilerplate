import { Config } from '@stencil/core';
import { postcss } from '@stencil-community/postcss';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'ui-library',
  globalStyle: 'src/global/app.css',
  plugins: [
    postcss({
      plugins: [require('tailwindcss'), require('autoprefixer')],
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
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
    },
  ],
  testing: {
    browserHeadless: "shell",
  },
};
