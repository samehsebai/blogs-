import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import "./artistes.css"


function Artistes() {

  const [updateMode, setUpdateMode] = useState(false)

  const [name,setname] = useState()
  const [dateNaiss,setdateNaiss] = useState()
  const [dateDeces,setdateDeces] = useState()
  const [nationalite,setnationalite] = useState()
  const [biographie,setbiographie] = useState()

  const [Artistes, setArtistes] = useState([]);
  const [Artiste, setArtiste] = useState();
  const {search} =useLocation();
  useEffect(() => {
  const Artistedata = async () => {
    const { data } = await axios.get('/artist'+search);
    setArtistes(data);
  }
  Artistedata()
},[search])

const handleDelete = async (id) => {
    await axios.delete(`/artist/${id}`);
    window.location.replace("/artistes")
 };


 const handleUpdate1 = async (id) => {
  try{
  console.log(id)
  const { data } = await axios.get(`/artist/${id}`);
  console.log(data)
  setArtiste(data)

  setname(Artiste.name)
  setdateNaiss(Artiste.dateNaiss)
  setdateDeces(Artiste.dateDeces)
  setnationalite(Artiste.nationalite)
  setbiographie(Artiste.biographie)

  setUpdateMode(true)
} catch (err) {
  console.log("echec")
}
  
};

const handleUpdateAll = async () => {
  await axios.put(`/artist/${Artiste._id}`,{name,dateNaiss,dateDeces,nationalite,biographie})
  //setUpdateMode(false)
  window.location.replace("/artistes")
};


  return (
 <div className='Artistes'>
<div className="writeicon">
<Link className='link' to="/artiste">
<i class="fa-solid fa-plus"></i>
</Link>
</div>

{ !updateMode ? (
<table id="customers">
  <tr>
    <th>name</th>
    <th>date Naiss</th>
    <th>date Deces</th>
    <th>nationalite</th>
    <th>biographie</th>
    <th>Modifier</th>
    <th>Supprimer</th>

  </tr>
  {Artistes.map((art) => (
  <tr>
    <td>{art.name}</td>
    <td>{art.dateNaiss}</td>
    <td>{art.dateDeces}</td>
    <td>{art.nationalite}</td>
    <td>{art.biographie}</td>
    <td>
    
    <i className="singleposteicon" id="first"  onClick={() => handleUpdate1(art._id)} class="fa-solid fa-pen-to-square" ></i>
    
    
    </td>
    <td>
    <i  className="singleposteicon" id="last" onClick={() => handleDelete(art._id)} class="fa-solid fa-delete-left"></i>
    </td>
  </tr>
    

  
      ))}

  
  
</table>):(
  <table id="customers">
  <tr>
    <th>name</th>
    <th>date Naiss</th>
    <th>date Deces</th>
    <th>nationalite</th>
    <th>biographie</th>
    <th>Modifier</th>
    <th>Supprimer</th>

  </tr>

  <tr>
    <td><input type="text" value={name} onChange={(e) => setname(e.target.value)}></input></td>
    <td><input type="text" value={dateNaiss} onChange={(e) => setdateNaiss(e.target.value)}></input></td>
    <td><input type="text" value={dateDeces} onChange={(e) => setdateDeces(e.target.value)}></input></td>
    <td><input type="text" value={nationalite} onChange={(e) => setnationalite(e.target.value)}></input></td>
    <td><input type="text"value={biographie} onChange={(e) => setbiographie(e.target.value)}></input></td>
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

export default Artistes;