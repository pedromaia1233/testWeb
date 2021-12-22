import React from "react";
import { useEffect, useState } from "react"
import BannerImage from "../assets/portfoliophoto.jpg";
import "../styles/Menu.css";
import {
  featuredPortfolio
} from "../data"

import { useNavigate } from 'react-router-dom';

function Menu() {
    //const [selected, setSelected] = useState("retratoF")
    const [data, setData] = useState([])

    useEffect(()=> {
      setData(featuredPortfolio)
  },[])


  const navigate = useNavigate()
    

  function routeChange (title) {
    var route = "/portfolio/";
    switch (title) {
      case "Retrato Feminino":
        route += "feminino"
        break;
      case "Retrato Intimista":
        route += "intimista"
        break;
      case "Marcas":
        route += "marcas"
        break;
      case "Casais":
        route += "casais"
        break;
      case "Eventos":
        route += "eventos"
        break;
      case "Retrato Masculino":
        route += "masculino"
        break;
      default:
        break;
    }
    navigate(route)
  }

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
          <div className="itemMenor" onClick={() => routeChange.bind(this)(d.title)}>
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
              {d.title==="Eventos" &&
              <h4>BATIZADOS | ESTUDANTES | BAILES FINALISTAS</h4>}
          </div> 
          : 
          <div className="item" onClick={() => routeChange.bind(this)(d.title)}>
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>)
        ))}
      </div>

    </div>
  );
}

export default Menu;