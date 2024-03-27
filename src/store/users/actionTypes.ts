export interface User {
  id: string;
  surname: string;
  name: string;
  middleName: string;
  email: string;
  login: string;
}

export interface UsersState {
  users: User[];
}

export enum UsersActionTypes {
  CREATE_USER = "CREATE_USER",
  EDIT_USER = "EDIT_USER",
  DELETE_USER = "DELETE_USER",
}

interface CreateUserAction {
  type: UsersActionTypes.CREATE_USER;
  payload: User;
}

interface EditUserAction {
  type: UsersActionTypes.EDIT_USER;
  payload: User;
}

interface DeleteUserAction {
  type: UsersActionTypes.DELETE_USER;
  payload: string;
}

export type UsersActions = CreateUserAction | EditUserAction | DeleteUserAction;
