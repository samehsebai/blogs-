import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import "./signatures.css"


function Signatures() {

  const [signatures, setsignatures] = useState([]);
  const {search} =useLocation();
  useEffect(() => {
  const signaturesdata = async () => {
    const { data } = await axios.get('/signature'+search);
    setsignatures(data);
  }
  signaturesdata()
},[search])
const handleDelete = async (id) => {
    await axios.delete(`/signature/${id}`);
    window.location.replace("/signatures")
 };

  return (
 <div className='signatures'>
<div className="writeicon">
<Link className='link' to="/signature">
<i class="fa-solid fa-plus"></i>
</Link>
</div>
<table id="customers">
  <tr>
    <th>localisationOeuvre</th>
    <th>dec</th>
    <th>Modifier</th>
    <th>Supprimer</th>
  </tr>
  {signatures.map((art) => (
  <tr>
    <td>{art.localisationOeuvre}</td>
    <td>{art.dec}</td>
    <td><i clasName="singleposteicon" id="first" clas="fa-solid fa-pen-to-square" ></i></td>
    <td><i clasName="singleposteicon" id="last" clas="fa-solid fa-delete-left"></i></td>
  </tr>
      ))}

  
  
</table>
    </div>
  );
}

export default Signatures;