import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { signinUser, userSelector, clearState } from "../store/reducers/login";
import { API_URL } from "../helper/api";
import { useHistory } from "react-router-dom";


const Login = () => {

   const history = useHistory();
   const dispatch = useDispatch();

   const { isFetching, isLoggedIn, isError, errorMessage } =
     useSelector(userSelector);
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signinUser(user));
  };

  useEffect(() => {
     console.log("isLoggedIn",isLoggedIn)
     if (isLoggedIn) {
       dispatch(clearState());
       history.push("/");
     }

     if (isError) {
       // toast.error(errorMessage);
       dispatch(clearState());
     }
   }, [isLoggedIn, isError]);

  return (
    <div className="loginMain">
    <div className="container">
     <div className="row">
        <div>
        <img src={process.env.PUBLIC_URL + '/authImages/mukify.png'} /> 
        </div>
     </div>
     <div className="row">
        <div>
          <p className="loginTopTitle">Rekisteröidy aloittaaksesi kokoelman luominen</p>
        </div>
     </div>

     <div className="row">
      <div className="col-12">
      <div className="w-20">
      <img src={process.env.PUBLIC_URL + '/authImages/mukify.png'} /> 
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "24%",
          margin: "0 auto",
          right: "100%",
          left: "100%",
          top: "100%",
          display: "grid",
        }}
      >
        <label>Email</label>
        <input 
                type="email"
                 name="email" 
                 className="fadeIn second"
                 onChange={(e) => handleChange(e)} />
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="fadeIn third"
          onChange={(e) => handleChange(e)}
        />
        <button className="fadeIn fourth">Login</button>
      </form>
      <div>
      <img src={process.env.PUBLIC_URL + '/authImages/mukify.png'} /> 
      </div>
      </div>
      </div>
      </div>
    </div>
  );
};
export default Login;
