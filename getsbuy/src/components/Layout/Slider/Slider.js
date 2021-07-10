import React, { Component } from "react";
import Slider from "react-slick";

import classes from "./Slider.module.css";

import mobileSlider1 from "../../../images/home/sliderBanner1.jpg";
import mobileSlider2 from "../../../images/home/sliderBanner2.jpg";
import mobileSlider3 from "../../../images/home/sliderBanner3.jpg";
import mobileSlider4 from "../../../images/home/sliderBanner4.jpg";
import mobileSlider5 from "../../../images/home/sliderBanner5.jpg";
import mobileSlider6 from "../../../images/home/sliderBanner6.jpg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
    };
    return (
      <div className={classes["slider-items"]}>
        <Slider {...settings}>
          <div className={classes["slider-item-container"]}>
            <img src={mobileSlider1} alt="slider" />
          </div>
          <div className={classes["slider-item-container"]}>
            <img src={mobileSlider2} alt="slider" />
          </div>
          <div className={classes["slider-item-container"]}>
            <img src={mobileSlider3} alt="slider" />
          </div>
          <div className={classes["slider-item-container"]}>
            <img src={mobileSlider4} alt="slider" />
          </div>
          <div className={classes["slider-item-container"]}>
            <img src={mobileSlider5} alt="slider" />
          </div>
          <div className={classes["slider-item-container"]}>
            <img src={mobileSlider6} alt="slider" />
          </div>
        </Slider>
      </div>
    );
  }
}
