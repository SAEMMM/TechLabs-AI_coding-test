import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    shop: null,
    isLoading: false,
  },
  reducers: {
    getShopFetch: (state) => {
      state.isLoading = true;
    },
    getShopSuccess: (state, action) => {
      state.shop = action.payload;
      state.isLoading = false;
    },
    getShopFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getShopSuccess, getShopFailure } =
  shopSlice.actions;

export const getShopFetch = (data: {
  startDate: string;
  endDate: string;
  category: string;
  keyword: string;
  ages: string[];
  timeUnit: string;
  gender: string;
  device: string;
}) => {
  return {
    type: "shop/getShopFetch",
    payload: data,
  };
};

export default shopSlice.reducer;
