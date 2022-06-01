import Sidebar from "../../components/sidebar/Sidebar"
import "./setting.css"
import profil from "../../components/assets/profil.png"
import { useContext,useState } from 'react'
import {Context} from "../../context/Context"
import axios from "axios"

export default function Setting() {
    const {user,dispatch} = useContext(Context)
    const PF = "http://localhost:5000/images/";
    const [file,setFile] = useState(null)
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [success,setSuccess] = useState(false)
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type:"UPDATE_START"})
        const updatedUser = {
            userId: user._id,
            username:username,
            email:email,
            password:password,
            
        };

        if (file){
            const data = new FormData();
            const filename = Date.now()+ file.name;
            data.append("name",filename)
            data.append("file",file)
            updatedUser.profilpic= filename;
            try{
                await axios.post("/upload",data)
                
            }catch(err){

            }


        }
        try{
        const res = await axios.put("/users/"+user._id , updatedUser);
        setSuccess(true);
        dispatch({type:"UPDATE_SUCCESS",payload: res.data})

        }catch(err) {
        dispatch({type:"UPDATE_FAILURE"})
        }
    }

  return (
      
    <div className="setting">
        <div className="settingwrapper">
            <div className="settingtitle">
                <span className="settingupdatetitle">Update your Account </span>
                <span className="settingdeletetitle">Delate Account </span>
            </div>
            <form className="settingform" onSubmit={handleSubmit}>
                <label >profil picture</label>
                <div className="settingpp">
                    <img className="settingimg" 
                    src={file? URL.createObjectURL(file):PF+user.profilpic}   
                        alt=""/>
                    <label htmlFor="fileInput">
                    <i className="settingppicon fa-solid fa-circle-user"></i>
                    </label>
                    <input type="file"
                         id="fileInput"
                         style={{display:'none'}}
                         onChange={ (e) => {setFile(e.target.files[0]); setSuccess(false) } }   
                          />
                           </div>
                <label>User Name</label>
                <input type="text" placeholder={user.username} onChange={ (e) => {setUsername(e.target.value); setSuccess(false)}} />
                <label>Email</label>
                <input type="email" placeholder={user.email}
                onChange={ (e) => {setEmail(e.target.value); setSuccess(false)} }/>
                
                <label>Password</label>
                <input type="password"
                onChange={ (e) => {setPassword(e.target.value); setSuccess(false) } } />

                <button className="settingsubmit"
                type="submit">Update</button>

                {success && <span className="success">Profile has been updated !</span>}

                </form>
        </div>
        <Sidebar/>
    </div>
  )
}
