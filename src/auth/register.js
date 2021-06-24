import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import { signupUser, userSelector, clearState } from "../store/reducers/auth"
import { API_URL } from '../helper/api'
import { useHistory } from "react-router-dom";
import Footer from '../component/Footer'

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
          <label for="psw"><b>Salasana</b></label>
          <input type="password" name="email"  onChange={(e) => handleChange(e)} /> <br />

          <label for="psw"><b>Salasana uudestaan</b></label>
          <input type="password" name="password" onChange={(e) => handleChange(e)} /><br />
          
          
                <input type="checkbox" placeholder="" name="psw" id="psw" style={{marginLeft: "20px"}}/>
                <label for="psw"><b>Hyväksyn käyttöehdot</b></label>
                <br/>
                <input type="checkbox" placeholder="" name="psw" id="psw" style={{marginLeft: "20px"}}/>
                <label for="psw"><b>Tilaa uutiskirje</b></label>
                <br/>
                <button type="submit" class="registerbtn">Luo tili</button>
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

 
     
