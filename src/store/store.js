import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./reducers/auth";
import { userSigninSlice } from "./reducers/login";

export default configureStore({
  reducer: {
        user: userSlice.reducer,
      login: userSigninSlice.reducer,
  },
});
