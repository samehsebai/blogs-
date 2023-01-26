import "./singlepost.css"
import { useEffect, useState,useContext } from "react"
import { useLocation } from "react-router"
import dev from "../assets/webdev.jpg"
import axios from 'axios'
import { Link } from "react-router-dom"
import { Context } from '../../context/Context'

export default function Singlepost() {
  const location  = useLocation()
  const path = location.pathname.split("/")[2];
  const [post , setPost] = useState({})
  const PF = "http://localhost:5000/images/";
  const {user} = useContext(Context)
    const [title,setTitle] = useState("")
    const [nomPrenom,setnomPrenom] = useState("")
  const [dateCreation,setdateCreation] = useState("")
  const [materiaux,setmateriaux] = useState("")
  const [support,setsupport] = useState("")
  const [dimensions2D,setdimensions2D] = useState("")
  const [dimensions3D,setdimensions3D] = useState("")
  const [poid] = useState("")
  const [nbElements] = useState("")
  const [numTirage] = useState("")
  const [typeTirage] = useState("")
  const [artisteId,setartisteId]= useState("")
  const [categories,setcategories] = useState("")
  const [desc,setDesc] = useState("")
    const [updateMode,setUpdateMode] = useState(false)
  useEffect(()=>{
const getPost = async()=>{
  const res = await axios.get("/postes/"+path)
  console.log(res)
  setPost(res.data)
  setTitle(res.data.title)
  setDesc(res.data.desc)
  setnomPrenom(res.data.nomPrenom)
  setdateCreation(res.data.dateCreation)
  setsupport(res.data.support)
  setdimensions2D(res.data.dimensions2D)
  setdimensions3D(res.data.dimensions3D)
  setmateriaux(res.data.materiaux)
};
getPost()
  },[path]);
  const handleDelete = async () => {
    try{
    await axios.delete("/postes/"+ path,
    { data: {username:user.username} } )
    window.location.replace("/")
    }
    catch(err){}
}
const handleUpdate = async () =>{
    try{
        await axios.put(`/postes/${post._id}`,{
             username:user.username,
                    title:title,
                    desc:desc,
                    nomPrenom:nomPrenom,
                    dateCreation:dateCreation,
                    support:support,
                    dimensions2D:dimensions2D,
                    dimensions3D:dimensions3D,
                    materiaux:materiaux,
                  
                  }
        )
        window.location.replace(`/post/${post._id}`)
        setUpdateMode(false);
    }catch(err) {}
}

  return (
    <div className="singlepost">
        <div className="singlepostwrapper">
          {post.photo &&
        <img src={PF+post.photo} alt="" className="singlepostimg" />}
        { updateMode? (<center>
                    <input type="text" value={title} 
                    className="singleposttitleinput" 
                    autoFocus 
                    onChange={(e)=>setTitle(e.target.value)} placeholder="Title"/> <br/>

                    <input type="text" value={nomPrenom} 
                    className="singleposttitleinput" 
                    autoFocus 
                    onChange={(e)=>setnomPrenom(e.target.value)} placeholder="nom Prenom"/> <br/>
                    
                    <input type="text" value={dateCreation} 
                    className="singleposttitleinput" 
                    autoFocus 
                    onChange={(e)=>setdateCreation(e.target.value)}></input> <br/>

                    <input type="text" value={support} 
                    className="singleposttitleinput" 
                    autoFocus 
                    onChange={(e)=>setsupport(e.target.value)} placeholder="support"/> <br/>

                    <input type="text" value={dimensions2D} 
                    className="singleposttitleinput" 
                    autoFocus 
                    onChange={(e)=>setdimensions2D(e.target.value)} placeholder="dimensions2D"/> <br/>

                    <input type="text" value={dimensions3D} 
                    className="singleposttitleinput" 
                    autoFocus 
                    onChange={(e)=>setdimensions3D(e.target.value)} placeholder="dimensions3D"/> <br/>

                    <input type="text" value={materiaux} 
                    className="singleposttitleinput" 
                    autoFocus 
                    onChange={(e)=>setmateriaux(e.target.value)} placeholder="materiaux"/> <br/>
                    
                    </center>
                   ) :(
                    <div>
        <h1 className="singleposttitle">
            {post.title}
            {post.username === user?.username && (
            <div className="singlepostedit">
            <i className="singleposteicon" id="first" class="fa-solid fa-pen-to-square" onClick={() => setUpdateMode(true)}></i>
            <i className="singleposteicon" id="last" class="fa-solid fa-delete-left" onClick={handleDelete}></i>
            </div>

            )}
        </h1>
        <center>
        <table>
        <tr><td>nomPrenom:</td><td><b>{nomPrenom}</b></td></tr><br/>
        <tr><td>dateCreation:</td><td><b>{dateCreation}</b></td></tr><br/>
        <tr><td>support:</td><td><b>{support}</b></td></tr><br/>
        <tr><td>dimensions2D:</td><td><b>{dimensions2D}</b></td></tr><br/>
        <tr><td>dimensions3D:</td><td><b>{dimensions3D}</b></td></tr><br/>
        <tr><td>materiaux:</td><td><b>{materiaux}</b></td></tr><br/>

        </table>
        </center>
        </div>
        )}
        <div className="singlepostinfo">
            <span className="singlepostauthor">Author :
            <Link to={`/?user=${post.username}`} className="link">
            <b>{post.username}</b>
            </Link>
            </span>
            <span className="singlepostdate">
            <Link to={`/?createdAt=${post.createdAt}`} className="link">
              {new Date(post.createdAt).toDateString()}
            </Link>
            </span>
        </div>
        <div className="singlepostdiscription">
        </div>
        {updateMode? (<textarea 
                            className="singlepostdescinput"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            />)
                 :(
                <p className="singlePostDesc">{desc}</p>
                )}
          
                            {updateMode&&
                    <button className="singlePostButton"
                    onClick={handleUpdate}
                    > Update </button>}
        </div>
    </div>
  )
}
