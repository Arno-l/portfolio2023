import React, {useState} from "react";
import "./contact.css";
import { useAtomValue } from "jotai";
import { activeTabAtom } from "../../store/atoms";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

const Contact = () => {

  const [isHovered, setIsHovered] = useState(false);
  const activeTab = useAtomValue(activeTabAtom);

  const handleMouseEnter = () => {
      setIsHovered(true);
  };

  const handleMouseLeave = () => {
      setIsHovered(false);
  };




  function successNotify() {
    toast.success("Message envoyé 📬", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  }

  function errorNameNotify() {
    toast.error("Il manque votre nom !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  }

  function errorMailNotify() {
    toast.error("Il manque votre adresse e-mail ou le format n'est pas bon !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  }

  function errorMessageNotify() {
    toast.error("Le message ne peut pas être vide !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  }
  

  function sendEmail(e) {
    e.preventDefault();
    let name = e.target.elements.name.value;
    let email = e.target.elements.email.value;
    let message = e.target.elements.message.value;
  
    if (!name) {
      errorNameNotify();
      return;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      errorMailNotify();
      return;
    }
    if (!message) {
      errorMessageNotify();
      return;
    }
  
    emailjs.sendForm('service_1lynk3i', 'template_l7x8s56', e.target, 'sVsj_7QNcD8a-Qu0V')
    .then((result) => {
    console.log(result.text);
    successNotify();
    e.target.reset();
    }, (error) => {
    console.log(error.text);
    });
    }

  return (
    <>
      <span id="contact-anchor"></span>
      <div className={`general-title ${activeTab === 2 ? 'text-light' : ''}`}>
        <h1>CONTACT</h1>
        <div className={`line ${isHovered ? 'visible' : ''}`} />
      </div>
      <div className="contact-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
        <div className={`contact-intro ${activeTab === 2 ? 'text-light' : ''}`}>
          <p>
            N'hésitez pas à me contacter, je vous répondrai dans les plus brefs
            délais.
          </p>
        </div>
        <form className="contact-form" onSubmit={sendEmail}>
            <input name="name" type="text" className={`feedback-input ${activeTab === 2 ? 'text-light' : ''}`} placeholder="Nom"/>
            <input name="email" type="text" className={`feedback-input ${activeTab === 2 ? 'text-light' : ''}`} placeholder="Email"/>
            <textarea type="text" name="message" className={`contact-textarea ${activeTab === 2 ? 'text-light' : ''}`} placeholder="Votre message..."/>
            <input type="submit" className="submit-form-btn" value="Envoyer" />
        </form>
      </div>
    </>
  );
};

export default Contact;
