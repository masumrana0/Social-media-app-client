import authReducer from "./Slices/authSlice";
import NavbarSlice from "./Slices/navbarSlice";
import utilitySlice from "./Slices/unitlitySlice";
import reactionSlice from "./Slices/reactionSlice";
import { baseApi } from "./api/baseApi";
import chatSlice from "./Slices/chatSlice";

const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  authSlice: authReducer,
  chatSlice: chatSlice,
  reaction: reactionSlice,
  navbarSlice: NavbarSlice,
  utilitySlice: utilitySlice,
};

export default rootReducer;
