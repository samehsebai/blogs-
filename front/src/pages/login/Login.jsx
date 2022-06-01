import axios from "axios"
import { useContext, useRef } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../context/Context"
import "./login.css"

export default function Login() {

  const userRef = useRef()
  const passwordRef = useRef()
  const { dispatch , isFetching} = useContext(Context)

  const handleSubmit = async (e)=>{
    e.preventDefault()
    dispatch({type:"LOGIN_START"});
    try{
      const res = await axios.post("/auth/login",{
        username: userRef.current.value,
        password:passwordRef.current.value,
      });
      dispatch({type:"LOGIN_SUCCESS",payload: res.data})
    }catch(err){
      dispatch({type:"LOGIN_FAILURE"});

    }
  };
  return (
    <div className="login">
        <span className="logintitle">Login</span>
        <div className="form_class">
        <form  className="loginform" onSubmit={handleSubmit}>
            <label >Username</label>
            <input 
              type="text"
              className="logininput"
              placeholder=" enter your username..." 
              ref={userRef}
              />
            <label >Password</label>
            <input 
            className="logininput"
            type="password"
            placeholder=" enter your password..."
            ref={passwordRef}
            />
            <button className="loginbutton" type="submit" disabled={isFetching}>login</button>
        </form>
        </div>
        <button className="registerbutton" >
        <Link className='link' to="/register">register</Link>
        </button>

    </div>
  )
}
