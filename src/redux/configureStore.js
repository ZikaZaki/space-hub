import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rocketsReducer, { fetchRockets } from './rockets/rockets';
import missionsReducer, { fetchMissions } from './missions/missions';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export { fetchRockets, fetchMissions };

export default store;
