import { Reducer } from 'redux';
import { TokenData, TokenState, TokensTypes, User } from './types';

const INITIAL_STATE: TokenState = {
  data: {} as TokenData,
  error: false,
  loading: true,
};

const error = {
  user: {} as User,
  token: "",
  refresh_token: "",
  logged: false
}
const reducer: Reducer<TokenState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TokensTypes.LOAD_SESSION:
      return { ...state, loading: true };
    case TokensTypes.LOAD_LOGOUT:
      return {
        ...state, loading: false, error: false, data: error,
      };;
    case TokensTypes.LOAD_SESSIONSUCCCES:
      return {
        ...state, loading: false, error: false, data: action.payload.data,
      };
    case TokensTypes.LOAD_SESSIONFAILURE:
      return {
        ...state, loading: false, error: true, data: error,
      };
    default:
      return state;
  }
};

export default reducer;
