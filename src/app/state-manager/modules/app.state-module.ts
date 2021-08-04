import {reducerAppState} from '../users/app.reducer';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

export const AppStateModule = [
  StoreModule.forFeature('appState', reducerAppState),
  EffectsModule.forFeature([]),
];
