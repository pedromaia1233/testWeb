import React from "react";
import BannerImage from "../assets/contactme.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">

      <div className="imageContainer" style={{ backgroundImage: `url(${BannerImage})`}}>
        <div className="headerContainer">
          <h1> SOBRE MIM </h1>
        </div>
      </div>
      <div className="aboutBottom">
        <div className="left">
          <div className="imgContainer">
              <img src="https://images-pw.pixieset.com/elementfield/56119295/DSC07177-798fcce1.jpg" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
              <h2>
                  Olá, eu sou a Jennifer.
              </h2>
              <p><br /></p>
              <p>
                  A fotografia entrou na minha vida desde muito cedo, porém, ingressei neste mundo no final de 2017. 
                  Desde então que me dedico com todo o amor aquilo que faço. 🥰
              </p>
              <p>
                  Sou fotógrafa especialista em retratos femininos, porém também faço outro tipo de registos que podes encontrar na minha aba "Portfólio".
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
