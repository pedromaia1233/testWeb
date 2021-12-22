import React from "react";
import BannerImage1 from "../assets/introImage1.jpg";
import BannerImage2 from "../assets/home2.jpg";
import BannerImage3 from "../assets/home3.jpg";
import "../styles/Home.css";
import { useEffect, useState } from "react"

function Home() {
  const [counter, setCounter] = useState(1);
  const [selected, setSelected] = useState(BannerImage1);
  const [title, setTitle] = useState("FOTOGRAFIA É POESIA");
  const [subTitle, setSubTitle] = useState("A BELEZA DO MOMENTO IMPORTA");

  const changeBack = (counterAux) =>{ 
    switch (counterAux) {
      case 1:
        setSelected(BannerImage2)
        setTitle("FOTOGRAFIA É AMOR")
        setSubTitle("PARTILHA-A COM QUEM MAIS AMAS")
        setCounter(2)
        break;
      case 2:
        setSelected(BannerImage3)
        setCounter(3)
        setTitle("FOTOGRAFIA É ETERNA")
        setSubTitle("CRIA UMA IMAGEM, ETERNIZA O MOMENTO")
        break;
      case 3:
        setSelected(BannerImage1)
        setCounter(1)
        setTitle("FOTOGRAFIA É POESIA")
        setSubTitle("A BELEZA DO MOMENTO IMPORTA")
        break;
      default:
        break;
    }
  }

  useEffect(()=> {
    setTimeout(() => {changeBack(counter)} , 4000);
  },[counter])

  return (
    <div className="home" >
      <div className="imageContainer" style={{backgroundImage: `url(${selected})` }}>
        <div className="headerContainer">
          <h1> {title} </h1>
          <p> {subTitle}</p>
        </div>
      </div>

      <div className="secondPart">
        <a href="/portfolio" className="logo"> <button><span>VÊ AQUI O MEU PORTÓFOLIO</span></button> </a>
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
