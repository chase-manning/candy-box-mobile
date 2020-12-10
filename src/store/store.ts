import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import currencySlice from "./currencySlice";

export const store = configureStore({
  reducer: {
    currencies: currencySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
