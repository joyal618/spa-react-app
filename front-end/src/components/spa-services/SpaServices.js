import React from 'react';
import PlateImage from "../../assets/plate.png";
import "./SpaServices.css"
import Image20 from "../../assets/image20.jpg";
import Image21 from "../../assets/image21.jpg";
import Image22 from "../../assets/image22.jpg";

function SpaServices() {
    return (
        <div className="spa-services-main-container">
            <div className="spa-services-image-container">
                <img src={PlateImage}></img>
            </div>
            <div className="spa-services-content-container">
                 <div className="spa-services-caption-title">
                    <img src={Image20} alt="image"  width="100" height="100" />
                    <div className="spa-services-caption-container">
                        <h2>Relax with face massage</h2> 
                        <h4>Lorem Ipsum dolor consectetur adipiscing elit sed do eiusmod tempor incididunt.</h4>
                    </div>
                </div>
                <div className="spa-services-caption-title">
                    <img src={Image21} alt="image" width="100" height="100" />
                    <div className="spa-services-caption-container">
                        <h2>Relax with luxury spa</h2>
                        <h4>Lorem Ipsum dolor consectetur adipiscing elit sed do eiusmod tempor incididunt.</h4>
                    </div>
                </div>
                <div className="spa-services-caption-title">
                    <img src={Image22} alt="image"  width="100" height="100" />
                    <div className="spa-services-caption-container">
                        <h2>Ayurvedic treatments</h2>
                        <h4>Lorem Ipsum dolor consectetur adipiscing elit sed do eiusmod tempor incididunt.</h4>
                    </div>
                </div>
                

            </div>
        </div>
    );
}

export default SpaServices;