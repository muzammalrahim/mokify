import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../helper/api";
import axios from "axios";
import { socialSigninSlice } from "./social";

export const signinUser = createAsyncThunk(
  "users/signinUser",
  async ({ email, password }, thunkAPI) => {
    await axios
      .post(
        API_URL,
        `query=mutation%20%7B%0A%20%20tokenAuth(username:"${email}",password:"${password}")%20%7B%0A%20%20%20%20refreshToken%0A%20%20%20%20token%0A%20%20%7D%0A%7D%0A`
      )
      .then((response) => {
        console.log("response: ", response);

        localStorage.setItem("token", response.data.data.tokenAuth.token);
        localStorage.setItem(
          "refreshToken",
          response.data.data.tokenAuth.refreshToken
        );
        return { ...response, username: email };
      })
      .catch((e) => {
        console.log("Error2", e);
        return thunkAPI.rejectWithValue(e.response);
      });
  }
);

export const socialSigninUser = createAsyncThunk(
  "users/socialSigninUser",
  async (token, provider, thunkAPI) => {
    await axios
      .post(
        API_URL,
        `query=mutation
            {
            socialAuthJwt(
            accessToken:"${token}"
            provider: "${provider}"
            )
            {
            social
            {
            id
            provider
            uid
            extraData
            created
            modified
            }
            token
            }
            }`
      )
      .then((response) => {
        console.log("response: ", response);

        localStorage.setItem("token", response.data.data.socialAuthJwt.token);
        // localStorage.setItem(
        //   "refreshToken",
        //   response.data.data.tokenAuth.refreshToken
        // );
        return { ...response };
      })
      .catch((e) => {
        console.log("Error2", e);
        return thunkAPI.rejectWithValue(e.response);
      });
  }
);

export const userSigninSlice = createSlice({
  name: "login",
  initialState: {
    email: "",
    password: "",
    isLoggedIn: false,
    isError: false,
    isFetching: false,
    errorMessage: "",
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isLoggedIn = false;
      state.isFetching = false;
      state.errorMessage = "";

      return state;
    },
  },
  extraReducers: {
    [signinUser.fulfilled || socialSigninUser.fulfilled]: (
      state,
      { payload }
    ) => {
      console.log("payload", payload);
      state.isFetching = false;
      state.isLoggedIn = true;
    },
    [signinUser.pending || socialSigninUser.pending]: (state) => {
      state.isFetching = true;
    },
    [signinUser.rejected || socialSigninUser.rejected]: (
      state,
      { payload }
    ) => {
      console.log("payload: ", payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { clearState } = userSigninSlice.actions;

export const userSelector = (state) => state.login ;
// export const userSelector = (state) => state.social;
