import React, { useEffect, useState} from "react";
import "./firstPage.css";
import { useNavigate } from "react-router-dom";
import myLogo from "../../assets/images/a.lcci-1.png";
import  AOS  from 'aos';
import "aos/dist/aos.css";
import LoadingIcons from 'react-loading-icons';


const FirstPage = () => {

    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1200
        });
        window.scrollTo(0,0);
        setTimeout(function () {
            setIsLoading(false)
            navigate("/home")
          }, 3000);
    })


    return(
        <>
        <div className="firstpage-ctn">
         <div data-aos="fade-up" className="big-logo-aldev-ctn">
            <img src={myLogo} style={{width:"100%"}} alt="logo aLDev"/>
         </div> 
         { isLoading ?
         <LoadingIcons.ThreeDots
            data-aos="fade-up"
            width={80}
            height={80}
         /> : <></>
         }
         </div>
         <link rel="preload" href="/home" as="fetch" crossOrigin="anonymous" />
        </>
    )
}

export default FirstPage;