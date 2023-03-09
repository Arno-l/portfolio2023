import React, {useState} from "react";
import "./styleMenu.css";
import settingsLogo from "../../assets/images/settings-blue.png";
import moonLogo from "../../assets/images/moon.png";
import sunLogo from "../../assets/images/sun.png";

const StyleMenu = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    function handleStyleMenu() {
        setIsExpanded(!isExpanded);
    }

    return (
        <>
           <div className={`style-menu ${isExpanded ? 'style-expanded' : ''}`}>
              <div className="style-changer">
                <h3 className="switcher-title">STYLE SWITCHER</h3>
                <div className="switcher-line"/>
                <h4 className="switcher-subtitle">COULEUR THEME</h4>
                <div className="colors-container">
                    <div className="color-box" style={{backgroundColor:"#298dd4"}}/>
                    <div className="color-box" style={{backgroundColor:"#d03c3c"}}/>
                    <div className="color-box" style={{backgroundColor:"#5dd495"}}/>
                    <div className="color-box" style={{backgroundColor:"#fffa58"}} />
                    <div className="color-box" style={{backgroundColor:"#00958e"}}/>
                    <div className="color-box" style={{backgroundColor:"#b898ea"}}/>
                    <div className="color-box" style={{backgroundColor:"#f89934"}}/>
                    <div className="color-box" style={{backgroundColor:"#ef68e4"}}/>
                    <div className="color-box" style={{backgroundColor:"#8070ff"}}/>
                    <div className="color-box" style={{backgroundColor:"#5c78ff"}}/>
                    <div className="color-box" style={{backgroundColor:"#20dad8"}}/>
                    <div className="color-box" style={{backgroundColor:"#ff663f"}}/>
                </div>
                <div className="switcher-line" style={{marginTop:"25px"}}/>
                <h4 className="switcher-subtitle">STYLE THEME</h4>
                <div className="style-container">
                    <div className="style-btn">
                        <img className="style-logo" src={moonLogo} alt="moon"/>
                    </div>
                    <div className="style-btn" style={{marginLeft:"20px"}}>
                        <img className="style-logo" src={sunLogo} alt="sun"/>
                    </div>
                </div>
              </div>
              <div className="style-opener">
                <div className="gap1"></div>
                <div onClick={handleStyleMenu} className="opener-container">
                    <img src={settingsLogo} className="opener-logo" alt="settings"/>
                </div>
                <div className="gap2"></div>  
              </div>  
           </div>
        </>
    )
}

export default StyleMenu;