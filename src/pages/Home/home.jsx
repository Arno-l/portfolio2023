import React from "react";
import "./home.css";
import HeroBanner from "../../components/HeroBanner/heroBanner";
import About from "../../components/About/about";
import Skills from "../../components/Skills/skills";
import Navbar from "../../components/Navbar/navbar";
import Projects from "../../components/Projects/projects";
import ProjectDetails from "../../components/ProjectDetails/projectDetails";
import Contact from "../../components/Contact/contact";
import Footer from "../../components/Footer/footer";

const Home = () => {

    return(
        <>
        <ProjectDetails/>
        <div id="outer-container">
        <main id="page-wrap">
        <div className="greying">
        <Navbar/>
        <HeroBanner/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
        </div>
        </main>
        </div>
        </>
    )
}

export default Home;