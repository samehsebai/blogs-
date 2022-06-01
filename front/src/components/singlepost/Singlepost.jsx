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
    const [desc,setDesc] = useState("")
    const [updateMode,setUpdateMode] = useState(false)
  useEffect(()=>{
const getPost = async()=>{
  const res = await axios.get("/postes/"+path)
  console.log(res)
  setPost(res.data)
  setTitle(res.data.title)
  setDesc(res.data.desc)
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
                    desc:desc }
        )
        window.location.replace("/")
        setUpdateMode(false);
    }catch(err) {}
}

  return (
    <div className="singlepost">
        <div className="singlepostwrapper">
          {post.photo &&
        <img src={PF+post.photo} alt="" className="singlepostimg" />}
        { updateMode? <input type="text" value={title} 
                    className="singleposttitleinput" 
                    autoFocus 
                    onChange={(e)=>setTitle(e.target.value)}/> 
                    :(
        <h1 className="singleposttitle">
            {post.title}
            {post.username === user?.username && (
            <div className="singlepostedit">
            <i className="singleposteicon" id="first" class="fa-solid fa-pen-to-square" onClick={() => setUpdateMode(true)}></i>
            <i className="singleposteicon" id="last" class="fa-solid fa-delete-left" onClick={handleDelete}></i>
            </div>
            )}
        </h1>
        )}
        <div className="singlepostinfo">
            <span className="singlepostauthor">Author :
            <Link to={`/?user=${post.username}`} className="link">
            <b>{post.username}</b>
            </Link>
            </span>
            <span className="singlepostdate">{new Date(post.createdAt).toDateString()}</span>
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
