import { useState } from "react"
import "./headerNote.css"
import { Link } from "react-router-dom"

const HeaderNote = () => {

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
        <Link to="/clocks"><a>Relógios</a></Link>
        <Link to="/cell"><a>Celulares</a></Link>
        <Link to="/notebooks"><a className="a-active">Notebooks</a></Link>
      </div>
      <div className="dark-mode">
        <span className="activeDark" onClick={activeDark}><button className="btn-active"><img src={active} alt="" /></button></span>
      </div>

    </header>
  );
}

export default HeaderNote
