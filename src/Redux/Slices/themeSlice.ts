import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IInitialState {
  theme: "system" | "light" | "dark";
}
const storedTheme = localStorage.getItem("theme");

const initialState: IInitialState = {
  theme: (storedTheme && (storedTheme as IInitialState["theme"])) || "system",
};

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<"system" | "light" | "dark">) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
