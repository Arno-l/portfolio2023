import React, {useState} from "react";
import "./styleMenu.css";
import { useSetAtom, useAtom} from "jotai";
import { colorNumberAtom, activeTabAtom } from "../../store/atoms";
import settings1 from "../../assets/images/settings-1.png";
import settings2 from "../../assets/images/settings-2.png";
import settings3 from "../../assets/images/settings-3.png";
import settings4 from "../../assets/images/settings-4.png";
import settings5 from "../../assets/images/settings-5.png";
import settings6 from "../../assets/images/settings-6.png";
import settings7 from "../../assets/images/settings-7.png";
import settings8 from "../../assets/images/settings-8.png";
import settings9 from "../../assets/images/settings-9.png";
import settings10 from "../../assets/images/settings-10.png";
import settings11 from "../../assets/images/settings-11.png";
import settings12 from "../../assets/images/settings-12.png";
import moonLogo from "../../assets/images/moon.png";
import sunLogo from "../../assets/images/sun.png";

const StyleMenu = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [stateNumber, setStateNumber] = useState(1);
    const settingsLogo = stateNumber === 1 ? settings1 : stateNumber === 2 ? settings2 : stateNumber === 3 ? settings3 : stateNumber === 4 ? settings4 : stateNumber === 5 ? settings5 : stateNumber === 6 ? settings6 : stateNumber === 7 ? settings7 : stateNumber === 8 ? settings8 : stateNumber === 9 ? settings9 : stateNumber === 10 ? settings10 : stateNumber === 11 ? settings11 : stateNumber === 12 ? settings12 : null;
    const setColorNumber = useSetAtom(colorNumberAtom);
    const [activeTab, setActiveTab] = useAtom(activeTabAtom);

    function handleStyleMenu() {
        setIsExpanded(!isExpanded);
    }

    function handleColor(color, number) {
        document.documentElement.style.setProperty("--selected-color", color);
        setColorNumber(number);
    }

    function handleStyle(tab) {
        switch(tab) {
            case 1:
                document.body.classList.remove("body-light");
                break;
            case 2:
                document.body.classList.add("body-light");
                break;
            default:
                return;
        }
    }

    return (
        <>
           <div className={`style-menu ${isExpanded ? 'style-expanded' : ''}`}>
              <div className="style-changer">
                <h3 className="switcher-title">STYLE SWITCHER</h3>
                <div className="switcher-line"/>
                <h4 className="switcher-subtitle">COULEUR THEME</h4>
                <div className="colors-container">
                    <div className="color-box" onClick={() => {handleColor("#298dd4",1); setStateNumber(1)}} style={{backgroundColor:"#298dd4"}}/>
                    <div className="color-box" onClick={() => {handleColor("#d03c3c",2); setStateNumber(2)}} style={{backgroundColor:"#d03c3c"}}/>
                    <div className="color-box" onClick={() => {handleColor("#5dd495",3); setStateNumber(3)}} style={{backgroundColor:"#5dd495"}}/>
                    <div className="color-box" onClick={() => {handleColor("#fffa58",4); setStateNumber(4)}} style={{backgroundColor:"#fffa58"}} />
                    <div className="color-box" onClick={() => {handleColor("#00958e",5); setStateNumber(5)}} style={{backgroundColor:"#00958e"}}/>
                    <div className="color-box" onClick={() => {handleColor("#b898ea",6); setStateNumber(6)}} style={{backgroundColor:"#b898ea"}}/>
                    <div className="color-box" onClick={() => {handleColor("#f89934",7); setStateNumber(7)}} style={{backgroundColor:"#f89934"}}/>
                    <div className="color-box" onClick={() => {handleColor("#ef68e4",8); setStateNumber(8)}} style={{backgroundColor:"#ef68e4"}}/>
                    <div className="color-box" onClick={() => {handleColor("#8070ff",9); setStateNumber(9)}} style={{backgroundColor:"#8070ff"}}/>
                    <div className="color-box" onClick={() => {handleColor("#5c78ff",10); setStateNumber(10)}} style={{backgroundColor:"#5c78ff"}}/>
                    <div className="color-box" onClick={() => {handleColor("#20dad8",11); setStateNumber(11)}} style={{backgroundColor:"#20dad8"}}/>
                    <div className="color-box" onClick={() => {handleColor("#ff663f",12); setStateNumber(12)}} style={{backgroundColor:"#ff663f"}}/>
                </div>
                <div className="switcher-line" style={{marginTop:"25px"}}/>
                <h4 className="switcher-subtitle">STYLE THEME</h4>
                <div className="style-container">
                    <div onClick={() => {setActiveTab(1); handleStyle(1)}} className={`style-btn ${activeTab === 1 && "active"}`}>
                        <img className="style-logo" src={moonLogo} alt="moon"/>
                    </div>
                    <div onClick={() => {setActiveTab(2); handleStyle(2)}} className={`style-btn ${activeTab === 2 && "active"}`} style={{marginLeft:"20px"}}>
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