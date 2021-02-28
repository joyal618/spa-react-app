import image1 from "../../assets/image1.jpg"
import image2 from "../../assets/image14.jpg"
import image3 from "../../assets/image4.jpg"
import Slider from "react-slick";
import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CoverImage.css"


export default class CoverImage extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div className="homepage-main-container">
        <div className="cover-image-container">

          <Slider {...settings}>
            <div>
              <img src={image1} className="image-container" />
            </div>
            <div>
              <img src={image2} className="image-container" />
            </div>
            <div>
              <img src={image3} className="image-container" />
            </div>

          </Slider>
        </div>
        <div className="caption-container">
          <h1>relaxing</h1>
          <h3>SOMETHING FOR MIND AND SOUL</h3>
          <Button variant="contained">Explore More</Button>
        </div>
      </div >
    );
  }
}


