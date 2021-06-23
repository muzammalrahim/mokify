import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../helper/api";
import axios from "axios";

export const socialSigninUser = createAsyncThunk(
  "users/socialSigninUser",
    async (token, t, thunkAPI) => {
      console.log("social login method",t);
    await axios
      .post(
        API_URL,
        `query=mutation
            {
            socialAuthJwt(
            accessToken:"${token}"
            provider: "${t}"
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

        localStorage.setItem("token", response.data.data.tokenAuth.token);
        return { ...response };
      })
      .catch((e) => {
        console.log("Error2", e);
        return thunkAPI.rejectWithValue(e.response);
      });
  }
);
export const socialSigninSlice = createSlice({
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
    clearStates: (state) => {
      state.isError = false;
      state.isLoggedIn = false;
      state.isFetching = false;
      state.errorMessage = "";

      return state;
    },
  },
  extraReducers: {
    [socialSigninUser.fulfilled]: (state, { payload }) => {
      console.log("payload", payload);
      state.isFetching = false;
      state.isLoggedIn = true;
    },
    [socialSigninUser.pending]: (state) => {
      state.isFetching = true;
    },
    [socialSigninUser.rejected]: (state, { payload }) => {
      console.log("payload: ", payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { clearStates } = socialSigninSlice.actions;


export const socialSelector = (state) => state.social;