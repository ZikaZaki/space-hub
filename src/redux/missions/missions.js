import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Missions API
const missionsURL = 'https://api.spacexdata.com/v3/missions';

// Actions
const GET_MISSIONS = 'travelers-hub/missions/getMissions';

// Initial State
const initialState = [];

// Creating the thunk for all actions
export const fetchMissions = createAsyncThunk(
  GET_MISSIONS,
  async () => {
    try {
      const response = await axios.get(missionsURL);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

// Creating the slice
export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    toggleMission(state, action) {
      const mission = state.find((mission) => mission.id === action.payload);
      if (mission) {
        mission.joined = !mission.joined;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.fulfilled, (state, action) => {
        const missions = action.payload.map((mission) => ({
          id: mission.mission_id,
          name: mission.mission_name,
          description: mission.description,
          joined: false,
        }));
        return missions;
      });
  },
});

export const { toggleMission } = missionsSlice.actions;
// Exporting the reducer
export default missionsSlice.reducer;
