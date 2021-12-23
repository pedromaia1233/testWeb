import React from 'react'
import BannerImage from "../assets/portfoliophoto.jpg";
import "../styles/PortfolioImageEvento.css";
import ImageSlider from "../components/ImageSlider"
import { SliderData } from '../data';
import { useEffect, useState } from "react"
import {
    featuredPortfolio
  } from "../data"

import { useNavigate } from 'react-router-dom';


function PortfolioImages({title, featuredPortfolioAux}) {

    const [data, setData] = useState(featuredPortfolio)

    useEffect(()=> {
        setData([featuredPortfolio[1],featuredPortfolio[2] ,featuredPortfolio[5]])
    },[])

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
        <div className='portfolioImageEvento'>
            <div className="imageContainer" style={{ backgroundImage: `url(${BannerImage})`}}>
                <div className="headerContainer">
                    <h1> {title} </h1>
                </div>
            </div>

            <div className='itemSlider'>
                <div className="title">
                    <h1>BAPTIZADOS</h1>
                </div>
                <ImageSlider slides={SliderData}></ImageSlider>
            </div>
            <div className='itemSlider'>
                <div className="title">
                    <h1>ESTUDANTES</h1>
                </div>
                <ImageSlider slides={SliderData}></ImageSlider>
            </div>
            <div className='itemSlider'>
                <div className="title">
                    <h1>BAILES FINALISTAS</h1>
                </div>
                <ImageSlider slides={SliderData}></ImageSlider>
            </div>

            <h4 className="menuTitleAddEvent">Vê mais aqui:</h4>
            <div className="containerAddEvent">
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
