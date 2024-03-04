import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IinitialState {
  drawerOpen: boolean;
}

const initialState: IinitialState = {
  drawerOpen: false,
};

export const navbarSlice = createSlice({
  name: "navbarSlice",
  initialState,
  reducers: {
    setOpenDrawer: (state, action: PayloadAction<boolean>) => {
      state.drawerOpen = action.payload;
    },
  },
});

export const { setOpenDrawer } = navbarSlice.actions;
export default navbarSlice.reducer;
