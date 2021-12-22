import React from 'react'
import BannerImage from "../assets/portfoliophoto.jpg";
import "../styles/PortfolioImages.css";


function PortfolioImages({title, featuredPortfolio}) {
    return (
        <div className='portfolioImages'>
            <div className="imageContainer" style={{ backgroundImage: `url(${BannerImage})`}}>
                <div className="headerContainer">
                    <h1> {title} </h1>
                </div>
            </div>

            <div className="container">
                {featuredPortfolio.map(d => (
                    <div className="item" style={{width: d.width, height: d.height}}>
                        <img src={d.img} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PortfolioImages
