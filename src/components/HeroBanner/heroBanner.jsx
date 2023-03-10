import React from "react";
import "./heroBanner.css";
import { useAtomValue } from "jotai";
import { activeTabAtom } from "../../store/atoms";
import rudderLogo from "../../assets/images/rudder.png";
import linkedinLogo from "../../assets/images/linkedin.png";
import githubLogo from "../../assets/images/github.png";
import maltLogo from "../../assets/images/malt.png";


const HeroBanner = () => {

    const activeTab = useAtomValue(activeTabAtom);
  
    return(
        <>
            <div className={`bg-img ${activeTab === 2 ? 'bg-img-light' : ''}`}>
            <div className="banner-container">
            <div className="banner-text">
            <h1 className={`iam ${activeTab === 2 ? 'text-light' : ''}`}>&nbsp;Hi, I'&nbsp;Am&nbsp;</h1>
                <span className={`name ${activeTab === 2 ? 'text-light' : ''}`}>
                ARNAUD
                </span>
                <div id="job-container">
                <img className="banner-logo" src={rudderLogo} alt="rudder-logo" /><span id="job"> Développeur web React/RoR</span>
                </div>
                <div className="social-banner">
                  <a className="social-btn" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/arnaud-lucciarini-9808a0221/" style={{textDecoration:"none"}}><img style={{width:"3em",height:"3em"}} src={linkedinLogo} alt="linkedin-logo"/></a>
                  <a className="social-btn" target="_blank" rel="noreferrer" href="https://github.com/Arno-l" style={{textDecoration:"none",marginLeft:"15px",marginBottom:"2px"}}><img style={{width:"2.5em",height:"2.5em"}} src={githubLogo} alt="github-logo"/></a>
                  <a className="social-btn" target="_blank" rel="noreferrer" href="https://www.malt.fr/profile/arnaudlucciarini2?overview=true" style={{textDecoration:"none",marginLeft:"15px",marginBottom:"2px"}}><img style={{width:"2.5em",height:"2.5em"}} src={maltLogo} alt="malt-logo"/></a>
                </div>
                </div>
                <div className="mouse_scroll">
                <div className="mouse">
			        <div className="wheel"></div>
		        </div>
		        <div>
			    <span className="m_scroll_arrows unu"></span>
			    <span className="m_scroll_arrows doi"></span>
			    <span className="m_scroll_arrows trei"></span>
		        </div>
            </div>
            </div> 
        </div>
        </>
    )
}

export default HeroBanner;