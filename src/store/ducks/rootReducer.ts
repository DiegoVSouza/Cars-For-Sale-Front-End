import { combineReducers } from 'redux';

import cars from './cars';
import tokens from './tokens';
import ids from './ids';

export default combineReducers({
  tokens,
  cars,
  ids,
});
