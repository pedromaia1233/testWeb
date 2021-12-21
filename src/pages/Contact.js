import React from "react";
import "../styles/Contact.css";
import BannerImage from "../assets/contactme.jpg";

function Contact() {
  return (
    <div className="contact">
      <div className="imageContainer" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1> CONTACTA-ME </h1>
          <p> A TUA HISTÓRIA COMEÇA AGORA</p>
        </div>
      </div>

      <div className="firstPart">
          <h2> Vamos tratar por começar a tua história </h2>
          <p> Preenche os espaços em baixo por forma a poder indicar-te as melhores opções para a tua experiência. Obrigada desde já pela preferência.</p>
      </div>

      <div className="rightSide"> 
        <form id="contact-form" method="POST">
          <label htmlFor="name">NOME: *</label>
          <input name="name"  type="text" />
          <label htmlFor="email">E-mail *</label>
          <input name="email" type="email" />
          <label htmlFor="message">O que te leva a fazer a sessão fotográfica? </label>
          <textarea
            rows="6"
            name="message"
            required
          ></textarea>
          <label htmlFor="name">Qual a dispibilidade/data requerida? *</label>
          <input name="name"  type="text" />
          <button type="submit"> Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;