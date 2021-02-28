import React from 'react';
import "./MassageTherapy.css";
import LeafBackground from "../../assets/leaf-bg.png";
import axios from 'axios';
import { useEffect, useState } from "react";

function MassageTherapy() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://10.10.1.176:8080/banners`)
            .then(res => {
                setData(res.data)
            }).catch(err => {
                console.error(err)
            })
    }, []);



    return (
        <div className="massage-therapy-main-container">

            <div className="massage-therapy-banners">
                {
                    data && data.map(item => {
                        var imageURL = "http://10.10.1.176:8080/" + item.image;
                        return (
                            <>
                                {item.type === "image" ?
                                    <div className="banner-image">
                                        <img src={imageURL} alt="image"></img>
                                        <div className="banner-image-content">
                                            <div className="banner-image-title">{item.title}</div>
                                            <div className="banner-image-price">Starting From {item.price}</div>
                                        </div>
                                    </div> :
                                    <div className="banner-textbox">
                                        <img src={imageURL} alt="icon"></img>
                                        <div className="banner-textbox-title">{item.title}</div>
                                        <div className="banner-textbos-desc">{item.desc}</div>
                                        <a>DISCOVER MORE</a>
                                    </div>

                                }
                            </>
                        )
                    })
                }
            </div>


            <div className="massage-therapy-container">
                <div className="masssage-therapy-caption1">
                    Maasage therapy for rest and relaxation. You oweyourself this moment.
                </div>
                <div className="masssage-therapy-caption2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.<br /><br />

                    <a>EXPLORE MORE</a>
                </div>
            </div>
        </div>
    );
}

export default MassageTherapy;