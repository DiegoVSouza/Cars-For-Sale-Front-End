import { all, call, put, takeLatest } from 'redux-saga/effects';

import { loadSessionSucess, loadSessionFailure, loadSession } from './actions';
import { TokenData, TokenState, TokenStateFromback, TokensTypes, User } from './types';
import { api } from '../../../services/api';

interface loadProps {
  payload: {
    variable: string
  }
}

export function* load({ payload }: ReturnType<typeof loadSession>) {
  try {
    const { data } = payload
    console.log(data)
    let response: TokenStateFromback = yield call(api.post, `/sessions`, data)
    console.log(response)
    var user: TokenData = {
      ...response.data,
      logged: true
    }
    localStorage.setItem(
      "@token",
      response.data.refresh_token
    );
    yield put(loadSessionSucess(user));
  } catch (err) {
    console.log(err)
    localStorage.removeItem(
      "@token",
    );
    yield put(loadSessionFailure());
  }
}

export default all([takeLatest(TokensTypes.LOAD_SESSION, load)]);