import React, { useEffect, useState } from "react";
import "./contact.css";

const Contact = () => {
  const [lineWidth, setLineWidth] = useState("0vw");
  const [isOnTargetDiv, setIsOnTargetDiv] = useState(true);

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
        <form className="contact-form">
            <input name="name" type="text" className="feedback-input" placeholder="Nom"/>
            <input name="email" type="text" className="feedback-input" placeholder="Email"/>
            <textarea type="text" name="contact-textarea" className="contact-textarea" placeholder="Votre message..."/>
        </form>
      </div>
    </>
  );
};

export default Contact;
