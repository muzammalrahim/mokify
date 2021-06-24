import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { signupUser, userSelector, clearState } from "../store/reducers/auth";
import { API_URL } from "../helper/api";
import { useHistory } from "react-router-dom";
import Footer from "../component/Footer";

const ForgotPassword = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { isFetching, isLoggedIn, isError, errorMessage } =
    useSelector(userSelector);

  const [user, setUser] = useState({});

  const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
      console.log(user)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   axios
      .post(
        API_URL,
        `query=mutation
            {
            sendPasswordResetEmail
            (
            email:"${user.email}"
            )
            {
            success
            errors
            }

            }`
      )
       .then((res) => {
          console.log(res)
        // localStorage.setItem("token", res.data.data.socialAuthJwt.token);
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
    axios
      .post(
        API_URL,
        `query=mutation
            {
            sendPasswordResetEmail
            (
            email:""
            )
            {
            success
            errors
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
        <div className="registerPageMain">
          <div class="">
            <div className="topImg">
              <img src={process.env.PUBLIC_URL + "/authImages/mukify.png"} />
            </div>
            <h6 class="top-font">
              Rekisteröidy aloittaaksesi
              <br /> kokoelman luominen
            </h6>
          </div>

          <form
            onSubmit={handleSubmit}
          >
            <div class="flexbox-container">
              <div class="box">
                <label for="email">
                  <b>Sähköposti</b>
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => handleChange(e)}
                />{" "}
               
                
                <button type="submit" class="registerbtn">
                  Luo tili
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
export default ForgotPassword;
