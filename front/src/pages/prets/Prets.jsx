import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import "./prets.css"


function Prets() {

  const [prets, setprets] = useState([]);
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
    window.location.replace("/pret")
 };

  return (
 <div className='prets'>
<div className="writeicon">
<Link className='link' to="/pret">
<i class="fa-solid fa-plus"></i>
</Link>
</div>
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
    <td><i className="singleposteicon" id="first" class="fa-solid fa-pen-to-square" ></i></td>
    <td><i className="singleposteicon" id="last" class="fa-solid fa-delete-left"></i></td>
  </tr>
      ))}

  
  
</table>
    </div>
  );
}

export default Prets;