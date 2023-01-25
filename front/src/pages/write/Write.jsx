import "./write.css"
import axios from 'axios'
import {useContext, useState} from 'react'
import think from "../../components/assets/write2.jpg"
import {Context} from "../../context/Context"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
export default function Write() {
  const [title,setTitle] = useState("")
  const [nomPrenom,setnomPrenom] = useState("")
  const [dateCreation,setdateCreation] = useState("")
  const [materiaux,setmateriaux] = useState("")
  const [support,setsupport] = useState("")
  const [dimensions2D,setdimensions2D] = useState("")
  const [dimensions3D,setdimensions3D] = useState("")
  const [poid,setpoid] = useState("")
  const [nbElements,setnbElements] = useState("")
  const [numTirage,setnumTirage] = useState("")
  const [typeTirage,settypeTirage] = useState("")
  const [artisteId,setartisteId]= useState("")
  const [categories,setcategories] = useState("")
  const [desc,setDesc] = useState("")
  const [file,setFile] = useState(null)
  const {search} =useLocation();
  const {user} = useContext (Context)

  const [Artistes, setArtistes] = useState([]);


  const handleSubmit = async (e) => {
      e.preventDefault();
      const newPost = {
        username:user.username,
        title,
        nomPrenom,
        dateCreation,
        materiaux,
        support,
        dimensions2D,
        dimensions3D,
        poid,
        nbElements,
        numTirage,
        typeTirage,
        desc,
        categories,
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

useEffect(() => {
    const Artistedata = async () => {
      const { data } = await axios.get('/artist'+search);
      setArtistes(data);
    }
    Artistedata()
  },[search])


  return (
    <div className="write">
            {file && 
            (<img src={URL.createObjectURL(file)}
                 alt="" 
                 className="writeimg" />  ) }        
                 <form className="writeform" onSubmit={handleSubmit}>
                <div className="writeformgrp">
                <label htmlFor="fileinput" className="writeicon1">
                <i class="fa-solid fa-plus"></i>
                </label>
                <input type="file" name="" id="fileinput" style={{display:"none"}}  onChange={ (e) => setFile(e.target.files[0]) }/>
                <input type="text" placeholder="Title" className="writeinput" autoFocus={true} onChange={ (e) => setTitle(e.target.value) }/>
                </div>
            <div className="writeformgrp">
                <input type="text" placeholder="nom Prenom" className="writeinput" autoFocus={true} onChange={ (e) => setnomPrenom(e.target.value) }/>
                <input type="text" placeholder="dateCreation" className="writeinput" autoFocus={true} onChange={ (e) => setdateCreation(e.target.value) }/>
            </div>
            <div className="writeformgrp">
                <input type="text" placeholder="materiaux" className="writeinput" autoFocus={true} onChange={ (e) => setmateriaux(e.target.value) }/>
                <input type="text" placeholder="support" className="writeinput" autoFocus={true} onChange={ (e) => setsupport(e.target.value) }/>
            </div>
            <div className="writeformgrp">
                <input type="text" placeholder="dimensions 2D" className="writeinput" autoFocus={true} onChange={ (e) => setdimensions2D(e.target.value) }/>
                <input type="text" placeholder="dimensions 3D" className="writeinput" autoFocus={true} onChange={ (e) => setdimensions3D(e.target.value) }/>
            </div>
            <div className="writeformgrp">
                <input type="text" placeholder="poid" className="writeinput" autoFocus={true} onChange={ (e) => setpoid(e.target.value) }/>
                <input type="text" placeholder="nombre des elements" className="writeinput" autoFocus={true} onChange={ (e) => setnbElements(e.target.value) }/>
            </div>
            <div className="writeformgrp">
                <input type="text" placeholder="numero de tirage" className="writeinput" autoFocus={true} onChange={ (e) => setnumTirage(e.target.value) }/>
                <input type="text" placeholder="type de tirage" className="writeinput" autoFocus={true} onChange={ (e) => settypeTirage(e.target.value) }/>
            </div>

            <div className="writeformgrp">
                <select className="writeinput" autoFocus={true}>
                <option value="">Artiste</option>
                {Artistes.map((art) => (
                <option value={art._id}  onChange={ (e) => setartisteId(e.target.value) }>{art.name}</option>
                ))}
                </select>
                <select className="writeinput" autoFocus={true} onChange={ (e) => setcategories(e.target.value)}>
                <option value="">categorie</option>
                <option value="sculpture">sculpture</option>
                <option value="peinture">peinture</option>
                <option value="ArtsGraphiques">ArtsGraphiques</option>
                <option value="photographie">photographie</option>
                <option value="video">video</option>
                <option value="textile">textile</option>
                <option value="autres">autres</option>
                </select>

            </div>
            <div className="writeformgrp">
                <textarea placeholder="description ..." type="text" className="writeinput writetext" onChange={ (e) => setDesc(e.target.value) }></textarea>
            </div>
            <button className="writesubmit" type="submit" >publish</button>
        </form>
    </div>
  )
}
