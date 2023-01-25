import axios from "axios"
import { Link } from "react-router-dom"
import "./exposition.css"
import { useEffect, useState,useContext } from "react"
import { useLocation } from "react-router"


export default function Exposition() {
    const [containtes,setcontaintes] = useState("")
    const [titre,settitre] = useState("")
    const [lieu,setlieu] = useState("")
    const [date,setdate] = useState("")
    const [updateMode,setUpdateMode] = useState("")
    const [error, setError] = useState(false)
    const handleSubmit = async (e) => {
      e.preventDefault();
    try{
    const newexposition = await axios.post("/exposition",{
        containtes,
        titre,
        lieu,
        date
        
    });
    try{
      const res = await axios.post("/exposition",newexposition);
      window.location.replace("/")
      }catch(err) {}
      }  catch(err){
    console.log(err)
      }
  };

  return (
    <div className="exposition">
        <span className="expositiontitle">exposition</span>
        <div className="form_class">
        <form  className="expositionform" onSubmit={handleSubmit}>
            <label >containtes</label>
            <input className="expositioninput" type="text" placeholder="containtes" 
             onChange={e=>setcontaintes(e.target.value)}
            />
            <label >titre</label>
            <input className="expositioninput" type="text" placeholder=" titre" 
            onChange={e=>settitre(e.target.value)}
            />
            <label >lieu</label>
            <input className="expositioninput" type="text" placeholder="lieu" 
            onChange={e=>setlieu(e.target.value)}
            />
            <label >prix</label>
            <input className="expositioninput" type="text" placeholder=" prix" 
            onChange={e=>setprix(e.target.value)}
            />
            <label >date</label>
            <input className="expositioninput" type="text" placeholder="date" 
            onChange={e=>setdate(e.target.value)}
            />
            <button className="expositionbutton1" type="submit">enregistrer</button>
        </form>
        </div>
    </div>
  )
}



