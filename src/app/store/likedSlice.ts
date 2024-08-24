import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from ".";

// Define a type for the slice state
interface likedState {
  likes: Array<{ img_id: number; img_src: string }>;
}

// Define the initial state using that type
const initialState: likedState = {
  likes: [],
};

export const likesSlice = createSlice({
  name: "likes",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addLike: (state, { payload }) => {
      const temp = [...state.likes];
      temp.push(payload);
      state.likes = temp;
    },
    removeLike: (state, { payload }) => {
      const temp = [...state.likes];
      const deleteIndex = state.likes.findIndex(
        (img) => img.img_id === payload.img_id
      );
      temp.splice(deleteIndex, 1);
      state.likes = temp;
    },
  },
});

export const { addLike, removeLike } = likesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getLikedImages = (state: RootState) => state.likes;

export default likesSlice.reducer;
