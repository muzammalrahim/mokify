import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./reducers/auth";
import { homeSlice } from "./reducers/home/homeReducer";
import { userSigninSlice, socialSigninUser } from "./reducers/login";
import { socialSigninSlice } from "./reducers/social";

export default configureStore({
  reducer: {
    user: userSlice.reducer,
    login: userSigninSlice.reducer,
    social: socialSigninSlice.reducer,
    home: homeSlice.reducer,
  },
});
