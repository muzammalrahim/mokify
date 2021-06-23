import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { signinUser, userSelector, clearState } from "../store/reducers/login";
import { socialSigninUser, socialSelector, clearStates } from "../store/reducers/social";
import { API_URL } from "../helper/api";
import { useHistory } from "react-router-dom";
import FacebookLogin from "react-facebook-login"
import GoogleLogin from "react-google-login";
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
        history.push('/')
      })
      .catch((err) => console.log(err));
  },[provider])
  return (
    <div>
      <div className="container">
        <h1>
          Rekisteröidy aloittaaksesi
          <br /> kokoelman luominen
        </h1>
        <div className="mainwrap">
          <form onSubmit={handleSubmit} className="box">
            <label htmlFor="email">
              <b>Salasana</b>
            </label>
            <input
              type="email"
              name="email"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="psw">
              <b>Salasana uudestaan</b>
            </label>
            <input
              type="password"
              name="password"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="checkbox"
              placeholder=""
              name="psw"
              id="psw"
              required
              style={{ marginLeft: "20px" }}
            />
            <label htmlFor="psw">
              <b>Hyväksyn käyttöehdot</b>
            </label>
            <br />
            <input
              type="checkbox"
              placeholder=""
              name="psw"
              id="psw"
              required
              style={{ marginLeft: "20px" }}
            />
            <label htmlFor="psw">
              <b>Tilaa uutiskirje</b>
            </label>
            <br />
            <GoogleLogin
              className="registerbtn"
              clientId="1081859704336-aalfm16drgu918csp0vlq575ipebnrao.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
            <br />
            <FacebookLogin
              className="registerbtn"
              appId="372164971017671"
              autoLoad={true}
              fields="name,email,picture"
              // onClick={componentClicked}
              callback={responseFacebook}
            />
            <button className="registerbtn">Luo tili</button>
            <h6>Olen jo rekisteröitynyt. Kirjaudu sisään</h6>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
