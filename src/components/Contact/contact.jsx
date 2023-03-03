import React, { useEffect, useState, useRef } from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [lineWidth, setLineWidth] = useState("0vw");
  const [isOnTargetDiv, setIsOnTargetDiv] = useState(true);
  const form = useRef();

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 3200) {
        setLineWidth("20vw");
        setIsOnTargetDiv(true);
      } else if (isOnTargetDiv) {
        setLineWidth("0vw");
        setIsOnTargetDiv(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOnTargetDiv]);

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_1lynk3i', 'template_l7x8s56', e.target, 'sVsj_7QNcD8a-Qu0V')
    .then((result) => {
    console.log(result.text);
    }, (error) => {
    console.log(error.text);
    });
    }

  return (
    <>
      <span id="contact-anchor"></span>
      <div className="general-title">
        <h1>CONTACT</h1>
        <div className="line" style={{ width: lineWidth }} />
      </div>
      <div className="contact-container">
        <div className="contact-intro">
          <p>
            N'hésitez pas à me contacter, je vous répondrai dans les plus brefs
            délais.
          </p>
        </div>
        <form className="contact-form" onSubmit={sendEmail} ref={form}>
            <input name="name" type="text" className="feedback-input" placeholder="Nom"/>
            <input name="email" type="text" className="feedback-input" placeholder="Email"/>
            <textarea type="text" name="message" className="contact-textarea" placeholder="Votre message..."/>
            <input type="submit" className="submit-form-btn" value="Envoyer" />
        </form>
      </div>
    </>
  );
};

export default Contact;
