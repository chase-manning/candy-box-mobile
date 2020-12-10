import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export enum Page {
  TheCandyBox,
}

interface NavigationState {
  page: Page;
  navBarEnabled: boolean;
}

const initialState: NavigationState = {
  page: Page.TheCandyBox,
  navBarEnabled: false,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<Page>) => {
      state.page = action.payload;
    },
    enableNavBar: (state) => {
      state.navBarEnabled = true;
    },
  },
});

export const { setPage, enableNavBar } = navigationSlice.actions;

export const selectPage = (state: RootState) => state.navigation.page;
export const selectNavBarEnabled = (state: RootState) =>
  state.navigation.navBarEnabled;

export default navigationSlice.reducer;
