import React from 'react'
import BannerImage from "../assets/portfoliophoto.jpg";
import { useEffect, useState } from "react"
import "../styles/PortfolioImages.css";
import {
    featuredPortfolio
  } from "../data"

import { useNavigate } from 'react-router-dom';

function PortfolioImages({title, featuredPortfolioAux}) {
    const [data, setData] = useState(featuredPortfolio)

    useEffect(()=> {
        console.log(title);
        switch (title) {
            case "Retrato Feminino":
                setData([featuredPortfolio[1],featuredPortfolio[3] ,featuredPortfolio[5]])
                break;
            case "Retrato Intimista":
                setData([featuredPortfolio[0],featuredPortfolio[2] ,featuredPortfolio[3]])
                break;
            case "Marcas":
                setData([featuredPortfolio[1],featuredPortfolio[3] ,featuredPortfolio[5]])
                break;
            case "Casais":
                setData([featuredPortfolio[0],featuredPortfolio[1] ,featuredPortfolio[5]])
                break;
            case "Eventos":
                setData([featuredPortfolio[1],featuredPortfolio[2] ,featuredPortfolio[5]])
                break;
            case "Retrato Masculino":
                setData([featuredPortfolio[1],featuredPortfolio[0] ,featuredPortfolio[3]])
                break;
          default:
              break;
      }
    },[title])


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
        <div className='portfolioImages'>
            <div className="imageContainer" style={{ backgroundImage: `url(${BannerImage})`}}>
                <div className="headerContainer">
                    <h1> {title} </h1>
                </div>
            </div>

            <div className="containerImages">
                {featuredPortfolioAux.map(d => (
                    <div className="itemShow" style={{width: d.width, height: d.height}}>
                        <img src={d.img} alt="" />
                    </div>
                ))}
            </div>
            
            <h4 className="menuTitleAdd">Vê mais aqui:</h4>
            <div className="containerAdd">
                {data.map(d => (
                <div className="item" onClick={() => routeChange.bind(this)(d.title)}>
                    <img src={d.img} alt="" />
                    <h3>{d.title}</h3>
                </div>))}
            </div>

        </div>
    )
}

export default PortfolioImages
