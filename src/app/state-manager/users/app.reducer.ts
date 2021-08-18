import {Action, createReducer, on} from '@ngrx/store';
import {IAppState, initialAppState} from './app.selectors';
import * as AppStateActions from './app.actions';
import {reducerSetAdmin, reducerSetCars, reducerSetUsers} from './app.processing';

// tslint:disable-next-line:variable-name
const _reducer = createReducer(
  initialAppState,
  on(AppStateActions.app_setUsers, reducerSetUsers),
  on(AppStateActions.app_setCars, reducerSetCars),
  on(AppStateActions.app_setAdmin, reducerSetAdmin)
);

export function reducerAppState(state: IAppState, action: Action) {
  return _reducer(state, action);
}
