import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';


const rootReducer = combineReducers({
  // Add your reducers here
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
