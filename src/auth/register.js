import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import { signupUser, userSelector, clearState } from "../store/reducers/auth"
import { API_URL } from '../helper/api'
import { useHistory } from "react-router-dom";

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
      <div>
        {isError &&
          <h5>{ errorMessage }</h5>
        }
        <form onSubmit={handleSubmit} style={{ width: "24%", margin: "0 auto", right: "100%", left: "100%", top: "100%", display: "grid"}}>
          <label>Email</label>
          <input type="email" name="email" onChange={(e) => handleChange(e)} /> <br />
          <label>Name</label>
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
        </form>
      </div>
    );
}
export default Register