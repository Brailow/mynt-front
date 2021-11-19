import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css',
  taskQueue: 'async',
  namespace: 'Mynt',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'mynt-front',
      proxiesFile: '../stencil-ds-react-template/src/components.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
    },
    {
      type: 'www',
      serviceWorker: null
    },

],
  
};
