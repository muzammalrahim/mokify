import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import { signupUser, userSelector, clearState } from "../store/reducers/auth"
import { API_URL } from '../helper/api'
import { useHistory, Link } from "react-router-dom";
import Footer from '../component/Footer'
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

const Register = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  
  const { isFetching, isLoggedIn, isError, errorMessage } =
    useSelector(userSelector);
    
    const [user, setUser] = useState({})

    const handleChange = (e) => {
        setUser(
           { ...user, [e.target.name]: e.target.value },
        );
    }


    const handleSubmit = (e) => { 
      e.preventDefault();
        // axios.post(API_URL, postBody).then(response =>
        //     console.log(response.data.data.register.errors)).catch(
        //         error => {
        //             console.log(error)
        //     }
        // )
        dispatch(signupUser(user));
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
                <img src={process.env.PUBLIC_URL + "/authImages/mukify.png"} />
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
                  <label for="email">
                    <b>Sähköposti</b>
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => handleChange(e)}
                  />{" "}
                  <br />
                  <label for="email">
                  <b>Nimi</b>
                  </label>
                  <input
                    type="email"
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
                  <br />
                  {/* <input type="checkbox" placeholder="" name="psw" id="psw" style={{marginLeft: "20px"}}/>
                <label for="psw"><b>Hyväksyn käyttöehdot</b></label>
                <br/>
                <input type="checkbox" placeholder="" name="psw" id="psw" style={{marginLeft: "20px"}}/>
                <label for="psw"><b>Tilaa uutiskirje</b></label>
                <br/> */}
                  <button type="submit" class="registerbtn">
                    Luo tili
                  </button>{" "}
                  <h5 className="boxText">Tai valitse joku seuraavista</h5>
                  <div style={{position:"relative"}}>
                  <button type="submit" class="registerbtnFb">
                    <FacebookLogin
                      appId="372164971017671"
                      autoLoad={false}
                      fields="name,email,picture"
                      textButton="Facebook connect"
                      // onClick={componentClicked}
                      callback={responseFacebook}
                    />
                  </button>
                  <img className="facebookIcon" src={process.env.PUBLIC_URL + '/svg/facebook.svg'} />
                  </div>
                  <div style={{position:"relative"}}>
                  <button type="submit" class="registerbtnGoogle">
                    <GoogleLogin
                      clientId="1081859704336-aalfm16drgu918csp0vlq575ipebnrao.apps.googleusercontent.com"
                      buttonText="Google Sign in"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    />

                  </button>
                  <img className="facebookIcon" src={process.env.PUBLIC_URL + '/svg/google.svg'} />
                  </div>
                </div>
              </div>
            </form>
            <div className="mainimg1">
              <img
                src={process.env.PUBLIC_URL + "/authImages/imagelogin1.png"}
              />
            </div>
            <div className="mainimg2">
              <img
                src={process.env.PUBLIC_URL + "/authImages/imagelogin2.png"}
              />
            </div>
            <div className="mainimg3">
              <img
                src={process.env.PUBLIC_URL + "/authImages/imagelogin3.png"}
              />
            </div>

            <div className="FormLink">
              <Link to="/login" className="bottomText">
                Olen jo rekisteröitynyt Kirjaudu sisään
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
        <h6 class="top-font">Rekisteröidy aloittaaksesi<br/> kokoelman luominen
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
}
export default Register;

 
     
