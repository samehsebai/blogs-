import axios from "axios"
import { Link } from "react-router-dom"
import "./bibliographie.css"
import { useEffect, useState,useContext } from "react"
import { useLocation } from "react-router"


export default function Bibliographie() {
    const [publication,setpublication] = useState("")
    const [titreOuvrage,settitreOuvrage] = useState("")
    const [nomAuteur,setnomAuteur] = useState("")
    const [datePublication,setdatePublication] = useState("")
    const [page,setpage] = useState("")
    const [editeur,setediteur] = useState("")
    const [updateMode,setUpdateMode] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
      e.preventDefault();
    try{
    const newbibliographie = await axios.post("/bibliographie",{
        publication,
        titreOuvrage,
        nomAuteur,
        datePublication,
        page,
        editeur,
    });
    try{
      const res = await axios.post("/bibliographie",newbibliographie);
      window.location.replace("/")
      }catch(err) {}
      }  catch(err){
    console.log(err)
      }
  };

  return (
    <div className="bibliographie">
        <span className="bibliographietitle">bibliographie</span>
        <div className="form_class">
        <form  className="bibliographieform" onSubmit={handleSubmit}>
       
            <label >publication</label>
            <input className="bibliographieinput" type="text" placeholder=" publication" 
             onChange={e=>setpublication(e.target.value)}
            />
            <label >titre Ouvrage</label>
            <input className="bibliographieinput" type="text" placeholder=" titre Ouvrage" 
            onChange={e=>settitreOuvrage(e.target.value)}
            />
            <label >nom Auteur</label>
            <input className="bibliographieinput" type="text" placeholder="nom Auteur" 
            onChange={e=>setnomAuteur(e.target.value)}
            />
            <label >date Publication</label>
            <input className="bibliographieinput" type="text" placeholder=" date Publication" 
            onChange={e=>setdatePublication(e.target.value)}
            />
            <label >page</label>
            <input className="bibliographieinput" type="text" placeholder="page" 
            onChange={e=>setpage(e.target.value)}
            />
            <label >editeur</label>
            <input className="bibliographieinput" type="text" placeholder="editeur" 
            onChange={e=>setediteur(e.target.value)}
            />
           
            <button className="bibliographiebutton1" type="submit">enregistrer</button>
        </form>
        </div>
    </div>
  )
}




