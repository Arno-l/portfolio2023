import React, {useState} from "react";
import "./styleMenu.css";
import settingsLogo from "../../assets/images/settings-blue.png";

const StyleMenu = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    function handleStyleMenu() {
        setIsExpanded(!isExpanded);
    }

    return (
        <>
           <div className={`style-menu ${isExpanded ? 'style-expanded' : ''}`}>
              <div className="style-changer"></div>
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