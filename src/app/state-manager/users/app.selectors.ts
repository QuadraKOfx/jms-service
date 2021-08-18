import {createFeatureSelector} from '@ngrx/store';
import {ICarProfile, IClientProfile} from '../../../assets/models/client';
import {IAdmin} from '../../../assets/models/admin';

export interface IAppState {
  users: IClientProfile[];
  cars: ICarProfile[];
  admin: IAdmin;
}

export const initialAppState: IAppState = {
  users: null,
  cars: null,
  admin: null
};

export const getAppState = createFeatureSelector<IAppState>('appState');
