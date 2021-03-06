import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { signupUser, userSelector, clearState } from "../store/reducers/auth";
import { API_URL } from "../helper/api";
import { useHistory, Link } from "react-router-dom";
import Footer from "../component/Footer";
import logo from "../assets/logo.svg";
import msg from "../helper/notification"

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
            passwordReset(
            token: "${token}",
            newPassword1: "${user.password}"
            newPassword2: "${user.password}")
            {
            success
            errors
            }
            }`
      )
      .then((res) => {
        if (res.data.data.passwordReset.success == true) {
          msg.success("password successfully reset")
          history.push("/login");
        }
      })
      .catch((err) => console.log(err));
  };

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
              Rekister??idy aloittaaksesi
              <br /> kokoelman luominen
            </h6>
          </div>

          <form onSubmit={handleSubmit}>
            <div class="flexbox-container">
              <div class="box">
                <label for="psw">
                  <b>Salasana</b>
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
                  L??het??
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

          <div></div>
        </div>
      </div>
      <div className="loginfooter">
        <Footer />
      </div>
    </>
  );
};
export default ResetPassword;
