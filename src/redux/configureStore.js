import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rocketsReducer, { fetchRockets } from './rockets/rockets';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export { fetchRockets };

export default store;
