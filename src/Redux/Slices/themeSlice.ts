import { createSlice } from "@reduxjs/toolkit";

export interface IInitialState {
  theme: "system" | "light" | "dark";
}

const storedTheme = localStorage.getItem("theme");

const initialState: IInitialState = {
  theme: (storedTheme && (storedTheme as IInitialState["theme"])) || "system",
};

export const chatSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {},
});

export default chatSlice.reducer;
