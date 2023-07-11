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
      console.log("POST성공", shop);
    },
    getShopSuccess: (state, { payload: shop }) => {
      state.shop = shop;
      state.isLoading = false;
      console.log("성공", shop);
    },
    getShopFailure: (state) => {
      state.isLoading = false;
      console.log("실패");
    },
  },
});

export const { getShopFetch, getShopSuccess, getShopFailure } =
  shopSlice.actions;

export default shopSlice.reducer;
