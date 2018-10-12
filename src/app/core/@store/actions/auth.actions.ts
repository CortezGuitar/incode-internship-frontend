import { Action } from '@ngrx/store';

export const REGISTER: string = '[Register] Register';
export const REGISTER_SUCCESS: string = '[Register] Register Success';
export const REGISTER_FAILED: string = '[Register] Register Failed';
export const LOGIN: string = '[Login] Login';
export const LOGIN_SUCCESS: string = '[Login] Login Success';
export const LOGIN_FAILED: string = '[Login] Login Failed';
export const GET_USER_SUCCESS: string = '[Login] Get User Success';
export const GET_USER_FAILED: string = '[Login] Get User Failed';
export const LOGOUT: string = '[Login] Logout';

export class RegistrAction implements Action {
  readonly type: string = REGISTER;
  constructor(public payload: any) {}
}

export class RegistrSuccess implements Action {
  readonly type: string = REGISTER_SUCCESS;
  constructor(public payload: any) {}
}

export class RegistrFailed implements Action {
  readonly type: string = REGISTER_FAILED;
  constructor(public payload: any) {}
}

export class LogInAction implements Action {
  readonly type: string = LOGIN;
  constructor(public payload: any) {}
}

export class LogInSuccess implements Action {
  readonly type: string = LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LogInfailed implements Action {
  readonly type: string = LOGIN_FAILED;
  constructor(public payload: any) {}
}

export class GetUserSuccess implements Action {
  readonly type: string = GET_USER_SUCCESS;
  constructor(public payload: any) {}
}

export class GetUserFailed implements Action {
  readonly type: string = GET_USER_FAILED;
  constructor(public payload: any) {}
}

export class LogOutAction implements Action {
  readonly type: string = LOGOUT;
  constructor() {
    //
  }
}

export type AuthActions =
  | LogInAction
  | LogInSuccess
  | LogInfailed
  | GetUserSuccess
  | GetUserFailed
  | LogOutAction
  | RegistrAction
  | RegistrSuccess
  | RegistrFailed;
