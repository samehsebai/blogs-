import axios from "axios"
import { Link } from "react-router-dom"
import "./acquisation.css"
import { useEffect, useState,useContext } from "react"
import { useLocation } from "react-router"


export default function Acquisation() {
    const [proprietaire,setproprietaire] = useState("")
    const [dateAcquisation,setdateAcquisation] = useState("")
    const [lieuAcquisation,setlieuAcquisation] = useState("")
    const [prix,setprix] = useState("")
    const [moyenAcquisation,setmoyenAcquisation] = useState("")
    const [preuveAchat,setpreuveAchat] = useState("")
    const [certification,setcertification] = useState("")
    const [updateMode,setUpdateMode] = useState("")
    const [error, setError] = useState(false)



    const handleSubmit = async (e) => {
      e.preventDefault();
    try{
    const newacquisation = await axios.post("/acquisation",{
        proprietaire,
        dateAcquisation,
        lieuAcquisation,
        prix,
        moyenAcquisation,
        preuveAchat,
        certification
    });
    try{
      const res = await axios.post("/acquisation",newacquisation);
      window.location.replace("/")
      }catch(err) {}
      }  catch(err){
    console.log(err)
      }
  };

  return (
    <div className="acquisation">
        <span className="acquisationtitle">acquisation</span>
        <div className="form_class">
        <form  className="acquisationform" onSubmit={handleSubmit}>
            
            <label >proprietaire</label>
            <input className="acquisationinput" type="text" placeholder=" proprietaire" 
             onChange={e=>setproprietaire(e.target.value)}
            />
            <label >date Acquisation</label>
            <input className="acquisationinput" type="text" placeholder=" date Acquisation" 
            onChange={e=>setdateAcquisation(e.target.value)}
            />
            <label >lieu Acquisation</label>
            <input className="acquisationinput" type="text" placeholder=" lieu Acquisation" 
            onChange={e=>setlieuAcquisation(e.target.value)}
            />
            <label >prix</label>
            <input className="acquisationinput" type="text" placeholder=" prix" 
            onChange={e=>setprix(e.target.value)}
            />
            <label >moyen Acquisation</label>
            <input className="acquisationinput" type="text" placeholder=" moyen Acquisation" 
            onChange={e=>setmoyenAcquisation(e.target.value)}
            />
            <label >preuve Achat</label>
            <input className="acquisationinput" type="text" placeholder="preuve Achat" 
            onChange={e=>setpreuveAchat(e.target.value)}
            />
            <label >certification</label>
            <input className="acquisationinput" type="text" placeholder="certification" 
            onChange={e=>setcertification(e.target.value)}
            />

            <button className="acquisationbutton1" type="submit">enregistrer</button>
        </form>
        </div>
    </div>
  )
}





/*import "./acquisation.css"
import { useEffect, useState,useContext } from "react"
import { useLocation } from "react-router"
import Sidebar from "../../components/sidebar/Sidebar"
import "./setting.css"
import {Context} from "../../context/Context"
import axios from "axios"

export default function acquisation() {
  const location  = useLocation()
  const path = location.pathname.split("/")[2];
  const [acquisation , setacquisation] = useState({})
    const {user} = useContext(Context)
    const [proprietaire,setproprietaire] = useState("")
    const [dateAcquisation,setdateAcquisation] = useState("")
    const [lieuAcquisation,setlieuAcquisation] = useState("")
    const [prix,setprix] = useState("")
    const [moyenAcquisation,setmoyenAcquisation] = useState("")
    const [preuveAchat,setpreuveAchat] = useState("")
    const [certification,setcertification] = useState("")
    const [updateMode,setUpdateMode] = useState(false)
  useEffect(()=>{
const getacquisation = async()=>{
  const res = await axios.get("/acquisationes/"+path)
  console.log(res)
  setacquisation(res.data)
  setproprietaire(res.data.proprietaire)
  setdateAcquisation(res.data.dateAcquisation)
  setprix(res.data.prix)
  setmoyenAcquisation(res.data.moyenAcquisation)
  setpreuveAchat(res.data.preuveAchat)
  setcertification(res.data.certification)
  
};
getacquisation()
  },[path]);
  const handleDelete = async () => {
    try{
    await axios.delete("/acquisationes/"+ path,
    { data: {username:user.username} } )
    window.location.replace("/")
    }
    catch(err){}
}

const handleUpdate = async () =>{
    try{
        await axios.put(`/acquisationes/${acquisation._id}`,{
            proprietaire:proprietaire,
            dateAcquisation:dateAcquisation,
            lieuAcquisation:lieuAcquisation,
            prix:prix,
            moyenAcquisation:moyenAcquisation,
            preuveAchat:preuveAchat,
            certification:certification
                 }
        )
        window.location.replace("/")
        setUpdateMode(false);
    }catch(err) {}
}
  return (
    <div className="acquisation">
        <div className="acquisationwrapper">
        { updateMode? <input type="text" value={title} 
                    className="acquisationtitleinput" 
                    autoFocus 
                    onChange={(e)=>setTitle(e.target.value)}/> 
                    :(
        <h1 className="acquisationtitle">
            {acquisation.proprietaire}
            {acquisation.dateAcquisation}
            {acquisation.lieuAcquisation}
            {acquisation.prix}
            {acquisation.moyenAcquisation}
            {acquisation.preuveAchat}
            {acquisation.certification}
            {acquisation.username === user?.username && (
            <div className="acquisationedit">
            <i className="acquisationeicon" id="first" class="fa-solid fa-pen-to-square" onClick={() => setUpdateMode(true)}></i>
            <i className="acquisationeicon" id="last" class="fa-solid fa-delete-left" onClick={handleDelete}></i>
            </div>
            )}
        </h1>
        )}
        <div className="acquisationinfo">
            <span className="acquisationdate">{new Date(acquisation.createdAt).toDateString()}</span>
        </div>
    </div>
    <Sidebar/>
    </div>
)}*/