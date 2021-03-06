import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { signupUser, userSelector, clearState } from "../store/reducers/auth";
import { API_URL } from "../helper/api";
import { useHistory, Link } from "react-router-dom";
import Footer from "../component/Footer";
import FacebookLogin from "react-facebook-login";

import logo from "../assets/logo.svg";
import GoogleLogin from "react-google-login";

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { isFetching, isLoggedIn, isError, errorMessage } =
    useSelector(userSelector);

  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [passMatch, setPassMatch] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "name" && e.target.value.length < 3) {
      setName("Name must be atleast 3 characters");
    } else {
      setName("");
    }

    setUser((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
    // setPass(e.target.value);
    // setConfirmPass(e.target.value);
    // if (pass !== confirmPass) {
    //   setPassMatch("Password don't match");
    // } else {
    //   setPassMatch("");
    // }
    // console.log(pass);
    // console.log(confirmPass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios.post(API_URL, postBody).then(response =>
    //     console.log(response.data.data.register.errors)).catch(
    //         error => {
    //             console.log(error)
    //     }
    // )
    dispatch(signupUser(user));
    // console.log(user);
  };

  useEffect(() => {
    if (user.password !== user.password_repeat) {
      setPassMatch("Password don't match");
    } else {
      setPassMatch("");
    }
  }, [user.password, user.password_repeat]);

  useEffect(() => {
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
        history.push("/");
      })
      .catch((err) => console.log(err));
  }, [provider]);

  return (
    <>
      <div>
        {isError && <h5>{errorMessage}</h5>}
        <div className="registerPageMain">
          <div class="">
            <div className="topImg">
              <Link to="/">
                <img src={logo} alt="mukify"></img>
              </Link>
            </div>
            <h6 class="top-font">
              Rekister??idy aloittaaksesi
              <br /> kokoelman luominen
            </h6>
          </div>

          <form
            onSubmit={handleSubmit}
            // style={{ width: "24%", margin: "0 auto", right: "100%", left: "100%", top: "100%", display: "grid"}}
          >
            <div class="flexbox-container">
              <div class="box">
                <label for="email">
                  <b>S??hk??posti</b>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  onChange={(e) => handleChange(e)}
                />{" "}
                <br />
                <label for="name">
                  <b>Nimi</b>
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  onChange={(e) => handleChange(e)}
                />{" "}
                <p style={{ color: "red", marginLeft: "20px" }}>{name}</p>
                <br />
                <label for="psw">
                  <b>Salasana</b>
                </label>
                <input
                  required
                  type="password"
                  name="password"
                  onChange={(e) => handleChange(e)}
                />{" "}
                <br />
                <label for="psw">
                  <b>Salasana uudestaan</b>
                </label>
                <input
                  required
                  name="password_repeat"
                  type="password"
                  onChange={(e) => handleChange(e)}
                />
                <p style={{ color: "red", marginLeft: "20px" }}>{passMatch}</p>
                <br />
                {/* <input type="checkbox" placeholder="" name="psw" id="psw" style={{marginLeft: "20px"}}/>
                <label for="psw"><b>Hyv??ksyn k??ytt??ehdot</b></label>
                <br/>
                <input type="checkbox" placeholder="" name="psw" id="psw" style={{marginLeft: "20px"}}/>
                <label for="psw"><b>Tilaa uutiskirje</b></label>
                <br/> */}
                <button type="submit" class="registerbtn">
                  Luo tili
                </button>{" "}
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

          <div className="FormLink">
            <Link to="/login" className="bottomText">
              Olen jo rekister??itynyt Kirjaudu sis????n
            </Link>
          </div>
        </div>
      </div>
      <div className="loginfooter">
        <Footer />
      </div>

      {/*

 <div>
        {isError &&
          <h5>{ errorMessage }</h5>
        }

        <div class="container">
        <h6 class="top-font">Rekister??idy aloittaaksesi<br/> kokoelman luominen
        </h6>

        </div>

        <form onSubmit={handleSubmit} 
        // style={{ width: "24%", margin: "0 auto", right: "100%", left: "100%", top: "100%", display: "grid"}}
        >
        <div class="flexbox-container">
          <label for="email"><b>Salasana</b></label>
          <input type="email" name="email"  onChange={(e) => handleChange(e)} /> <br />

          <label for="psw"><b>Salasana uudestaan</b></label>
          <input type="text" name="name" onChange={(e) => handleChange(e)} /><br />
          
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => handleChange(e)}
                /><br />
          <label>Confirm Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => handleChange(e)}
                />
                <button>submit</button>
            </div>
        </form>
      </div>
*/}
    </>
  );
};
export default Register;
