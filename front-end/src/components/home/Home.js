import React from "react";
import styled from "styled-components"
import CoverImage from "../cover-image/CoverImage"
import NavBar from "../nav-bar/NavBar";
import Features from "../features/Features";
import Footer from "../footer/Footer";
import MassageTherapy from "../massage-therapy/MassageTherapy";
import SpaServices from "../spa-services/SpaServices";
import LuxuryPackages from "../luxury-packages/LuxuryPackages";
import TrueMeditation from "../true-meditation/TrueMeditation";
import ManagerQuote from "../manager-quote/ManagerQuote";
import Blog from "../blog/Blog";
import "./Home.css";

const Title = styled.h1`
  font-size: 25px;
  text-align: center;
  margin-top: 50px;
`;

function Home() {
    return (
        <>
            <div className="App">
                <NavBar />
                <CoverImage/>
                <Features />
                <MassageTherapy />
                <SpaServices />
                <LuxuryPackages />
                <TrueMeditation />
                <ManagerQuote />
                <Blog />
                <Footer />
                
            </div>
        </>
    );
}

export default Home;