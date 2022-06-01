import "./sidebar.css"
import langages from "../assets/top11.png"
import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
export default function Sidebar() {
    const [cats,setCats] = useState([]);

    useEffect(()=>{
        const getCats = async()=>{
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats();
    },[])
  return (
    <div className="sidebar">
        <div className="sidebaritem">
            <span className="sidebartitle">ABOUT ME</span>
            <img src={langages} alt=""/>
            <p>Blogging is an excellent way to bolster your reputation as a developer. You can share the knowledge you've gained over years of experience, and inspire other developers. The more interesting, useful content you have, the more people will follow you.</p>
        </div>
        <div className="sidebaritem">
            <span className="sidebartitle">CATEGORIES</span>
            <ul className="sidebarliste"> 
            {cats.map((c)=>(
                <Link to={`/?cat=${c.name}`} className="link">
               <li className="sidebarlisteitem">{c.name}</li>
                </Link>
               ))} 
               
            </ul>
        </div>
        <div className="sidebaritem">
            <span className="sidebartitle">FOLOW US</span>
            <div className="sidebarsocial">
            <i className="sidebaricon fa-brands fa-facebook-square"></i>
            <i className="sidebaricon fa-brands fa-twitter"></i> 
            <i className="sidebaricon fa-brands fa-pinterest"></i>
            <i className="sidebaricon fa-brands fa-instagram"></i>
            </div>


        </div>
    </div>
  )
}
