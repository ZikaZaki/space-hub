import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Missions API
const missionsURL = 'https://api.spacexdata.com/v3/missions';

// Actions
const GET_MISSIONS = 'travelers-hub/missions/getMissions';
const JOIN_MISSION = 'travelers-hub/missions/joinMission';

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

export const joinMission = createAsyncThunk(
  JOIN_MISSION,
  async (id) => {
    try {
      const response = await axios.patch(`${missionsURL}/${id}`, { reserved: true });
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

// Exporting the reducer
export default missionsSlice.reducer;
