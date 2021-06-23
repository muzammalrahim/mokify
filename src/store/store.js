import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./reducers/auth";
import { userSigninSlice, socialSigninUser } from "./reducers/login";
import { socialSigninSlice } from "./reducers/social";

export default configureStore({
  reducer: {
    user: userSlice.reducer,
    login: userSigninSlice.reducer,
    social: socialSigninSlice.reducer,
  },
});
