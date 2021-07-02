import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../assets/logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { signinUser, userSelector, clearState } from "../store/reducers/login";
import {
  socialSigninUser,
  socialSelector,
  clearStates,
} from "../store/reducers/social";
import { API_URL } from "../helper/api";
import { useHistory } from "react-router-dom";
import Footer from "../component/Footer";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";
import msg from "../helper/notification";
// import Image from '../../public/image23.png'

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { isFetching, isLoggedIn, isError, errorMessage } = useSelector(
    userSelector,
    socialSelector
  );
  //  const { isFetching, isLoggedIn, isError, errorMessage } =
  //    useSelector(socialSelector);
  const [user, setUser] = useState({});
  const [passText, setPassText] = useState("");

  const handleChange = (e) => {
    if (e.target.value.length < 8) {
      setPassText("Password must be greater than 7 characters");
    } else {
      setPassText("");
    }
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signinUser(user));
  };

  useEffect(() => {
    console.log("isLoggedIn", isLoggedIn);
    if (isLoggedIn) {
      dispatch(clearState());
      history.push("/");
    }

    if (isError) {
      // toast.error(errorMessage);
      dispatch(clearState());
      console.log(isError);
    }
  }, [isLoggedIn, isError]);

  const [accessToken, setAccessToken] = useState("");
  const [provider, setProvider] = useState();
  const responseFacebook = (response) => {
    //  dispatch(socialSigninUser(response.accessToken, facebook));
    setAccessToken(response.accessToken);
    setProvider("facebook");
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
        localStorage.setItem("token", res.data.data.socialAuthJwt.token);
        msg.success("you are logged in");
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        // history.push("/login");
      });
  }, [provider]);
  return (
    <>
      <div>
        {isError && <h5>{errorMessage}</h5>}
        <div className="registerPageMain">
          <div class="">
            <div className="topImg">
              <Link to="/">
                {" "}
                <img src={logo} alt="mukify"></img>
              </Link>
            </div>
            <h6 class="top-font">
              Rekisteröidy aloittaaksesi
              <br /> kokoelman luominen
            </h6>
          </div>

          <form
            onSubmit={handleSubmit}
            // style={{ width: "24%", margin: "0 auto", right: "100%", left: "100%", top: "100%", display: "grid"}}
          >
            <div class="flexbox-container">
              <div class="box">
                <label for="psw">
                  <b>Sähköposti</b>
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  onChange={(e) => handleChange(e)}
                />{" "}
                <br />
                <label for="psw">
                  <b>Salasana</b>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  onChange={(e) => handleChange(e)}
                />{" "}
                <p style={{ color: "red", marginLeft: "20px" }}>{passText}</p>
                <br />
                <button type="submit" class="registerbtn">
                  Luo tili
                </button>
                <Link
                  to="/forgetpsw"
                  className="boxText1"
                  style={{ color: "black" }}
                >
                  {" "}
                  Unohdin salasanani
                </Link>
                <h5 className="boxText">Tai valitse joku seuraavista</h5>
                <div style={{ position: "relative" }}>
                  <button type="submit" class="registerbtnFb">
                    <FacebookLogin
                      appId="543336356644737"
                      autoLoad={false}
                      fields="name,email,picture"
                      textButton="Facebook connect"
                      // onClick={componentClicked}
                      callback={responseFacebook}
                    />
                  </button>
                  <img
                    className="facebookIcon"
                    src={process.env.PUBLIC_URL + "/svg/facebook.svg"}
                  />
                </div>
                <div style={{ position: "relative" }}>
                  <button type="submit" class="registerbtnGoogle">
                    <GoogleLogin
                      clientId="1056331593053-9gt32r970ecp40u610fkhveeaklulbp0.apps.googleusercontent.com"
                      buttonText="Google Sign in"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
                  </button>
                  <img
                    className="facebookIcon"
                    src={process.env.PUBLIC_URL + "/svg/google.svg"}
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="mainimg1">
            <img src={process.env.PUBLIC_URL + "/authImages/imagelogin1.png"} />
          </div>
          <div className="mainimg2">
            <img src={process.env.PUBLIC_URL + "/authImages/imagelogin2.png"} />
          </div>
          <div className="mainimg3">
            <img src={process.env.PUBLIC_URL + "/authImages/imagelogin3.png"} />
          </div>
          <div></div>
        </div>
      </div>
      <div className="loginfooter">
        <Footer />
      </div>
    </>
  );
};
export default Login;
