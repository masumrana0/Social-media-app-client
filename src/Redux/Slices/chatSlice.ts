import { IUserCommonData } from "@/types/shared";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IInitialState {
  _id: string;
  creator: IUserCommonData | string;
  participant: IUserCommonData | string;
  last_updated?: Date;
}

const initialState: IInitialState = {
  _id: "",
  creator: "",
  participant: "",
};

export const chatSlice = createSlice({
  name: "chatSlice",
  initialState,
  reducers: {
    setConversation: (state, action: PayloadAction<IInitialState>) => {
      state._id = action.payload._id;
      state.creator = action.payload.creator;
      state.participant = action.payload.participant;
      state.last_updated = action.payload.last_updated;
    },
  },
});

export const { setConversation } = chatSlice.actions;

export default chatSlice.reducer;
