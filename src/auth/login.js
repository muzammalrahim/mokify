import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { signinUser, userSelector, clearState } from "../store/reducers/login";
import { socialSigninUser, socialSelector, clearStates } from "../store/reducers/social";
import { API_URL } from "../helper/api";
import { useHistory } from "react-router-dom";
import Footer from '../component/Footer'
import FacebookLogin from "react-facebook-login"
import GoogleLogin from "react-google-login";
import { Link } from 'react-router-dom'
import msg from '../helper/notification'
// import Image from '../../public/image23.png'

const Login = () => {

   const history = useHistory();
   const dispatch = useDispatch();

   const { isFetching, isLoggedIn, isError, errorMessage } =
     useSelector(userSelector, socialSelector);
  //  const { isFetching, isLoggedIn, isError, errorMessage } =
  //    useSelector(socialSelector);
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

  const [accessToken, setAccessToken] = useState("");
  const [provider, setProvider] = useState("");
  const responseFacebook = (response) => {
    //  dispatch(socialSigninUser(response.accessToken, facebook));
    setAccessToken(response.accessToken);
    setProvider('facebook')
  };
  const responseGoogle = (response) => {
    // dispatch(socialSigninUser(response.accessToken, {google}));
    setAccessToken(response?.accessToken);
    setProvider("google-oauth2");
  };

  useEffect(() => {
    axios
      .post(
        API_URL,
        `query=mutation
            {
            socialAuthJwt(
            accessToken:"${accessToken}"
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
      .then((res) => {
        localStorage.setItem("token", res.data.data.socialAuthJwt.token)
        msg.success('you are logged in')
        history.push('/')
      })
      .catch((err) => console.log(err));
  },[provider])
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
        <input type="email" name="email"  onChange={(e) => handleChange(e)} /> <br />
        <label for="psw"><b>Salasana</b></label>
        <input type="password" name="password"  onChange={(e) => handleChange(e)} /> <br />

          <button type="submit" class="registerbtn">Luo tili</button>

          <Link to='/forgetpsw' className="boxText1" style={{color:"black"}}> Unohdin salasanani</Link>
          <h5 className="boxText">Tai valitse joku seuraavista</h5>
          <button type="submit" class="registerbtnFb"><FacebookLogin

              appId="372164971017671"
              autoLoad={true}
              fields="name,email,picture"
              // onClick={componentClicked}
              callback={responseFacebook}
            /></button>
          <button type="submit" class="registerbtnGoogle">
          <GoogleLogin

              clientId="1081859704336-aalfm16drgu918csp0vlq575ipebnrao.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            /></button>
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
    </>
  );
};
export default Login;
