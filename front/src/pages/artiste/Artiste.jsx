import axios from "axios"
import { Link } from "react-router-dom"
import "./artiste.css"
import { useEffect, useState,useContext } from "react"
import { useLocation } from "react-router"

export default function Artiste() {
    const [name,setname] = useState("")
    const [dateNaiss,setdateNaiss] = useState("")
    const [dateDeces,setdateDeces] = useState("")
    const [nationalite,setnationalite] = useState("")
    const [biographie,setbiographie] = useState("")
    const [updateMode,setUpdateMode] = useState("")
    const [error, setError] = useState(false)



    const handleSubmit = async (e) => {
      e.preventDefault();
    try{
    const newartiste = await axios.post("/artist",{
        name,
        dateNaiss,
        dateDeces,
        nationalite,
        biographie
    });
    try{
      const res = await axios.post("/artist",newartiste);
      window.location.replace("/artistes")
      }catch(err) {}
      }  catch(err){
    console.log(err)
      }
  };

  return (
    <div className="artiste">
        <span className="artistetitle">artiste</span>
        <div className="form_class">
        <form  className="artisteform" onSubmit={handleSubmit}>
        <label >nom</label>
            <input className="artisteinput" type="text" placeholder=" nom" 
             onChange={e=>setname(e.target.value)}
            />
            <label >date Naiss</label>
            <input className="artisteinput" type="date" placeholder=" dateNaiss" 
             onChange={e=>setdateNaiss(e.target.value)}
            />
            <label >date Deces</label>
            <input className="artisteinput" type="date" placeholder=" date Deces" 
            onChange={e=>setdateDeces(e.target.value)}
            />
            <label >nationalite</label>
            <input className="artisteinput" type="text" placeholder=" nationalite" 
            onChange={e=>setnationalite(e.target.value)}
            />
            <label >biographie</label>
            <input className="artisteinput" type="text" placeholder="biographie" 
            onChange={e=>setbiographie(e.target.value)}
            />
            <button className="artistebutton1" type="submit">enregistrer</button>
        </form>
        </div>
    </div>
  )
}





