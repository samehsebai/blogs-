import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import "./expositions.css"


function Expositions() {

  const [Expositions, setExpositions] = useState([]);
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
    window.location.replace("/exposition")
 };

  return (
 <div className='Expositions'>
<div className="writeicon">
<Link className='link' to="/exposition">
<i class="fa-solid fa-plus"></i>
</Link>
</div>
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
    <td><i className="singleposteicon" id="first" class="fa-solid fa-pen-to-square" ></i></td>
    <td><i className="singleposteicon" id="last" class="fa-solid fa-delete-left"></i></td>
  </tr>
      ))}

  
  
</table>
    </div>
  );
}

export default Expositions;