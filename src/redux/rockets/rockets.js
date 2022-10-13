import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Rockets API
const rocketsURL = 'https://api.spacexdata.com/v3/rockets';

// Actions
const GET_ROCKETS = 'travelers-hub/rockets/getRockets';
const RESERVE_ROCKET = 'travelers-hub/rockets/reserveRocket';

// Initial State
const initialState = [];

// Creating the thunk for all actions
export const fetchRockets = createAsyncThunk(
  GET_ROCKETS,
  async () => {
    try {
      const response = await axios.get(rocketsURL);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

export const reserveRocket = createAsyncThunk(
  RESERVE_ROCKET,
  async (id) => {
    try {
      console.log('Reserved button is clicked', id);
      const response = await axios.patch(`${rocketsURL}/${id}`, { reserved: true });
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

// Creating the slice
export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.fulfilled, (state, action) => {
        const rockets = action.payload.map((rocket) => ({
          id: rocket.id,
          name: rocket.rocket_name,
          description: rocket.description,
          image: rocket.flickr_images[0],
          reserved: false,
        }));
        return rockets;
      });
  },
});

// Exporting the reducer
export default rocketsSlice.reducer;
