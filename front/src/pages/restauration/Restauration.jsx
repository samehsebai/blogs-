import axios from "axios"
import { Link } from "react-router-dom"
import "./restauration.css"
import { useEffect, useState,useContext } from "react"
import { useLocation } from "react-router"
/*
constat,
causes,
dateRestauration,
lieuRestauration,
nomRestauration,
typeIntervention,
materiaux
}*/

export default function Restauration() {
    const [constat,setconstat] = useState("")
    const [causes,setcauses] = useState("")
    const [dateRestauration,setdateRestauration] = useState("")
    const [lieuRestauration,setlieuRestauration] = useState("")
    const [nomRestauration,setnomRestauration] = useState("")
    const [typeIntervention,settypeIntervention] = useState("")
    const [materiaux,setmateriaux] = useState("")
    const [updateMode,setUpdateMode] = useState("")
    const [error, setError] = useState(false)
    const handleSubmit = async (e) => {
      e.preventDefault();
    try{
    const newrestauration = await axios.post("/restauration",{
        constat,
        causes,
        dateRestauration,
        lieuRestauration,
        nomRestauration,
        typeIntervention,
        materiaux
        
    });
    try{
      const res = await axios.post("/restauration",newrestauration);
      window.location.replace("/")
      }catch(err) {}
      }  catch(err){
    console.log(err)
      }
  };
  return (
    <div className="restauration">
        <span className="restaurationtitle">restauration</span>
        <div className="form_class">
        <form  className="restaurationform" onSubmit={handleSubmit}>
            <label >constat</label>
            <input className="restaurationinput" type="text" placeholder="constat" 
             onChange={e=>setconstat(e.target.value)}
            />
            <label >causes</label>
            <input className="restaurationinput" type="text" placeholder=" causes" 
            onChange={e=>setcauses(e.target.value)}
            />
            <label >date Restauration</label>
            <input className="restaurationinput" type="text" placeholder="date Restauration" 
            onChange={e=>setdateRestauration(e.target.value)}
            />
            <label >lieu Restauration</label>
            <input className="restaurationinput" type="text" placeholder="lieu Restauration" 
            onChange={e=>setlieuRestauration(e.target.value)}
            />
            <label >nom Restauration</label>
            <input className="restaurationinput" type="text" placeholder="nomRestauration" 
            onChange={e=>setnomRestauration(e.target.value)}
            />
            <label >type Intervention</label>
            <input className="restaurationinput" type="text" placeholder="type Intervention" 
            onChange={e=>settypeIntervention(e.target.value)}
            />
            <label >materiaux</label>
            <input className="restaurationinput" type="text" placeholder="materiaux" 
            onChange={e=>setmateriaux(e.target.value)}
            />
            <button className="restaurationbutton1" type="submit">enregistrer</button>
        </form>
        </div>
    </div>
  )
}



