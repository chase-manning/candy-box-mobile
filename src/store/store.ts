import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import characterSlice from "./characterSlice";
import currencySlice from "./currencySlice";
import navigationSlice from "./navigationSlice";

export const store = configureStore({
  reducer: {
    currencies: currencySlice,
    navigation: navigationSlice,
    character: characterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
