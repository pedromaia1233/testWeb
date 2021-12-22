import React, { useState } from "react";
import "../styles/Contact.css";
import BannerImage from "../assets/contactme.jpg";
import { useNavigate } from 'react-router-dom';
import emailjs from "emailjs-com";

function Contact() {
  const [message, setMessage] = useState(false);
  const navigate = useNavigate()

  const SERVICE_ID = "service_zql439p";
  const TEMPLATE_ID = "template_kslxc2r";
  const USER_ID = "user_r3dhsYANHtp7dxNJuQaXD";

  const afterSubmit = () =>{ 
    setMessage(false);
    navigate("/");
  }


  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text); 
      });
    e.target.reset()
    setMessage(true);
    setTimeout(() => {afterSubmit()} , 2000);
  };

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
        <form id="contact-form" method="POST" onSubmit={handleOnSubmit}>
          <label htmlFor="name" >NOME: *</label>
          <input name="name"  type="text" required />
          <label htmlFor="email" >E-mail *</label>
          <input name="email" type="email" required />
          <label htmlFor="message">O que te leva a fazer a sessão fotográfica?  </label>
          <textarea
            rows="6"
            name="message"
          ></textarea>
          <label htmlFor="name">Qual a dispibilidade/data requerida? *</label>
          <input name="disponibilidade"  type="text" />
          <button type="submit"> Enviar</button>
          {message && <span>Enviado com sucesso</span>}
        </form>
      </div>
    </div>
  );
}

export default Contact;