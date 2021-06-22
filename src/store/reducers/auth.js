import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../helper/api";
import axios from "axios";

export const signupUser = createAsyncThunk(
  "users/signupUser",
  async ({ name, email, password }, thunkAPI) => {
   
    await axios.post(API_URL, `query=mutation%20%7B%0A%20%20register(username:"${name}",email:"${email}",password1:"${password}",password2:"${password}")%20%7B%0A%20%20%20%20success%0A%20%20%20%20errors%0A%20%20%20%20refreshToken%0A%20%20%20%20token%0A%20%20%7D%0A%7D%0A`).then(response => {
        
      //console.log('response: ', response);
      // console.log("response", response.data.data.register.errors.email[0].message);
  
      // if (response.data.data.register.success === true) {
      
      if (response.data.data.register.token !== null) {
        return  axios.post(API_URL, `query=mutation%0A%7B%0A%20verifyAccount(token:"${response?.data?.data?.register?.refreshToken}")%20%7B%0A%20success%0A%20errors%0A%20%7D%0A%0A%7D`).then(res=>{console.log(res)})
      }
        localStorage.setItem("token", response.data.data.register.token);
        localStorage.setItem("refreshToken", response.data.data.register.refreshToken);
        console.log(response.data.data.register.token)
        return { ...response, username: name, email: email };
          
      // } else {
      //   return thunkAPI.rejectWithValue(response);
      // }
    }).catch(e => {
      console.log("Error2", e);
      return thunkAPI.rejectWithValue(e.response);
    })
  }
);

export const userSlice = createSlice({
  name: "register",
  initialState: {
    name: "",
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
    [signupUser.fulfilled]: (state, { payload }) => {
      console.log("payload", payload);
      state.isFetching = false;
      state.isLoggedIn = true;
    },
    [signupUser.pending]: (state) => {
      state.isFetching = true;
    },
    [signupUser.rejected]: (state, { payload }) => {
      console.log("payload: ", payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { clearState } = userSlice.actions;

export const userSelector = (state) => state.user;