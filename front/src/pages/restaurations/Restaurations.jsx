import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import "./restaurations.css"


function Restaurations() {
  const [updateMode, setUpdateMode] = useState(false)

  const [constat,setconstat] = useState("")
  const [causes,setcauses] = useState("")
  const [dateRestauration,setdateRestauration] = useState("")
  const [lieuRestauration,setlieuRestauration] = useState("")
  const [nomRestauration,setnomRestauration] = useState("")
  const [typeIntervention,settypeIntervention] = useState("")
  const [materiaux,setmateriaux] = useState("")
 
  const [restaurations, setrestaurations] = useState([]);
  const [restauration, setrestauration] = useState();
  const {search} =useLocation();
  useEffect(() => {
  const restaurationdata = async () => {
    const { data } = await axios.get('/restauration'+search);
    setrestaurations(data);
  }
  restaurationdata()
},[search])
const handleDelete = async (id) => {
    await axios.delete(`/restauration/${id}`);
    window.location.replace("/restaurations")
 };
 const handleUpdate1 = async (id) => {
  try{
  console.log(id)
  const { data } = await axios.get(`/restauration/${id}`);
  console.log(data)
  setrestauration(data)

  setconstat(restauration.constat)
  setcauses(restauration.causes)
  setdateRestauration(restauration.dateRestauration)
  setlieuRestauration(restauration.lieuRestauration)
  setnomRestauration(restauration.nomRestauration)
  settypeIntervention(restauration.typeIntervention)
  setmateriaux(restauration.materiaux)

  setUpdateMode(true)
} catch (err) {
  console.log("echec")
}
  
};

const handleUpdateAll = async () => {
  await axios.put(`/restauration/${restauration._id}`,{constat,causes,dateRestauration,lieuRestauration,nomRestauration,typeIntervention,materiaux})
  //setUpdateMode(false)
  window.location.replace("/restaurations")
};

  return (
 <div className='restaurations'>
<div className="writeicon">
<Link className='link' to="/restauration">
<i class="fa-solid fa-plus"></i>
</Link>
</div>
{ !updateMode ? (
<table id="customers">
  <tr>
    <th>constat</th>
    <th>causes</th>
    <th>date Restauration</th>
    <th>lieu Restauration</th>
    <th>nom Restauration</th>
    <th>type Intervention</th>
    <th>materiaux</th>
    <th>Modifier</th>
    <th>Supprimer</th>
  </tr>
  {restaurations.map((art) => (
  <tr>
    <td>{art.constat}</td>
    <td>{art.causes}</td>
    <td>{art.dateRestauration}</td>
    <td>{art.lieuRestauration}</td>
    <td>{art.nomRestauration}</td>
    <td>{art.typeIntervention}</td>
    <td>{art. materiaux}</td>
    <td><i className="singleposteicon" id="first" onClick={() => handleUpdate1(art._id)} class="fa-solid fa-pen-to-square" ></i></td>
    <td><i className="singleposteicon" id="last" onClick={() => handleDelete(art._id)} class="fa-solid fa-delete-left"></i></td>
  </tr>
      ))}

  
  
</table>):(
  <table id="customers">
  <tr>
  <th>constat</th>
    <th>causes</th>
    <th>date Restauration</th>
    <th>lieu Restauration</th>
    <th>nom Restauration</th>
    <th>type Intervention</th>
    <th>materiaux</th>
    <th>Modifier</th>
    <th>Supprimer</th>
  </tr>
  <tr>
    <td><input type="text" value={constat} onChange={(e) => setconstat(e.target.value)}></input></td>
    <td><input type="text" value={causes} onChange={(e) => setcauses(e.target.value)}></input></td>
    <td><input type="text" value={dateRestauration} onChange={(e) => setdateRestauration(e.target.value)}></input></td>
    <td><input type="text" value={lieuRestauration} onChange={(e) => setlieuRestauration(e.target.value)}></input></td>
    <td><input type="text"value={nomRestauration} onChange={(e) => setnomRestauration(e.target.value)}></input></td>
    <td><input type="text"value={typeIntervention} onChange={(e) => settypeIntervention(e.target.value)}></input></td>
    <td><input type="text"value={materiaux} onChange={(e) => setmateriaux(e.target.value)}></input></td>
    <td>
    
    
    
    <button
              className="bt-m"
              type="submit"
              onClick={() =>
                handleUpdateAll()
              }
            >
              Valider
      </button>
    
    </td>
  </tr>
  
</table>



)}










    </div>
  );
}

export default Restaurations;