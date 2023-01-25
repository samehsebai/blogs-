import './topBar.css';
import logo from "../assets/profil.png"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';
export default function TopBar()
{
  const {user,dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const handleLogout = () =>{
    dispatch({type:"LOGOUT"})
  }
    return(
        <div className="top">
          <div className="topleft">
          <i className="toplefticon fa-brands fa-facebook-square"></i>
          <i className="toplefticon fa-brands fa-twitter"></i> 
          <i className="toplefticon fa-brands fa-pinterest"></i>
          <i className="toplefticon fa-brands fa-instagram"></i>
          </div>  
          <div className="topcenter">
            <ul className="toplist">
              <li className="toplistitem">
                <Link className='link' to="/">HOME</Link>
              </li>
              <li className="toplistitem">
              <Link className='link' to="/write">OEUVRE</Link>
              </li>
              <li className="toplistitem">
              <Link className='link' to="/artistes">{user && "ARTISTES"}</Link>
              </li>
              <li className="toplistitem">
              <Link className='link' to="/bibliographies">{user && "BIBLIOGRAPHIES"}</Link>
              </li>
              <li className="toplistitem">
              <Link className='link' to="/expositions">{user && "EXPOSITIONS"}</Link>
              </li><
                li className="toplistitem">
              <Link className='link' to="/prets">{user && "PRETS"}</Link>
              </li>
              <li className="toplistitem">
              <Link className='link' to="/restaurations">{user && "RESTAURATIONS"}</Link>
              </li>
              <li className="toplistitem">
              <Link className='link' to="/signatures">{user && "SIGNATURES"}</Link>
              </li>
              <li className="toplistitem" onClick={handleLogout}>
                {user && "LOGOUT"}
              </li>
            </ul>
          </div>  
          <div className="topright">
           
            {
              user ? (
                <Link to="/setting">
                <img className='topimg' src={PF+user.profilpic} alt=""/>
                </Link>
              ): (
                <ul className='toplist'>
                  <li className='toplistitem'>
                <Link className='link' to="/login">LOGIN</Link>
                  </li>
                  <li className='toplistitem'>
                <Link className='link' to="/register">REGISTER</Link>
                </li>
                </ul>
              )
            }
            <i className="topsearchicon fa-solid fa-magnifying-glass"></i>
          </div>  

        </div>
    )
}