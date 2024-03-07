import authReducer from "./Slices/authSlice";
import NavbarSlice from "./Slices/navbarSlice";
import utilitySlice from "./Slices/unitlitySlice";
import reactionSlice from "./Slices/reactionSlice";
import { baseApi } from "./api/baseApi";
import chatSlice from "./Slices/chatSlice";
import SoketSlice from "./Slices/SoketSlice";

const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  authSlice: authReducer,
  chatSlice: chatSlice,
  socketSlice: SoketSlice,
  reaction: reactionSlice,
  navbarSlice: NavbarSlice,
  utilitySlice: utilitySlice,
};

export default rootReducer;
