import React, { useState, useEffect } from "react";
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

const Projects = () => {
  const [lineWidth, setLineWidth] = useState("0vw");
  const [isOnTargetDiv, setIsOnTargetDiv] = useState(true);


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
          <div className="project-card" onClick={activePopup}>
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
          <div className="project-card">
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
          <div className="project-card">
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
