import React, { useState } from "react";
import "./skills.css";
import { useAtomValue } from "jotai";
import { activeTabAtom } from "../../store/atoms";
import rubyLogo from "../../assets/images/skills-ruby.png";
import railsLogo from "../../assets/images/rails.png";
import pgLogo from "../../assets/images/pg.png";
import sqlLogo from "../../assets/images/sql.png";
import htmlLogo from "../../assets/images/html5.png";
import cssLogo from "../../assets/images/css3.png";
import sassLogo from "../../assets/images/sass.png";
import javascriptLogo from "../../assets/images/js.png";
import reactLogo from "../../assets/images/react.png";
import gitLogo from "../../assets/images/git.png";

const Skills = () => {

  const [isHovered, setIsHovered] = useState(false);
  const activeTab = useAtomValue(activeTabAtom);

  function handleHover() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }
  
  return (
    <>
      <span id="skills-anchor"></span>
      <div className={`general-title ${activeTab === 2 ? 'text-light' : ''}`}>
        <h1>COMPÉTENCES</h1>
        <div className={`line ${isHovered ? 'visible' : ''}`} />
      </div>
      <div className="skills-container" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <p className={`skills-intro ${activeTab === 2 ? 'text-light' : ''}`}>
          Elles sont en constantes améliorations car pour moi la joie de ce
          métier fait que l’on en apprend tous les jours, d’autant plus en étant
          impliqué, curieux et passionné.
        </p>
        <div>
          <div className="skills-cards-container">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://developer.mozilla.org/fr/docs/Glossary/HTML5"
              style={{ textDecoration: "none" }}
            >
              <div className="skills-card">
                <div className="code-container">
                  <code className="skill-code">html5</code>
                </div>
                <img className="skills-logo" src={htmlLogo} alt="html5" />
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://developer.mozilla.org/fr/docs/Web/CSS"
              style={{ textDecoration: "none" }}
            >
              <div className="skills-card">
                <div className="code-container">
                  <code className="skill-code">css3</code>
                </div>
                <img className="skills-logo" src={cssLogo} alt="css3" />
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://sass-lang.com/"
              style={{ textDecoration: "none" }}
            >
              <div className="skills-card">
                <div className="code-container">
                  <code className="skill-code">Sass</code>
                </div>
                <img className="skills-logo" src={sassLogo} alt="Sass" />
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
              style={{ textDecoration: "none" }}
            >
              <div className="skills-card">
                <div className="code-container">
                  <code className="skill-code">Javascript</code>
                </div>
                <img
                  className="skills-logo"
                  src={javascriptLogo}
                  alt="Javascript"
                />
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://fr.reactjs.org/"
              style={{ textDecoration: "none" }}
            >
              <div className="skills-card">
                <div className="code-container">
                  <code className="skill-code">React.js</code>
                </div>
                <img className="skills-logo" src={reactLogo} alt="React" />
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://fr.wikipedia.org/wiki/Ruby"
              style={{ textDecoration: "none" }}
            >
              <div className="skills-card">
                <div className="code-container">
                  <code className="skill-code">Ruby</code>
                </div>
                <img className="skills-logo" src={rubyLogo} alt="Ruby" />
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://rubyonrails.org/"
              style={{ textDecoration: "none" }}
            >
              <div className="skills-card">
                <div className="code-container">
                  <code className="skill-code">
                    Ruby on Rails
                  </code>
                </div>
                <img
                  className="skills-logo"
                  src={railsLogo}
                  alt="Ruby on Rails"
                />
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.postgresql.org/"
              style={{ textDecoration: "none" }}
            >
              <div className="skills-card">
                <div className="code-container">
                  <code className="skill-code">PostgreSQL</code>
                </div>
                <img className="skills-logo" src={pgLogo} alt="PostgreSQL" />
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://fr.wikipedia.org/wiki/Structured_Query_Language"
              style={{ textDecoration: "none" }}
            >
              <div className="skills-card">
                <div className="code-container">
                  <code className="skill-code">SQL</code>
                </div>
                <img className="skills-logo" src={sqlLogo} alt="SQL" />
              </div>
            </a>

            <div className="skills-card">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://git-scm.com/"
                style={{ textDecoration: "none" }}
              >
                <div className="code-container">
                  <code style={{ marginTop: "-80px" }} className="skill-code">
                    git
                  </code>
                </div>
                <img className="skills-logo" id="git" src={gitLogo} alt="git" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
