import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';
import { postcss } from '@stencil/postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import purgecss from '@fullhuman/postcss-purgecss';
import cssnano from 'cssnano';

export const config: Config = {
  plugins: [
    postcss({
      plugins: [
          tailwindcss({
            content: ['./src/**/*.{ts,tsx,html}'],
            theme: {
              extend: {},
            },
            plugins: []
          }),
          autoprefixer,
          purgecss({
            content: ["./src/**/*.tsx", "./src/**/*.css", "./src/index.html"],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
          }),
          cssnano()
      ],
      alwaysParseNonCachedCss: true
    })
  ],
  globalStyle: "src/global/global.css",
  devServer: {
    reloadStrategy: 'pageReload'
  },
  namespace: 'stencil-library',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    react({
      componentCorePackage: 'pacment-components',
      proxiesFile: '../react-library/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    })
  ],
};
