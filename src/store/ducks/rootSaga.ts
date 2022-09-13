import { all } from 'redux-saga/effects';

import car from './cars/sagas';
import tokens from './tokens/sagas';

export default function* rootSaga() {
   yield all([tokens]);
   yield all([car]);
}
