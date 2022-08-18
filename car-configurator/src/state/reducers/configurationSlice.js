import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  configurationStep: 1,
  carMake: null,
  services: [],
  total: 0,
  discounted: false,
  discount: 0,
  discountedTotal: 0,
  userInfo: {
    name: '',
    phoneNumber: '',
    email: '',
    note: '',
  },
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
    jumpToStep: (state, action) => {
      state.configurationStep = action.payload;
    },
    selectCarMake: (state, action) => {
      state.carMake = action.payload;
    },
    selectServices: (state, action) => {
      state.services = action.payload;
    },
    saveTotal: (state, action) => {
      state.total = action.payload;
    },
    saveDiscounted: (state, action) => {
      state.discounted = action.payload;
    },
    saveDiscount: (state, action) => {
      state.discount = action.payload;
    },
    saveDiscountedTotal: (state, action) => {
      state.discountedTotal = action.payload;
    },
    saveUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    sendForm: (state, action) => {},
    resetState: () => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  incrementStep,
  decrementStep,
  jumpToStep,
  selectCarMake,
  selectServices,
  saveTotal,
  saveDiscounted,
  saveDiscount,
  saveDiscountedTotal,
  saveUserInfo,
  sendForm,
  resetState,
} = configurationSlice.actions;

export default configurationSlice.reducer;
