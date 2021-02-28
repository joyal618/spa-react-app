import React from 'react';
import "./LuxuryPackages.css"
import axios from 'axios';
import { useEffect, useState } from "react";

function LuxuryPackages() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`http://10.10.1.176:8080/luxury-packages`)
            .then(res => {
                setData(res.data)
            }).catch(err => {
                console.error(err)
            })
    }, []);
    return (
        <div className="luxury-packages-main-container">
            <div className="luxury-packages-design-text">relax</div>
            <div className="luxury-packages-sub-container">
                <div className="luxury-packages-caption-container">
                    <div className="luxury-packages-caption1">
                        LUXURY PACKAGES
                    </div>
                    <div className="luxury-packages-caption2">
                        Our Spa massage therapy packages
                    </div>
                    <div className="luxury-packages-caption3">
                        Lorem Ipsum dolor consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.
                    </div>
                    <div className="luxury-packages-arrow">
                        <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
                        <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className="package-data">
                {
                    data && data.map(item => {
                        var imageURL = "http://10.10.1.176:8080/" + item.image;
                        return (
                            <div className="package-data-card" style={{ backgroundImage: `url(${imageURL})` }}>
                                <div className="package-data-card-overlay">
                                    <div className="package-data-card-content">
                                        <h2>{item.title}</h2>
                                        <h4>{item.desc}</h4>
                                    </div>
                                </div>
                            </div>
                        )

                    })
                }
            </div>
        </div>
    );
}


export default LuxuryPackages;