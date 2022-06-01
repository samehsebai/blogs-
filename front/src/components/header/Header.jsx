import "./header.css"
import h1 from "../assets/h1.jpg"
export default function Header() {
  return (
    <div className='header'>
      <div className="headertitles">
        <span className="headertitlel">Programming Languages</span>
        <span className="headertitleb">blog</span>

      </div>
      <img className="headerimg" src={h1} alt=""/>
    </div>
  )
}
