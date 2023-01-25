import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import "./restaurations.css"


function Restaurations() {

  const [restaurations, setrestaurations] = useState([]);
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
    window.location.replace("/restauration")
 };

  return (
 <div className='restaurations'>
<div className="writeicon">
<Link className='link' to="/restauration">
<i class="fa-solid fa-plus"></i>
</Link>
</div>
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
    <td><i className="singleposteicon" id="first" class="fa-solid fa-pen-to-square" ></i></td>
    <td><i className="singleposteicon" id="last" class="fa-solid fa-delete-left"></i></td>
  </tr>
      ))}

  
  
</table>
    </div>
  );
}

export default Restaurations;