import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export enum Page {
  TheCandyBox,
}

interface NavigationState {
  page: Page;
  navBarEnabled: boolean;
  healthBarEnabled: boolean;
}

const initialState: NavigationState = {
  page: Page.TheCandyBox,
  navBarEnabled: false,
  healthBarEnabled: false,
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
    enableHealthBar: (state) => {
      state.healthBarEnabled = true;
    },
  },
});

export const {
  setPage,
  enableNavBar,
  enableHealthBar,
} = navigationSlice.actions;

export const selectPage = (state: RootState) => state.navigation.page;
export const selectNavBarEnabled = (state: RootState) =>
  state.navigation.navBarEnabled;
export const selectHealthBarEnabled = (state: RootState) =>
  state.navigation.healthBarEnabled;

export default navigationSlice.reducer;
