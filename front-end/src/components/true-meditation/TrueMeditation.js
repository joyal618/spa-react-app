import React from 'react';
import "./TrueMeditation.css"
import PlayButton from '../../assets/play.png';
import Girl from "../../assets/adrian-motroc-87InWldRhgs-unsplash.jpg"
function TrueMeditation() {
    return (
        <div className="true-meditation-main-container">
            <div className="true-meditation-overlay">
                <div className="true-meditation-play-button">
                    <img src={PlayButton} alt={"Play Button"} width="100" height="100"></img>
                </div>
                <div className="true-meditation-caption">
                    <strong>True Meditation</strong> is letting go of manipulating our experience
                </div>


                <div className="booking-form">
                    <div className="booking-form-image-container" style={{ backgroundImage: `url(${Girl})` }}></div>
                    <div className="booking-form-content">
                        <h2>GET BOOK YOUR SPA APPOINTMENT</h2>
                        <h4>Lorem ipsum is simply dummy text of the printing typesetting industry</h4>
                        <div className="booking-form-input">
                            <input type="text" placeholder="Your Name" />
                            <input type="text" placeholder="Your Email Address" />
                            <button type="submit">GET STARTED NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrueMeditation;