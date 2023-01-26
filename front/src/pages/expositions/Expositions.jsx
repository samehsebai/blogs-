import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import "./expositions.css"


function Expositions() {
  const [updateMode, setUpdateMode] = useState(false)

  const [containtes,setcontaintes] = useState()
    const [titre,settitre] = useState()
    const [lieu,setlieu] = useState()
    const [date,setdate] = useState()

  const [Expositions, setExpositions] = useState([]);
  const [Exposition, setExposition] = useState();
  const {search} =useLocation();
  useEffect(() => {
  const Expositiondata = async () => {
    const { data } = await axios.get('/exposition'+search);
    setExpositions(data);
  }
  Expositiondata()
},[search])

const handleDelete = async (id) => {
    await axios.delete(`/exposition/${id}`);
    window.location.replace("/expositions")
 };

 const handleUpdate1 = async (id) => {
  try{
  console.log(id)
  const { data } = await axios.get(`/exposition/${id}`);
  console.log(data)
  setExposition(data)

  setcontaintes(Exposition.containtes)
  settitre(Exposition.titre)
  setlieu(Exposition.lieu)
  setdate(Exposition.date)

  setUpdateMode(true)
} catch (err) {
  console.log("echec")
}
  
};

const handleUpdateAll = async () => {
  await axios.put(`/exposition/${Exposition._id}`,{containtes,titre,lieu,date})
  //setUpdateMode(false)
  window.location.replace("/expositions")
};



  return (
<div className='Expositions'>
<div className="writeicon">
<Link className='link' to="/exposition">
<i class="fa-solid fa-plus"></i>
</Link>
</div>
{ !updateMode ? (
<table id="customers">
  <tr>
    <th>containtes</th>
    <th>titre</th>
    <th>lieu</th>
    <th>date</th>
    <th>Modifier</th>
    <th>Supprimer</th>
  </tr>
  {Expositions.map((art) => (
  <tr>
    <td>{art.containtes}</td>
    <td>{art.titre}</td>
    <td>{art.lieu}</td>
    <td>{art.date}</td>
    <td><i className="singleposteicon" id="first" onClick={() => handleUpdate1(art._id)} class="fa-solid fa-pen-to-square" ></i></td>
    <td><i className="singleposteicon" id="last" onClick={() => handleDelete(art._id)} class="fa-solid fa-delete-left"></i></td>
  </tr>
      ))}
    </table>
):(
  <table id="customers">
  <tr>
  <th>containtes</th>
    <th>titre</th>
    <th>lieu</th>
    <th>date</th>
    <th>Modifier</th>
    <th>Supprimer</th>
  </tr>
  <tr>
    <td><input type="text" value={containtes} onChange={(e) => setcontaintes(e.target.value)}></input></td>
    <td><input type="text" value={titre} onChange={(e) => settitre(e.target.value)}></input></td>
    <td><input type="text" value={lieu} onChange={(e) => setlieu(e.target.value)}></input></td>
    <td><input type="text" value={date} onChange={(e) => setdate(e.target.value)}></input></td>
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
)
}

export default Expositions;