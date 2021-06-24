import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { signinUser, userSelector, clearState } from "../store/reducers/login";
import { API_URL } from "../helper/api";
import { useHistory } from "react-router-dom";
import Footer from '../component/Footer'

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

    <>
    <div>
      {isError &&
        <h5>{ errorMessage }</h5>
      }
      <div className="registerPageMain">
      <div class="">
      <div className="topImg">
      <img src={process.env.PUBLIC_URL + '/authImages/mukify.png'} /> 
      </div>
      <h6 class="top-font">Rekisteröidy aloittaaksesi<br/> kokoelman luominen
      </h6>

      </div>
      
      <form onSubmit={handleSubmit} 
      // style={{ width: "24%", margin: "0 auto", right: "100%", left: "100%", top: "100%", display: "grid"}}
      >
      <div class="flexbox-container">
      <div class="box">
        <label for="psw"><b>Sähköposti</b></label>
        <input type="password" name="password"  onChange={(e) => handleChange(e)} /> <br />
        
          <button type="submit" class="registerbtn">Luo tili</button>
          <h5 className="boxText">Tai valitse joku seuraavista</h5>
          <button type="submit" class="registerbtnFb">Facebook connect</button>
          <button type="submit" class="registerbtnGoogle">Google Sign in</button>
          </div>
          
          </div>
      </form>
      <div className="mainimg1">
      <img src={process.env.PUBLIC_URL + '/authImages/imagelogin1.png'} /> 
      </div>
      <div className="mainimg2">
      <img src={process.env.PUBLIC_URL + '/authImages/imagelogin2.png'} /> 
      </div>
      <div className="mainimg3">
      <img src={process.env.PUBLIC_URL + '/authImages/imagelogin3.png'} /> 
      </div>
      <div>
          <p className="bottomText">Olen jo rekisteröitynyt. Kirjaudu sisään</p>
          </div>
    </div>
    </div>
    <div className="loginfooter">
    <Footer/>
    </div>
  



    {/*
    <div className="loginMain">
    <div className="container">
     <div className="mainContent">
     <div className="row">
        <div className="topImg">
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
    </div>
    */}
    </>
  );
};
export default Login;
