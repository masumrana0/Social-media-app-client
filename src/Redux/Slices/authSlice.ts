import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IinitialState {
  authState: boolean;
}

const initialState: IinitialState = {
  authState: true,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    changeAuthState: (state) => {
      state.authState = !state.authState;
    },
  },
});

export const { changeAuthState } = authSlice.actions;

export default authSlice.reducer;
