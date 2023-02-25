import React from "react";
import "./projectDetails.css";
import imgTest from "../../assets/images/a.lcci.png";

const ProjectDetails = () => {
  return (
    <>
      <div className="project-details">
        <div className="project-logo-container">
            <img className="project-logo" src={imgTest} alt="project logo"/>
        </div>
        <div className="project-infos">
          <div className="project-section">
            <h5 className="project-section-title">INFOS PROJET</h5>
            <p className="project-text">Mon portfolio qui contient des informations à propos de moi, mes compétences ainsi que des exemples de projets réalisés. Vous êtes actuellement sur ce site</p>
          </div>
          <div className="project-section">
            <h5 className="project-section-title">RÉALISATION COMPLÈTE</h5>
            <ul className="project-text">
              <li>Développement sous React.js</li>  
              <li>Référencement naturel SEO</li>
              <li>Site responsive (compatible tous supports)</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
