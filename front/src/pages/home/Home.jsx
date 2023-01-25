import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Postes from "../../components/postes/Postes";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from 'axios'
import { useLocation } from "react-router-dom";
import Search from "../../Search";
export default function Home() {
  const [postes,setPostes] = useState([]);
  const {search} =useLocation();

  useEffect(()=>{
    const fetchPostes = async()=>{
    const res = await axios.get('/postes'+search)
    setPostes(res.data)
    }
    fetchPostes()
  },[search])
  return (
    <>
    <Header/>

    <div className="home">
      <Postes postes={postes}/>
      <Sidebar/>
    </div>
    </>
  )
}
