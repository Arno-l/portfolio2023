import React, { useState, useEffect } from "react";
import { useSetAtom } from "jotai";
import { projectLogoAtom, projectNumberAtom, projectInfoAtom, fullRealizationAtom } from "../../store/atoms";
import "./projects.css";
import portfolioScreen from "../../assets/images/portfolio-screen.png";
import clvScreen from "../../assets/images/clv-screen.png";
import scoreitScreen from "../../assets/images/scoreit-screen.png";
import htmlLogo from "../../assets/images/html5.png";
import cssLogo from "../../assets/images/css3.png";
import javascriptLogo from "../../assets/images/js.png";
import reactLogo from "../../assets/images/react.png";
import pgLogo from "../../assets/images/pg.png";
import sassLogo from "../../assets/images/sass.png";
import rubyLogo from "../../assets/images/skills-ruby.png";
import railsLogo from "../../assets/images/rails.png";
import plusLogo from "../../assets/images/+.png";
import portfolioLogo from "../../assets/images/a.lcci.png";
import assocLogo from "../../assets/images/logo-assoc.png";
import scoreitLogo from "../../assets/images/scoreit-logo.png";

const Projects = () => {


  const [lineWidth, setLineWidth] = useState("0vw");
  const [isOnTargetDiv, setIsOnTargetDiv] = useState(true);
  const setProjectLogo = useSetAtom(projectLogoAtom);
  const setProjectNumber = useSetAtom(projectNumberAtom);
  const setProjectInfo = useSetAtom(projectInfoAtom);
  const setFullRealization = useSetAtom(fullRealizationAtom);

  function handleDetails(number) {
    switch(number) {
      case 1:
        setProjectLogo(portfolioLogo);
        setProjectNumber(1);
        setProjectInfo("Mon portfolio qui contient des informations à propos de moi, mes compétences ainsi que des exemples de projets réalisés. Vous êtes actuellement sur ce site.");
        setFullRealization(["Développement sous React.js", "Référencement naturel SEO", "Site responsive (compatible tous supports)"]);
        break;
      case 2:
        setProjectLogo(assocLogo);
        setProjectNumber(2);
        setProjectInfo("Un site web vitrine crée pour une association de chant choral dans le cadre de mon stage de la fin de formation à The Hacking Project.");
        setFullRealization(["Frontend avec React.js", "Backend avec Ruby on Rails et Postgresql", "Authentification via JWT (Json Web Tokens)", "Hébergement des médias sur Cloudinary", "Mise à l'échelle de la BDD avec Fly.io", "Référencement naturel SEO", "Site responsive (compatible tous supports)"]);
        break;
      case 3:
        setProjectLogo(scoreitLogo);
        setProjectNumber(3);
        setProjectInfo("Une plateforme crée en équipe lors de ma formation The Hacking Project qui permet aux fondateurs de start-up d'obtenir une notation sur leur projet.");
        setFullRealization(["App Ruby on Rails", "Utilisation d'AJAX pour la performance", "Utilisation de OmniAuth pour faciliter l'identification", "Utilisation de Bootstrap", "Hébergement des médias sur AWS (Amazon Web Services)", "Référencement naturel SEO", "Site responsive (compatible tous supports)"]);
        break;
      default:
        setProjectLogo(null);
        break;
    }
  }

  useEffect(() => {
    function handleScroll() {
      if (window.innerWidth < 440 && window.scrollY > 3600) {
        setLineWidth("20vw");
        setIsOnTargetDiv(true);
      } else if ((window.innerWidth > 900 && window.innerWidth < 1200) && window.scrollY > 2000 && window.scrollY < 4400) {
        setLineWidth("20vw");
        setIsOnTargetDiv(true);
       } else if ((window.innerWidth > 1200 && window.innerWidth < 2000) && window.scrollY > 1700 && window.scrollY < 4000) {
        setLineWidth("20vw");
        setIsOnTargetDiv(true);
       } else if (window.innerWidth > 2000 && window.scrollY > 1400 && window.scrollY < 3500) {
        setLineWidth("20vw");
        setIsOnTargetDiv(true);
      } else if (window.innerWidth > 440 && window.scrollY > 2300 && window.scrollY < 4400) {
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

  function activePopup() {
    document.getElementsByClassName("project-details")[0].style.display =
      "flex";
    document.getElementsByClassName("greying")[0].style.opacity = "0.3";
    document.getElementsByClassName("greying")[0].style.backgroundColor =
      "#484a4a";
  }


  return (
    <>
      <div className="general-title">
        <h1>PROJETS</h1>
        <div className="line" style={{ width: lineWidth }} />
      </div>
      <div className="projects-container">
        <div className="project-cards">
          <div className="project-card" onClick={() => {activePopup(); handleDetails(1)}}>
            <img
              className="screenshot"
              src={portfolioScreen}
              alt="portfolio screenshot"
            />
            <div className="project-title-container">
              <h1 className="project-title">Mon site web</h1>
              <p className="project-techno-title">Technologies</p>
              <div className="project-line"></div>
              <div className="technos-container">
                <img className="techno-logo" src={htmlLogo} alt="html5"/>
                <img className="techno-logo" src={cssLogo} alt="css3"/>
                <img className="techno-logo" src={javascriptLogo} alt="javascript"/>
                <img className="techno-logo" src={reactLogo} alt="react"/>
              </div>
              <div className="project-btn">
                <img className="plus-logo" src={plusLogo} alt="plus"/>
              </div>
            </div>
          </div>
          <div className="project-card" onClick={() => {activePopup(); handleDetails(2)}}>
            <img
              className="screenshot"
              src={clvScreen}
              alt="portfolio screenshot"
            />
            <div className="project-title-container">
              <h1 className="project-title">CLV association</h1>
              <p className="project-techno-title">Technologies</p>
              <div className="project-line"></div>
              <div className="technos-container">
                <img className="techno-logo" src={htmlLogo} alt="html5"/>
                <img className="techno-logo" src={sassLogo} alt="Sass"/>
                <img className="techno-logo" src={javascriptLogo} alt="javascript"/>
                <img className="techno-logo" src={reactLogo} alt="react"/>
                <img className="techno-logo" src={rubyLogo} alt="Ruby"/>
                <img className="techno-logo" src={railsLogo} alt="Ruby on Rails"/>
                <img className="techno-logo" src={pgLogo} alt="postgresql"/>
              </div>
              <div className="project-btn">
                <img className="plus-logo" src={plusLogo} alt="plus"/>
              </div>
            </div>
          </div>
          <div className="project-card" onClick={() => {activePopup(); handleDetails(3)}}>
            <img
              className="screenshot"
              src={scoreitScreen}
              alt="portfolio screenshot"
            />
            <div className="project-title-container">
              <h1 className="project-title">Score it</h1>
              <p className="project-techno-title">Technologies</p>
              <div className="project-line"></div>
              <div className="technos-container">
                <img className="techno-logo" src={htmlLogo} alt="html5"/>
                <img className="techno-logo" src={cssLogo} alt="css3"/>
                <img className="techno-logo" src={javascriptLogo} alt="javascript"/>
                <img className="techno-logo" src={rubyLogo} alt="Ruby"/>
                <img className="techno-logo" src={railsLogo} alt="Ruby on Rails"/>
                <img className="techno-logo" src={pgLogo} alt="postgresql"/>
              </div>
              <div className="project-btn">
                <img className="plus-logo" src={plusLogo} alt="plus"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
