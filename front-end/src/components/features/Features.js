import React from 'react';
import image from "../../assets/image9.png";
import "./Features.css";
import leaves from "../../assets/leaves.svg";
import jug from "../../assets/jug.svg";
import flower from "../../assets/flower.svg";
import foot from "../../assets/foot.svg";

function Features() {
    return (
        <div className="features-main-container">
            <img src={image} width="160" height="80"></img>
            <h5>ENJOY SOOTHING EXPERIENCE</h5>
            <h2>Welcome to our soothing spa massage therapy center</h2>
            <div className="features-list-container">
                <div className="features-item">
                    <img src={foot} width="50" height="50"></img>
                    <h2>MANICURE PEDICURE</h2>
                    <h4>Lorem ipsum is simply dummy text the printing typesetting</h4>
                </div>

                <div className=" features-item">
                    <img src={jug} width="50" height="50"></img>
                    <h2>OIL MASSAGE</h2>
                    <h4>Lorem ipsum is simply dummy text the printing typesetting</h4>
                </div>

                <div className=" features-item">
                    <img src={flower} width="50" height="50"></img>
                    <h2>LUXURY SPA</h2>
                    <h4>Lorem ipsum is simply dummy text the printing typesetting</h4>
                </div>

                <div className=" features-item">
                        <img src={leaves} width="50" height="40"></img>
                    <h2>SKIN THERAPY</h2>
                    <h4>Lorem ipsum is simply dummy text the printing typesetting</h4>
                </div>
            </div>
        </div>
    );
}

export default Features;