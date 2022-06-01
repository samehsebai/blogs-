import "./write.css"
import axios from 'axios'
import {useContext, useState} from 'react'
import think from "../../components/assets/write2.jpg"
import {Context} from "../../context/Context"
export default function Write() {
  const [title,setTitle] = useState("")
  const [desc,setDesc] = useState("")
  const [file,setFile] = useState(null)
  const {user} = useContext (Context)

  const handleSubmit = async (e) => {
      e.preventDefault();
      const newPost = {
        username:user.username,
        title,
        desc,
    };
    if (file){
      const data = new FormData();
      const filename = Date.now()+ file.name;
      data.append("name",filename)
      data.append("file",file)
      newPost.photo = filename;
      try{
          await axios.post("/upload",data)

      }catch(err){

      }
  }
  try{
  const res = await axios.post("/postes",newPost);
  window.location.replace("/post/"+res.data._id)
  }catch(err) {}
}

  return (
    <div className="write">
            {file && 
            (<img src={URL.createObjectURL(file)}
                 alt="" 
                 className="writeimg" />  ) }        
                 <form className="writeform" onSubmit={handleSubmit}>
                <div className="writeformgrp">
                <label htmlFor="fileinput" className="writeicon">
                <i class="fa-solid fa-plus"></i>
                </label>
                <input type="file" name="" id="fileinput" style={{display:"none"}}  onChange={ (e) => setFile(e.target.files[0]) }/>
                <input type="text" placeholder="Title" className="writeinput" autoFocus={true} onChange={ (e) => setTitle(e.target.value) }/>
            </div>
            <div className="writeformgrp">
                <textarea placeholder="talk about web devlopement ..." type="text" className="writeinput writetext" onChange={ (e) => setDesc(e.target.value) }></textarea>
            </div>
            <button className="writesubmit" type="submit" >publish</button>
        </form>
    </div>
  )
}
