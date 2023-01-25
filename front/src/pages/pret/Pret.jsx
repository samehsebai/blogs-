import axios from "axios"
import { Link } from "react-router-dom"
import "./pret.css"
import { useEffect, useState,useContext } from "react"
import { useLocation } from "react-router"

export default function Pret() {
    const [institution,setinstitution] = useState("")
    const [nomExposition,setnomExposition] = useState("")
    const [dateDepart,setdateDepart] = useState("")
    const [DateRetour,setDateRetour] = useState("")
    const [updateMode,setUpdateMode] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
      e.preventDefault();
    try{
    const newpret = await axios.post("/pret",{
        institution,
        nomExposition,
        dateDepart,
        DateRetour
    });
    

    try{
      const res = await axios.post("/pret",newpret);
      window.location.replace("/")
      }catch(err) {}
      }  catch(err){
    console.log(err)
      }
  };

  return (
    <div className="pret">
        <span className="prettitle">pret</span>
        <div className="form_class">
        <form  className="pretform" onSubmit={handleSubmit}>
            <label >institution</label>
            <input className="pretinput" type="text" placeholder="institution" 
             onChange={e=>setinstitution(e.target.value)}
            />
            <label >nom Exposition</label>
            <input className="pretinput" type="text" placeholder="nom Exposition" 
            onChange={e=>setnomExposition(e.target.value)}
            />
            <label >date Depart</label>
            <input className="pretinput" type="text" placeholder="date Depart" 
            onChange={e=>setdateDepart(e.target.value)}
            />
            <label >Date Retour</label>
            <input className="pretinput" type="text" placeholder="Date Retour" 
            onChange={e=>setDateRetour(e.target.value)}
            />           
            <button className="pretbutton1" type="submit">enregistrer</button>
        </form>
        </div>
    </div>
  )
}




