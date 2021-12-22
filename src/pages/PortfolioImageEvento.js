import React from 'react'
import BannerImage from "../assets/portfoliophoto.jpg";
import "../styles/PortfolioImageEvento.css";
import ImageSlider from "../components/ImageSlider"
import { SliderData } from '../data';

function PortfolioImages({title, featuredPortfolio}) {
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
        </div>
    )
}

export default PortfolioImages
