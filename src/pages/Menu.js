import React from "react";
import { useEffect, useState } from "react"
import BannerImage from "../assets/portfoliophoto.jpg";
import "../styles/Menu.css";
import {
  featuredPortfolio
} from "../data"

function Menu() {
    //const [selected, setSelected] = useState("retratoF")
    const [data, setData] = useState([])

    useEffect(()=> {
      setData(featuredPortfolio)
  },[])


  return (
    <div className="menu">

      <div className="imageContainer" style={{ backgroundImage: `url(${BannerImage})`}}>
          <div className="headerContainer">
            <h1> PORTFOLIO </h1>
        </div>
      </div>
      <h1 className="menuTitle">BEM-VINDOS</h1>
      <div className="container">
        {data.map(d => (
          (d.title==="Eventos" || d.title === "Retrato Masculino" ?
          <div className="itemMenor">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
            {d.title==="Eventos" &&
            <h4>BATIZADOS | ESTUDANTES | BAILES FINALISTAS</h4>}
          </div> 
          : 
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>)
        ))}
      </div>

    </div>
  );
}

export default Menu;