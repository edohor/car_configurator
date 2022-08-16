import { configureStore } from '@reduxjs/toolkit';
import configurationReducer from './reducers/configurationSlice';

export const store = configureStore({
  reducer: { configuration: configurationReducer },
});
