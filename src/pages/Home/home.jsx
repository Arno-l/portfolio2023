import React, {useEffect} from "react";
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

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return(
        <>
        <ProjectDetails/>
        <div id="outer-container">
        <main id="page-wrap">
        <Navbar/>
        <HeroBanner/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
        </main>
        </div>
        </>
    )
}

export default Home;