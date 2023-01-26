import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import "./signatures.css"


function Signatures() {

  const [updateMode, setUpdateMode] = useState(false)

  const [localisationOeuvre,setlocalisationOeuvre] = useState("")
  const [dec,setdec] = useState("")
  const [signatures, setsignatures] = useState([]);
  const [signature, setsignature] = useState();
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

 const handleUpdate1 = async (id) => {
  try{
  console.log(id)
  const { data } = await axios.get(`/signature/${id}`);
  console.log(data)
  setsignature(data)

  setlocalisationOeuvre(signature.localisationOeuvre)
  setdec(signature.dec)

  setUpdateMode(true)
} catch (err) {
  console.log("echec")
}
  
};

const handleUpdateAll = async () => {
  await axios.put(`/signature/${signature._id}`,{localisationOeuvre,dec})
  //setUpdateMode(false)
  window.location.replace("/signatures")
};

  return (
 <div className='signatures'>
<div className="writeicon">
<Link className='link' to="/signature">
<i class="fa-solid fa-plus"></i>
</Link>
</div>
{ !updateMode ? (
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
    <td><i clasName="singleposteicon" id="first" onClick={() => handleUpdate1(art._id)} class="fa-solid fa-pen-to-square" ></i></td>
    <td><i clasName="singleposteicon" id="last" onClick={() => handleDelete(art._id)} class="fa-solid fa-delete-left"></i></td>
  </tr>
      ))}

  
  
</table>):(
  <table id="customers">
  <tr>
  <th>localisationOeuvre</th>
    <th>dec</th>
    <th>Modifier</th>
    <th>Supprimer</th>
  </tr>
  <tr>
    <td><input type="text" value={localisationOeuvre} onChange={(e) => setlocalisationOeuvre(e.target.value)}></input></td>
    <td><input type="text" value={dec} onChange={(e) => setdec(e.target.value)}></input></td>
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

export default Signatures;