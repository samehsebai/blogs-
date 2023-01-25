import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import "./bibliographies.css"


function Bibliographies() {

  const [Bibliographies, setBibliographies] = useState([]);
  const {search} =useLocation();
  useEffect(() => {
  const Bibliographiedata = async () => {
    const { data } = await axios.get('/bibliographie'+search);
    setBibliographies(data);
  }
  Bibliographiedata()
},[search])
const handleDelete = async (id) => {
    await axios.delete(`/artist/${id}`);
    window.location.replace("/artist")
 };

  return (
 <div className='Bibliographies'>
<div className="writeicon">
<Link className='link' to="/bibliographie">
<i class="fa-solid fa-plus"></i>
</Link>
</div>
<table id="customers">
  <tr>
    <th>publication</th>
    <th>titre Ouvrage</th>
    <th>nom Auteur</th>
    <th>date Publication</th>
    <th>page</th>
    <th>editeur</th>
    <th>modifier</th>
    <th>supprimer</th>

  </tr>
  {Bibliographies.map((art) => (
  <tr>
    <td>{art.publication}</td>
    <td>{art.titreOuvrage}</td>
    <td>{art.nomAuteur}</td>
    <td>{art.datePublication}</td>
    <td>{art.page}</td>
    <td>{art.editeur}</td>
    <td><i className="singleposteicon" id="first" class="fa-solid fa-pen-to-square" ></i></td>
    <td><i className="singleposteicon" id="last" class="fa-solid fa-delete-left"></i></td>
  </tr>
      ))}

  
  
</table>
    </div>
  );
}

export default Bibliographies;