import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
  const [username , setUsername] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [error, setError] = useState(false)


  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      setError(false)
    const res = await axios.post("/auth/register",{
      username,
      email,
      password,
    });
    res.data && window.location.replace('/login');
  }catch(err){
    console.log(err)
    setError(true)

  }

  };

  return (
    <div className="register">
        <span className="registertitle">Register</span>
        <div className="form_class">
        <form  className="registerform" onSubmit={handleSubmit}>
            <label >Username</label>
            <input className="registerinput" type="text" placeholder=" enter your username..." 
            onChange={e=>setUsername(e.target.value)}
            />
            <label >Email</label>
            <input className="registerinput" type="email" placeholder=" enter your email..." 
             onChange={e=>setEmail(e.target.value)}

            />
            <label >Password</label>
            <input className="registerinput" type="password" placeholder=" enter your password..." 
            onChange={e=>setPassword(e.target.value)}

            />
            <button className="registerbutton1" type="submit">Register</button>
        </form>
        </div>
        <button className="loginbutton1">
        <Link className='link' to="/login">Login</Link>
        </button>
        {error && <span style={{color:"red", marginTop:"10px"}}>somthing went wrong</span>}
    </div>
  )
}
