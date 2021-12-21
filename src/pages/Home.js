import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/introImage1.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" >
      <div className="imageContainer" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1> FOTOGRAFIA É POESIA </h1>
          <p> A BELEZA DO MOMENTO IMPORTA</p>
        </div>
      </div>

      <div className="secondPart">
        <a href="/menu" className="logo"> <button><span>VÊ AQUI O MEU PORTÓFOLIO</span></button> </a>
        <div className="phaseContainer">
          <p> “Para mim, a fotografia é uma arte de observação.
          Trata-se de encontrar algo interessante num lugar comum...
            descobri que isso tem pouco a ver com as coisas que vês, mas tudo a ver com a maneira como as vês.”
          </p>
          <span>- ELLIOTT ERWITT</span>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
