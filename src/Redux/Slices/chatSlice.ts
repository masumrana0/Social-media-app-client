import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IinitialState {
  conversationId: string;
}

const initialState: IinitialState = {
  conversationId: "",
};

export const chatSlice = createSlice({
  name: "chatSlice",
  initialState,
  reducers: {
    setConversationId: (state, action: PayloadAction<string>) => {
      state.conversationId = action.payload;
    },
  },
});

export const { setConversationId } = chatSlice.actions;

export default chatSlice.reducer;
