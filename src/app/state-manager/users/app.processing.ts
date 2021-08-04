import {IAppState} from './app.selectors';

export function reducerSetUsers(state: IAppState, {users}) {
  return {
    ...state,
    users: [...users]
  };
}
