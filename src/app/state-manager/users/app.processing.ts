import {IAppState} from './app.selectors';

export function reducerSetUsers(state: IAppState, {users}): IAppState {
  return {
    ...state,
    users: [...users]
  };
}

export function reducerSetCars(state: IAppState, {cars}): IAppState {
  return {
    ...state,
    cars: [...cars]
  };
}

export function reducerSetAdmin(state: IAppState, {admin}): IAppState {
  return {
    ...state,
    admin
  };
}
