import React from "react";
import { Link } from "react-router-dom";

export default function Banner(){

    return (
        <section className="banner">
            <img src="/ip.jpg" alt="Banner Image" className="bannerImage"/>
            <h1 className="bannerText">    Zero Day ONE  </h1>
            <p className="bannerDescription">Your trusted partner in innovative solutions and wonders. We Can do anything!!!</p> 
            <Link to="/info" className="bannerButton">Learn More</Link>
        </section>                         
    );

}

    

    