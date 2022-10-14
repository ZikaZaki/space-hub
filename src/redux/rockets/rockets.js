import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import falconImg from './rocket.jpg';

// Rockets API
const rocketsURL = 'https://api.spacexdata.com/v3/rockets';

// Actions
const GET_ROCKETS = 'travelers-hub/rockets/getRockets';

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

// Creating the slice
export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    toggleRocket(state, action) {
      const rocket = state.find((rocket) => rocket.id === action.payload);
      if (rocket) {
        rocket.reserved = !rocket.reserved;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.fulfilled, (state, action) => {
        const rockets = action.payload.map((rocket) => ({
          id: rocket.id,
          name: rocket.rocket_name,
          description: rocket.description,
          image: rocket.id === 1 ? falconImg : rocket.flickr_images[0],
          reserved: false,
        }));
        return rockets;
      });
  },
});

export const { toggleRocket } = rocketsSlice.actions;
// Exporting the reducer
export default rocketsSlice.reducer;
