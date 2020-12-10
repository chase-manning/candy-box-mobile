import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface CurrencyState {
  candies: number;
  groundCandies: number;
}

const initialState: CurrencyState = {
  candies: 0,
  groundCandies: 0,
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
      state.candies -= action.payload;
    },
    throwCandiesOnGround: (state) => {
      state.groundCandies += 10;
      state.candies -= 10;
    },
  },
});

export const {
  incrementCandies,
  decrementCandies,
  addCandies,
  removeCandies,
  throwCandiesOnGround,
} = currencySlice.actions;

export const selectCandies = (state: RootState) => state.currencies.candies;
export const selectGroundCandies = (state: RootState) =>
  state.currencies.groundCandies;

export default currencySlice.reducer;
