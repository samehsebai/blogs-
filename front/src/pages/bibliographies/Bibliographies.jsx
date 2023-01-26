import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import "./bibliographies.css"


function Bibliographies() {
  const [updateMode, setUpdateMode] = useState(false)


  const [publication,setpublication] = useState()
  const [titreOuvrage,settitreOuvrage] = useState()
  const [nomAuteur,setnomAuteur] = useState()
  const [datePublication,setdatePublication] = useState()
  const [page,setpage] = useState()
  const [editeur,setediteur] = useState()

  const [Bibliographies, setBibliographies] = useState([]);
  const [Bibliographie, setBibliographie] = useState();
  const {search} =useLocation();
  useEffect(() => {
  const Bibliographiedata = async () => {
    const { data } = await axios.get('/bibliographie'+search);
    setBibliographies(data);
  }
  Bibliographiedata()
},[search])
const handleDelete = async (id) => {
  await axios.delete(`/bibliographie/${id}`);
  window.location.replace("/bibliographies")
};const handleUpdate1 = async (id) => {
  try{
  console.log(id)
  const { data } = await axios.get(`/bibliographie/${id}`);
  console.log(data)
  setBibliographie(data)
  setpublication(Bibliographie.publication)
  settitreOuvrage(Bibliographie.titreOuvrage)
  setnomAuteur(Bibliographie.nomAuteur)
  setdatePublication(Bibliographie.datePublication)
  setpage(Bibliographie.page)
  setediteur(Bibliographie.editeur)
  setUpdateMode(true)
} catch (err) {
  console.log("echec")
}
  
};

const handleUpdateAll = async () => {
  await axios.put(`/bibliographie/${Bibliographie._id}`,{publication,titreOuvrage,nomAuteur,datePublication,page,editeur})
  //setUpdateMode(false)
  window.location.replace("/bibliographies")
};


  return (
 <div className='Bibliographies'>
<div className="writeicon">
<Link className='link' to="/bibliographie">
<i class="fa-solid fa-plus"></i>
</Link>
</div>
{ !updateMode ? (
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
    <td><i className="singleposteicon" id="first" onClick={() => handleUpdate1(art._id)} class="fa-solid fa-pen-to-square" ></i></td>
    <td><i className="singleposteicon" id="last" onClick={() => handleDelete(art._id)} class="fa-solid fa-delete-left"></i></td>
  </tr>
      ))}

  
  
</table>
):(
  <table id="customers">
  <tr>
  <th>publication</th>
    <th>titre Ouvrage</th>
    <th>nom Auteur</th>
    <th>date Publication</th>
    <th>page</th>
    <th>editeur</th>
    <th>modifier</th>
  </tr>
  <tr>
    <td><input type="text" value={publication} onChange={(e) => setpublication(e.target.value)}></input></td>
    <td><input type="text" value={titreOuvrage} onChange={(e) => settitreOuvrage(e.target.value)}></input></td>
    <td><input type="text" value={nomAuteur} onChange={(e) => setnomAuteur(e.target.value)}></input></td>
    <td><input type="text" value={datePublication} onChange={(e) => setdatePublication(e.target.value)}></input></td>
    <td><input type="text" value={page} onChange={(e) => setpage(e.target.value)}></input></td>
    <td><input type="text" value={editeur} onChange={(e) => setediteur(e.target.value)}></input></td>
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

export default Bibliographies;
