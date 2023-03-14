import React, {useState, useEffect} from "react";
import "./projectDetails.css";
import { useAtom } from "jotai";
import { projectLogoAtom, projectNumberAtom, projectInfoAtom, fullRealizationAtom, projectLinkAtom } from "../../store/atoms";
import closeLogo from "../../assets/images/cross.png";
import linkLogo from "../../assets/images/link.png";


const ProjectDetails = () => {

  const [projectNumber, setProjectNumber] = useAtom(projectNumberAtom);
  const [projectLogo, setProjectLogo] = useAtom(projectLogoAtom);
  const [logoStyle, setLogoStyle] = useState(null);
  const [projectInfo, setProjectInfo] = useAtom(projectInfoAtom);
  const [fullRealization, setFullRealization] = useAtom(fullRealizationAtom);
  const [projectLink, setProjectLink] = useAtom(projectLinkAtom);

  useEffect(() => {
    switch(projectNumber) {
      case 1:
        setLogoStyle({width: "25%", marginBottom:"20px"});
        break;
      case 2:
        setLogoStyle({width: "25%", marginBottom:"20px"});
        break;
      case 3:
        setLogoStyle({width: "25%", marginBottom:"20px"});
        break;
      default:
        setLogoStyle(null);
        break;
    }
  },[projectNumber])

  function closePopup() {
    document.getElementsByClassName("project-details")[0].style.display =
      "none";
    document.getElementsByClassName("greying")[0].style.opacity = "1";
    document.getElementsByClassName("greying")[0].style.background =
      "linear-gradient(to top, #031014, #000312)";
    setProjectLogo("");
    setProjectNumber("");
    setProjectInfo("");
    setFullRealization("");
    setProjectLink("");
  }

  return (
    <>
      <div id="project-details-anchor" className="project-details">
        <div className="close-project-container">
          <img
            onClick={closePopup}
            style={{ cursor: "pointer" }}
            src={closeLogo}
            alt="close cross"
          />
        </div>
        <div className="project-logo-container">
          <img style={logoStyle} src={projectLogo} alt="project logo" />
        </div>
        <div className="project-infos">
          <div className="project-section">
            <h5 className="project-section-title">INFOS PROJET</h5>
            <p className="project-text">
              {projectInfo}
            </p>
          </div>
          <div className="project-section">
            <h5 className="project-section-title">RÉALISATION COMPLÈTE</h5>
            <ul className="project-text">
              {Object.values(fullRealization).map((item, index) => (
                <li key={index}>{item}</li>
              )) }
            </ul>
          </div>
        </div>
        <div className="project-link-container">
          <a target="_blank" rel="noreferrer"  style={{margin:"-4px"}} href={projectLink}>
          <img className="link-logo" src={linkLogo} alt="link logo"/>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
