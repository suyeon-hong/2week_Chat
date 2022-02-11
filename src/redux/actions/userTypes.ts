import { UserState } from '@redux/reducers/user';

export enum ActionType {
  LOGIN_USER = 'LOGIN_USER',
}

export const loginUser = (username: Pick<UserState, 'username'>) => {
  return { type: ActionType.LOGIN_USER, payload: username };
};

export type Action = ReturnType<typeof loginUser>;
