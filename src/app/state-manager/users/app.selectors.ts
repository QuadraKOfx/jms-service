import {createFeatureSelector} from '@ngrx/store';
import {IClientProfile} from '../../../assets/models/client';

export interface IAppState {
  users: IClientProfile[];
}

export const initialAppState: IAppState = {
  users: null
};

export const getAppState = createFeatureSelector<IAppState>('appState');
