import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  configurationStep: 1,
  carMake: null,
};

export const configurationSlice = createSlice({
  name: 'configurator',
  initialState,
  reducers: {
    incrementStep: (state) => {
      state.configurationStep += 1;
    },
    decrementStep: (state) => {
      state.configurationStep -= 1;
    },
    selectCarMake: (state, action) => {
      state.carMake = action.payload;
    },
    selectServices: (state, action) => {
      state.carMake = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementStep, decrementStep, selectCarMake, selectServices } =
  configurationSlice.actions;

export default configurationSlice.reducer;
