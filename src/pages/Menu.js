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
    const [data, setData] = useState(featuredPortfolio)

    useEffect(()=> {
      const dataAux = localStorage.getItem('tipos-retratos');
      if(dataAux)
        setData(JSON.parse(dataAux))
    },[])

    useEffect(()=> {
      localStorage.setItem('tipos-retratos', JSON.stringify(data))
    })


  const navigate = useNavigate()
    

  function routeChange (title) {
    var route = "/portfolio/";
    switch (title) {
      case "RETRATO FEMININO":
        route += "feminino"
        break;
      case "RETRATO INTIMISTA":
        route += "intimista"
        break;
      case "MARCAS":
        route += "marcas"
        break;
      case "CASAIS":
        route += "casais"
        break;
      case "EVENTOS":
        route += "eventos"
        break;
      case "RETRATO MASCULINO":
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
          (d.title==="EVENTOS" || d.title === "RETRATO MASCULINO" ?
          <div className="itemMenor" onClick={() => routeChange.bind(this)(d.title)}>
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
              {d.title==="EVENTOS" && 
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