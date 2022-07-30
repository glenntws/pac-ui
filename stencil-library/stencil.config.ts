import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';
import tailwind from 'stencil-tailwind-plugin';

export const config: Config = {
  plugins: [
    tailwind()
  ],
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
