import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from ".";

// Define a type for the slice state
interface savedState {
  saves: Array<{ img_id: number; img_src: string }>;
}

// Define the initial state using that type
const initialState: savedState = {
  saves: [],
};

export const savedSlice = createSlice({
  name: "saves",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addSave: (state, { payload }) => {
      const temp = [...state.saves];
      temp.push(payload);
      state.saves = temp;
    },

    removeSaved: (state, { payload }) => {
      const temp = [...state.saves];
      const deleteIndex = state.saves.findIndex(
        (img) => img.img_id === payload.img_id
      );
      temp.splice(deleteIndex, 1);
      state.saves = temp;
    },
    clearSaved: (state) => {
      state.saves = [];
    },
  },
});

export const { addSave, removeSaved, clearSaved } = savedSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getSavedImages = (state: RootState) => state.saves

export default savedSlice.reducer;
