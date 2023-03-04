import React from "react";
import "./footer.scss";
import linkedinLogo from "../../assets/images/linkedin2.png";
import maltLogo from "../../assets/images/malt.png";
import githubLogo from "../../assets/images/github.png";


const Footer = () => {

    return (
        <>
            <div className="footer-container">
                <div className="footer-links">
                <div className="glass-btn blue-btn">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/arnaud-lucciarini-9808a0221/">
                    <img className="social-logo" src={linkedinLogo} alt="linkedin" style={{width:"6em"}}/>
                    </a>
                </div>
                <div className="glass-btn amber-btn">
                    <a target="_blank" rel="noreferrer" href="https://github.com/Arno-l">
                    <img className="social-logo" src={githubLogo} alt="github" style={{width:"2.5em"}}/>
                    </a>
                </div>
                <div className="glass-btn red-btn">
                    <a target="_blank" rel="noreferrer" href="https://www.malt.fr/profile/arnaudlucciarini2?overview=true">
                    <img className="social-logo" src={maltLogo} alt="malt" style={{width:"2.5em"}}/>
                    </a>
                </div>
                </div>
                
                <div className="reserved">
                    <p style={{marginBlockEnd:"0",marginBlockStart:"0",marginBlock:"1em"}}>Copyright All Right Reserved 2023 <span id="reserved-name">Arno-l</span></p>
                </div>
            </div>
        </>
    )
}

export default Footer;