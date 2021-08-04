import {createAction, props} from '@ngrx/store';
import {IClientProfile} from '../../../assets/models/client';

export enum APP_STATE_ACTIONS {
  APP_IN = '[Navigation] App In',
  SET_USERS_STATE = '[Users] Set Users'
}

// tslint:disable-next-line:variable-name
export const app_setUsers = createAction(APP_STATE_ACTIONS.SET_USERS_STATE, props<{users: IClientProfile[]}>());
