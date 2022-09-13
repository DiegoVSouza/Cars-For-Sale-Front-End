/**
 * Action types
 */
export enum TokensTypes {
  LOAD_SESSION = '@user/LOAD_SESSION',
  LOAD_LOGOUT = '@user/LOAD_LOGOUT',
  LOAD_SESSIONSUCCCES = '@user/LOAD_SESSIONSUCCCES',
  LOAD_SESSIONFAILURE = '@user/LOAD_SESSIONFAILURE',
}

/**
 * Data types
 */
export interface User {
  id: string,
  created_at: Date,
  isAdmin: false,
  name: string,
  email: string,
  password: string,
  driver_license: string,
  avatar: File
}

export interface TokenData {
  user: User,
  token: string,
  refresh_token: string,
  logged: boolean,
}

/**
 * State type
 */
export interface TokenState {
  readonly data: TokenData
  readonly loading: boolean
  readonly error: boolean
}

export interface TokenStateFromback {
  readonly data: TokenData
}
