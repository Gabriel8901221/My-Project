import { useState } from "react"
import "./headerCell.css"
import { Link } from "react-router-dom"

const HeaderCell = () => {

  const [active, setActive] = useState("./sun.svg")

  const body = document.querySelector("body")

  const activeDark = () =>{
    body.classList.toggle("dark")

    if(body.className === "dark"){
      setActive("./moon-stars.svg")
    } else{
      setActive("./sun.svg")
    }
  }

  return (
    <header className="container">
      <p>Coder Marketing</p>
      <div className="categories">
        <Link to="/"><a >Tênis</a></Link>
        <Link to="/clocks"><a>Relogios</a></Link>
        <Link to="/cell"><a className="a-active" >Celulares</a></Link>
        <Link to="/notebooks"><a  >Notebooks</a></Link>
      </div>
      <div className="dark-mode">
        <span className="activeDark" onClick={activeDark}><button className="btn-active"><img src={active} alt="" /></button></span>
      </div>

    </header>
  );
}

export default HeaderCell;
