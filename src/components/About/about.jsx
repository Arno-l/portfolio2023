import React, {useState} from "react";
import "./about.css";
import { useAtomValue } from "jotai";
import { activeTabAtom } from "../../store/atoms";
import fileCV from "../../assets/files/CV2023.pdf";


const About = () => {
  
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
      <span id="about-anchor"></span>
      <div className={`general-title ${activeTab === 2 ? 'text-light' : ''}`}>
        <h1>A PROPOS</h1>
        <div className={`line ${isHovered ? 'visible' : ''}`} />
      </div>
      <div className={`about-container ${activeTab === 2 ? 'text-light' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <p className="about-text">
          Bonjour moi c'est Arnaud, développeur web curieux, rigoureux et
          autonome. En janvier 2022, j'ai entamé une reconversion dans le
          développement web en suivant une formation intensive chez
          <a
            className="text-link"
            target="_blank"
            rel="noreferrer"
            href="https://www.thehackingproject.org/"
          >
            The Hacking Project
          </a>
          qui s'est terminée en septembre 2022. Après avoir explorer plusieurs
          domaines comme la mécanique PL, la livraison ainsi que l’armée de
          terre, il était temps pour moi de me tourner vers un domaine qui me
          passionne depuis de nombreuses années. J’ai toujours été curieux et
          admiratif de ce qui peut être créer avec du code et savoir maintenant
          l’utiliser me permet de m’épanouir pleinement dans ce métier.
        </p>
        <a
          href={fileCV}
          download="CV2023"
          target="_blank"
          rel="noreferrer"
          className="cv-btn"
        >
          Télécharger CV
        </a>
      </div>
    </>
  );
};
export default About;
