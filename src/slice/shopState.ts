import { createSlice } from "@reduxjs/toolkit";

interface ShopState {
  shop: any[];
  isLoading: boolean;
}

const initialState: ShopState = {
  shop: [],
  isLoading: false,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    getShopFetch: (state, { payload: shop }) => {
      state.isLoading = true;
    },
    getShopSuccess: (state, { payload: shop }) => {
      state.shop = shop;
      state.isLoading = false;
    },
    getShopFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getShopFetch, getShopSuccess, getShopFailure } =
  shopSlice.actions;

export default shopSlice.reducer;
