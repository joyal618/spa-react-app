import React from 'react';
import "./Blog.css";
import axios from 'axios';
import { useEffect, useState } from "react";


function Blog() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://10.10.1.176:8080/blogs`)
            .then(res => {
                setData(res.data);
            }).catch(err => {
                console.error(err)
            })
    }, []);


    return (
        <>
        {
            data.length > 0 ?
                <div className="blog-main-container" id="blog">
                    <h3>LATEST BLOGS</h3>
                    <h2>Interesting Stories</h2>
                    <div className="data">
                        {
                            data && data.map(item => {
                                var imageURL = "http://10.10.1.176:8080/" + item.image;
                                return (
                                    <div className="data-card">

                                        <img src={imageURL} alt="image"></img>
                                        <div className="data-card-content">
                                            <div className="data-card-content-title">
                                                {item.title}
                                            </div>
                                            <div className="data-card-content-desc">
                                                {item.desc}
                                            </div>
                                            <div className="data-card-content-date">
                                                {item.date}
                                            </div>
                                        </div>
                                    </div>
                                )

                            })
                        }
                    </div>
                </div> 
                :
                <div></div>
                        
            }
            </>
    );
}

export default Blog;