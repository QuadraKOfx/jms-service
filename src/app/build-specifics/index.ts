import {StoreDevtoolsModule} from '@ngrx/store-devtools';

export const extModules = [
  StoreDevtoolsModule.instrument({
    maxAge: 25, // Retains last 25 states
  }),
];
export const extProviders = [];
