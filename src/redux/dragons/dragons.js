import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Dragons API
const dragonsURL = 'https://api.spacexdata.com/v3/dragons';

// Actions
const GET_DRAGONS = 'travelers-hub/dragons/getDragons';
const RESERVE_DRAGON = 'travelers-hub/dragons/reserveDragon';

// Initial State
const initialState = [];

// Creating the thunk for all actions
export const fetchDragons = createAsyncThunk(
  GET_DRAGONS,
  async () => {
    try {
      const response = await axios.get(dragonsURL);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

export const reserveDragon = createAsyncThunk(
  RESERVE_DRAGON,
  async (id) => {
    try {
      const response = await axios.patch(`${dragonsURL}/${id}`, { reserved: true });
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

// Creating the slice
export const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragons.fulfilled, (state, action) => {
        const dragons = action.payload.map((dragon) => ({
          id: dragon.id,
          name: dragon.name,
          description: dragon.description,
          image: dragon.id === 'dragon1' ? dragon.flickr_images[1] : dragon.flickr_images[0],
          reserved: false,
        }));
        return dragons;
      });
  },
});

// Exporting the reducer
export default dragonsSlice.reducer;
