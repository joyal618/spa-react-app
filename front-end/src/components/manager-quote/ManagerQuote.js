import React, { Component } from 'react';
import "./ManagerQuote.css";
import Manager from "../../assets/manager.jpg";

import Image30 from "../../assets/image30.jpg";
import Image31 from "../../assets/image31.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image40 from '../../assets/image40.jpg'


export default function ManagerQuote() {
    return (
        <div className="manager-quote-main-container">


            <div className="spa-details">
                <img id="image1" src={Image31} alt="image"></img>
                <div className="spa-details-text-box">
                    <img src={Image40} alt="image"></img>
                    <h2 className="spa-details-caption">
                        Spa days are a necessity, not a luxury
                                </h2>
                    <h4 className="spa-details-caption2">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim quis nostrud exercitation ullamco.</h4>
                    <a>EXPLORE MORE</a>
                </div>
                <img id="image2" src={Image30} alt="Image"></img>
            </div>

            <div className="manager-quote-caption-container">
                <div className="manager-quote-sub-caption-container">
                    <div className="manager-quote-caption1">
                        LOVED BY OUR CUSTOMERS
                        </div>
                    <div className="manager-quote-caption2">
                        What our clients are saying about our luxury services
                        </div>
                </div>
                <div className="manager-quote-sub-caption-container1">
                    <div id="manager-photo" style={{ backgroundImage: `url(${Manager})` }}></div>
                    <div className="manager-quote-caption">
                        Their team are easy to work and helped me make amazing websites in a short amount of time. Thanks guys for all your hard work. Professional support.<br /> <br />
                        <strong>JONSAN DONNER</strong><br />
                            SALES MANAGER
                        </div>
                </div>
            </div>
        </div>
    );
}