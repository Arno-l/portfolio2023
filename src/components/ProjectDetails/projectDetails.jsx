import React, {useState, useEffect} from "react";
import "./projectDetails.css";
import { useAtom } from "jotai";
import { projectLogoAtom, projectNumberAtom, projectInfoAtom, fullRealizationAtom } from "../../store/atoms";
import closeLogo from "../../assets/images/cross.png";


const ProjectDetails = () => {

  const [projectNumber, setProjectNumber] = useAtom(projectNumberAtom);
  const [projectLogo, setProjectLogo] = useAtom(projectLogoAtom);
  const [logoStyle, setLogoStyle] = useState(null);
  const [projectInfo, setProjectInfo] = useAtom(projectInfoAtom);
  const [fullRealization, setFullRealization] = useAtom(fullRealizationAtom);

  useEffect(() => {
    switch(projectNumber) {
      case 1:
        setLogoStyle({width: "50%"});
        break;
      case 2:
        setLogoStyle({width: "28%"});
        break;
      case 3:
        setLogoStyle({width: "25%"});
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
      console.log(typeof fullRealization);
    setProjectLogo("");
    setProjectNumber("");
    setProjectInfo("");
    setFullRealization("");
  }

  return (
    <>
      <div className="project-details">
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
      </div>
    </>
  );
};

export default ProjectDetails;
