import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rocketsReducer, { fetchRockets } from './rockets/rockets';
import dragonsReducer, { fetchDragons } from './dragons/dragons';
import missionsReducer, { fetchMissions } from './missions/missions';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  dragons: dragonsReducer,
  missions: missionsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export { fetchRockets, fetchDragons, fetchMissions };

export default store;
