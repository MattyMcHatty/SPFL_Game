import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  // You can optionally add middleware, but redux-thunk is already included by default.
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;