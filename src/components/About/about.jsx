import React, { useEffect, useState } from "react";
//import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import "./about.css";



const About = () => {
    
    const [lineWidth, setLineWidth] = useState("0vw");
    const [isOnTargetDiv, setIsOnTargetDiv] = useState(true);
  
    useEffect(() => {
      function handleScroll() {
        if (window.scrollY > 250 && window.scrollY < 850) {
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

    /*
    useScrollPosition(({ prevPos, currPos }) => {
        console.log(currPos.x)
        console.log(currPos.y)
      })
    */

    return(
        <>
            <div className="general-title">
                <h1>A PROPOS</h1>
                <div  className="line" style={{ width: lineWidth }} />
            </div>  
            <div className="about-container">
                <p className="about-text">Bonjour moi c'est Arnaud, développeur web curieux, rigoureux et autonome.
                En janvier 2022, j'ai entamé une reconversion dans le  développement web en suivant une formation intensive chez 
                <a className="text-link" target="_blank" rel="noreferrer" href="https://www.thehackingproject.org/">The Hacking Project</a>
                qui s'est terminée en septembre 2022.
                Après avoir explorer plusieurs domaines comme la mécanique PL, la livraison ainsi que l’armée de terre,
                il était temps pour moi de me tourner vers un domaine qui me passionne depuis de nombreuses années.
                J’ai toujours été curieux et admiratif de ce qui peut être créer avec du code et savoir maintenant l’utiliser me permet de m’épanouir pleinement dans ce métier.
                </p>
            </div>
        </>
    )
}
 export default About;