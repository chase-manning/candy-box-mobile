import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export enum Page {
  TheCandyBox,
  Map,
}

export enum VillagePage {
  HOME,
  FirstHouse,
  SecondHouse,
  ThirdHouse,
  Forge,
  FourthHouse,
  FifthHouse,
}

interface NavigationState {
  navBarEnabled: boolean;
  healthBarEnabled: boolean;
  mapEnabled: boolean;
  page: Page;
  villagePage: VillagePage;
}

const initialState: NavigationState = {
  navBarEnabled: false,
  healthBarEnabled: false,
  mapEnabled: false,
  page: Page.TheCandyBox,
  villagePage: VillagePage.HOME,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<Page>) => {
      state.page = action.payload;
    },
    setVillagePage: (state, action: PayloadAction<VillagePage>) => {
      state.villagePage = action.payload;
    },
    enableNavBar: (state) => {
      state.navBarEnabled = true;
    },
    enableHealthBar: (state) => {
      state.healthBarEnabled = true;
    },
    enableMap: (state) => {
      state.mapEnabled = true;
    },
  },
});

export const {
  setPage,
  setVillagePage,
  enableNavBar,
  enableHealthBar,
  enableMap,
} = navigationSlice.actions;

export const selectPage = (state: RootState) => state.navigation.page;
export const selectVillagePage = (state: RootState) =>
  state.navigation.villagePage;
export const selectNavBarEnabled = (state: RootState) =>
  state.navigation.navBarEnabled;
export const selectHealthBarEnabled = (state: RootState) =>
  state.navigation.healthBarEnabled;
export const selectMapEnabled = (state: RootState) =>
  state.navigation.mapEnabled;

export default navigationSlice.reducer;
