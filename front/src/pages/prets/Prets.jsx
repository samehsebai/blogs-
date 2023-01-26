import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import "./prets.css"


function Prets() {
  const [updateMode, setUpdateMode] = useState(false)

  const [institution,setinstitution] = useState()
  const [nomExposition,setnomExposition] = useState()
  const [dateDepart,setdateDepart] = useState()
  const [DateRetour,setDateRetour] = useState()

  const [prets, setprets] = useState([]);
  const [pret, setpret] = useState();
  const {search} =useLocation();
  useEffect(() => {
  const pretdata = async () => {
    const { data } = await axios.get('/pret'+search);
    setprets(data);
  }
  pretdata()
},[search])
const handleDelete = async (id) => {
    await axios.delete(`/pret/${id}`);
    window.location.replace("/prets")
 };

 const handleUpdate1 = async (id) => {
  try{
  console.log(id)
  const { data } = await axios.get(`/pret/${id}`);
  console.log(data)
  setpret(data)

  setinstitution(pret.institution)
  setnomExposition(pret.nomExposition)
  setdateDepart(pret.dateDepart)
  setDateRetour(pret.DateRetour)

  setUpdateMode(true)
} catch (err) {
  console.log("echec")
}
  
};

const handleUpdateAll = async () => {
  await axios.put(`/pret/${pret._id}`,{institution,nomExposition,dateDepart,DateRetour})
  //setUpdateMode(false)
  window.location.replace("/prets")
};


  return (
 <div className='prets'>
<div className="writeicon">
<Link className='link' to="/pret">
<i class="fa-solid fa-plus"></i>
</Link>
</div>
{ !updateMode ? (
<table id="customers">
  <tr>
    <th>institution</th>
    <th>nom Exposition</th>
    <th>date Depart</th>
    <th>Date Retour</th>
    <th>Modifier</th>
    <th>Supprimer</th>
  </tr>
  {prets.map((art) => (
  <tr>
    <td>{art.institution}</td>
    <td>{art.nomExposition}</td>
    <td>{art.dateDepart}</td>
    <td>{art.DateRetour}</td>
    <td><i className="singleposteicon" id="first" class="fa-solid fa-pen-to-square" onClick={() => handleUpdate1(art._id)}></i></td>
    <td><i className="singleposteicon" id="last" class="fa-solid fa-delete-left" onClick={() => handleDelete(art._id)}></i></td>
  </tr>
      ))}

  
  
</table>):(
  <table id="customers">
  <tr>
    <th>institution</th>
    <th>nom Exposition</th>
    <th>date Depart</th>
    <th>Date Retour</th>
    <th>Modifier</th>
    <th>Supprimer</th>
  </tr>
  <tr>
    <td><input type="text" value={institution} onChange={(e) => setinstitution(e.target.value)}></input></td>
    <td><input type="text" value={nomExposition} onChange={(e) => setnomExposition(e.target.value)}></input></td>
    <td><input type="text" value={dateDepart} onChange={(e) => setdateDepart(e.target.value)}></input></td>
    <td><input type="text" value={DateRetour} onChange={(e) => setDateRetour(e.target.value)}></input></td>
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

export default Prets;