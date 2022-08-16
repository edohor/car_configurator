import { combineReducers } from 'redux';
import configurationSlice from './configurationSlice';

const reducers = combineReducers({
  configuration: configurationSlice,
});

export default reducers;
