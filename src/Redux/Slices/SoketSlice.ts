import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import io from "socket.io-client";
import { getUserInfo } from "@/service/auth.service";

// Async thunk to initialize socket connection
export const initializeSocket = createAsyncThunk(
  "chat/initializeSocket",
  async () => {
    const userInfo = getUserInfo();
    const socket = io("http://localhost:5000", {
      query: {
        userId: userInfo?.userId,
      },
    });

    return socket;
  }
);

export interface IInitialState {
  socket: any;
  onlineUsers: string[];
}

const initialState: IInitialState = {
  socket: null,
  onlineUsers: [],
};

export const socketSlice = createSlice({
  name: "chatSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initializeSocket.fulfilled, (state, action) => {
      state.socket = action.payload;
    });
  },
});

export const {} = socketSlice.actions;

export default socketSlice.reducer;
