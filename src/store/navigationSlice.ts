import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export enum Page {
  TheCandyBox,
}

interface NavigationState {
  page: Page;
}

const initialState: NavigationState = {
  page: Page.TheCandyBox,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<Page>) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = navigationSlice.actions;

export const selectPage = (state: RootState) => state.navigation.page;

export default navigationSlice.reducer;
