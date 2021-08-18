import {createAction, props} from '@ngrx/store';
import {ICarProfile, IClientProfile} from '../../../assets/models/client';
import {IAdmin} from '../../../assets/models/admin';

export enum APP_STATE_ACTIONS {
  APP_IN = '[Navigation] App In',
  SET_USERS_STATE = '[Users] Set Users',
  SET_CARS_STATE = '[Cars] Set Cars',
  SET_ADMIN_STATE = '[Admin] Set Admin'
}

// tslint:disable-next-line:variable-name
export const app_setUsers = createAction(APP_STATE_ACTIONS.SET_USERS_STATE, props<{users: IClientProfile[]}>());
export const app_setCars = createAction(APP_STATE_ACTIONS.SET_CARS_STATE, props<{cars: ICarProfile[]}>());
export const app_setAdmin = createAction(APP_STATE_ACTIONS.SET_ADMIN_STATE, props<{admin: IAdmin}>());
