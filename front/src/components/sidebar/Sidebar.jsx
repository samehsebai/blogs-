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
            <span className="sidebartitle">ABOUT US</span>
            <img src={langages} alt=""/>
            <p>a hotel that welcomes visitors from all over the world. “Exhibiting artistic works in a public space would tear down the wall that separates what is inspired from what is concrete. This is what the artists themselves dream of. The latter create a parallel life that Mohamed Amouri has worked to put within everyone's reach. Over time, the one that everyone would like to live. That one can live art, this idea became possible in Hasdrubal.</p>
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
