import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface CurrencyState {
  candies: number;
}

const initialState: CurrencyState = {
  candies: 0,
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    incrementCandies: (state) => {
      state.candies += 1;
    },
    decrementCandies: (state) => {
      state.candies -= 1;
    },
    addCandies: (state, action: PayloadAction<number>) => {
      state.candies += action.payload;
    },
    removeCandies: (state, action: PayloadAction<number>) => {
      state.candies += action.payload;
    },
  },
});

export const {
  incrementCandies,
  decrementCandies,
  addCandies,
  removeCandies,
} = currencySlice.actions;

export const selectCandies = (state: RootState) => state.currencies.candies;

export default currencySlice.reducer;
