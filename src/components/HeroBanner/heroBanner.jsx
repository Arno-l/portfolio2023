import React from "react";
import "./heroBanner.css";
import responsiveLogo from "../../assets/images/responsive-logo.png";
import linkedinLogo from "../../assets/images/linkedin.png";
import githubLogo from "../../assets/images/github.png";
import maltLogo from "../../assets/images/malt.png";


const HeroBanner = () => {
  
    return(
        <>
            <div className="bg-img">
            <div className="banner-container">
            <div className="banner-text">
            <h1 id="iam">&nbsp;Hi, I'&nbsp;Am&nbsp;</h1>
                <span id="name">
                ARNAUD
                </span>
                <div id="job-container">
                <img style={{width:"2.5em",height:"2.5em"}} src={responsiveLogo} alt="responsive-logo" /><span id="job"> Développeur web React/RoR</span>
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