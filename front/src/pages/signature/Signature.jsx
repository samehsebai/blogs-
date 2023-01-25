import axios from "axios"
import { Link } from "react-router-dom"
import "./signature.css"
import { useEffect, useState,useContext } from "react"
import { useLocation } from "react-router"

export default function Signature() {
    const [localisationOeuvre,setlocalisationOeuvre] = useState("")
    const [dec,setdec] = useState("")
    const [updateMode,setUpdateMode] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
      e.preventDefault();
    try{
    const newsignature = await axios.post("/signature",{
        localisationOeuvre,
        dec
    });
    

    try{
      const res = await axios.post("/signature",newsignature);
      window.location.replace("/")
      }catch(err) {}
      }  catch(err){
    console.log(err)
      }
  };

  return (
    <div className="signature">
        <span className="signaturetitle">signature</span>
        <div className="form_class">
        <form  className="signatureform" onSubmit={handleSubmit}>
      
            <label > localisation Oeuvre</label>
            <input className="signatureinput" type="text" placeholder="localisation Oeuvre" 
             onChange={e=>setlocalisationOeuvre(e.target.value)}
            />
            <label >localisation Oeuvre</label>
            <input className="signatureinput" type="text" placeholder="localisation Oeuvre" 
            onChange={e=>setlocalisationOeuvre(e.target.value)}
            />
            <button className="signaturebutton1" type="submit">enregistrer</button>
        </form>
        </div>
    </div>
  )
}




