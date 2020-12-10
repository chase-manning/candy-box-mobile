import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface CharacterState {
  maxHealth: number;
  currentHealth: number;
}

const initialState: CharacterState = {
  maxHealth: 100,
  currentHealth: 100,
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    damage: (state, action: PayloadAction<number>) => {
      state.currentHealth -= action.payload;
    },
    heal: (state, action: PayloadAction<number>) => {
      state.currentHealth += action.payload;
    },
    setHealth: (state, action: PayloadAction<number>) => {
      state.currentHealth += action.payload;
    },
    increaseMaxHealth: (state, action: PayloadAction<number>) => {
      state.maxHealth += action.payload;
    },
  },
});

export const {
  damage,
  heal,
  setHealth,
  increaseMaxHealth,
} = characterSlice.actions;

export const selectMaxHealth = (state: RootState) => state.character.maxHealth;
export const selectCurrentHealth = (state: RootState) =>
  state.character.currentHealth;

export default characterSlice.reducer;
