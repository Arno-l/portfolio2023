import React, { useState, useEffect } from "react";
import "./navbar.css";
import myLogo from "../../assets/images/a.lcci.png";
import { styles } from "../../assets/burgerMenuStyle";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import burger from "../../assets/images/burger.svg";
import { Typewriter } from "react-simple-typewriter";
import { Scrollchor, easeOutQuad } from "react-scrollchor";
import StyleMenu from "../styleMenu/styleMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, setPrevScrollPos, setVisible]);

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleStateChange(state) {
    setMenuOpen(state);
    setActive(!active);
  }

  return (
    <>
      <nav className={`navbar ${visible ? "navbar-visible" : "navbar-hidden"}`}>
        
        <div className="navbar-logo-ctn">
        <a href="#"><img src={myLogo} className="navbar-logo" alt="logo aLDev" /></a>
        </div>

        <Menu
          right
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          width={"45%"}
          isOpen={menuOpen}
          customBurgerIcon={<img src={burger} alt="burger-icon" />}
          onStateChange={(e) => handleStateChange(e.target)}
          styles={styles}
        >
          <Link to="" style={{ textDecoration: "none" }}>
            <div id="typewriter">
              <span id="menu-iam" style={{ marginLeft: "10px" }}>
                Hi, I'&nbsp;Am&nbsp;
              </span>
              <span id="menu-name">
                {!active ? (
                  <Typewriter
                    loopcursor
                    loop
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    words={["ARNAUD", "28", "DEV"]}
                  />
                ) : (
                  <></>
                )}
              </span>
            </div>
          </Link>
          <Scrollchor
            to="#about-anchor"
            onClick={closeMenu}
            className="menu-item"
            animate={{ duration: 1000, easing: easeOutQuad }}
          >
            <div className="menu-layer">
              <span style={{ marginLeft: "20px" }}>A propos</span>
            </div>
          </Scrollchor>
          <Scrollchor
            to="#skills-anchor"
            onClick={closeMenu}
            className="menu-item"
          >
            <div className="menu-layer">
              <span style={{ marginLeft: "20px" }}>Compétences</span>
            </div>
          </Scrollchor>
          <Scrollchor
            to="#projects-anchor"
            onClick={closeMenu}
            className="menu-item"
          >
            <div className="menu-layer">
              <span style={{ marginLeft: "20px" }}>Projets</span>
            </div>
          </Scrollchor>
          <Scrollchor
            to="#contact-anchor"
            onClick={closeMenu}
            className="menu-item"
          >
            <div className="menu-layer">
              <span style={{ marginLeft: "20px" }}>Contact</span>
            </div>
          </Scrollchor>
        </Menu>

        <div className="navbar-links">
          <Scrollchor
            to="#about-anchor"
            id="about"
            style={{ textDecoration: "none" }}
            className="navbar-link"
          >
            <div className="layer">
              <span>A propos</span>
            </div>
          </Scrollchor>
          <Scrollchor
            to="#skills-anchor"
            id="skills"
            className="navbar-link"
          >
            <div className="layer">
              <span>Compétences</span>
            </div>
          </Scrollchor>
          <Scrollchor
            to="#projects-anchor"
            id="projects"
            className="navbar-link"
          >
            <div className="layer">
              <span>Projets</span>
            </div>
          </Scrollchor>
          <Scrollchor
            to="#contact-anchor"
            id="contact"
            className="navbar-link"
          >
            <div className="layer">
              <span>Contact</span>
            </div>
          </Scrollchor>
        </div>
      </nav>
      <StyleMenu/>
    </>
  );
};

export default Navbar;
