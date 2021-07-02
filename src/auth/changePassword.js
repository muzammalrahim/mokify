import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { signupUser, userSelector, clearState } from "../store/reducers/auth";
import { API_URL } from "../helper/api";
import { useHistory, Link } from "react-router-dom";
import Footer from "../component/Footer";
import msg from "../helper/notification";
import logo from "../assets/logo.svg";

const ResetPassword = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { isFetching, isLoggedIn, isError, errorMessage } =
    useSelector(userSelector);

  const [user, setUser] = useState({});
  const [token, setToken] = useState("");

  const handleChange = (e) => {
    console.log(user);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        API_URL,
        `query=mutation
            {
            passwordChange(
            oldPassword:"${user.oldpassword}"
            newPassword1: "${user.password}"
            newPassword2: "${user.password}")
            {
            success
            errors
            refreshToken
            token
            }
            }`
      )
      .then((res) => {
        if (res.data.data.passwordChange.success == true) {
          localStorage.removeItem();
          history.push("/login");
        } else {
          msg.error(
            "you are " +
              res.data.data.passwordChange.errors.nonFieldErrors[0].message
          );
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log(msg);
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
    setToken(props.match.params.id);
  }, []);

  return (
    <>
      <div>
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

          <form onSubmit={handleSubmit}>
            <div class="flexbox-container">
              <div class="box">
                <label for="psw">
                  <b>vanha salasana</b>
                </label>
                <input
                  type="password"
                  name="oldpassword"
                  onChange={(e) => handleChange(e)}
                />{" "}
                <br />
                <label for="psw">
                  <b>Uusi Salasana</b>
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={(e) => handleChange(e)}
                />{" "}
                <br />
                <label for="psw">
                  <b>Salasana uudestaan</b>
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={(e) => handleChange(e)}
                />
                <button type="submit" class="registerbtn">
                  Lähetä
                </button>{" "}
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

          <div>
            <p className="bottomText">
              Olen jo rekisteröitynyt. Kirjaudu sisään
            </p>
          </div>
        </div>
      </div>
      <div className="loginfooter">
        <Footer />
      </div>
    </>
  );
};
export default ResetPassword;
