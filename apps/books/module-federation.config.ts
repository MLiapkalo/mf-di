import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'books',
  exposes: {
    './Routes': 'apps/books/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
