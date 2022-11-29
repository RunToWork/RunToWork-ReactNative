import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers';
import env from '../../environments';

const store = configureStore({
  reducer: rootReducer,
  devTools: env.NODE_ENV !== 'production',
});

export default store;
