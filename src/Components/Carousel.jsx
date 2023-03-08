import React from 'react'
import "../CSS/variables.css";
import "../CSS/carousel.css";
import {images} from "./CarouselData";
import LeftArrow from "../assets/desktop/icon-arrow-previous.svg";
import RightArrow from "../assets/desktop/icon-arrow-next.svg";
import whiteLineIcon from "../assets/desktop/bg-pattern-wavy-white.svg";
import { useState } from 'react';

const Carousel = () => {

    const [currentImg, setCurrentImg] = useState(0);


  return (
    <div className="carousel_container">
        <div className="carousel_left">
            <div className="img_text_container">
                <h1 className="img_title">{images[currentImg].imgtitle}</h1>
                <p className="project_date">{images[currentImg].date}</p>
            </div>
            <div className="img_overlay"></div>
            <img className="carousel_img" src={images[currentImg].img} alt="" />
            <img src={whiteLineIcon} alt="" className="white_line_icon" />
        </div>
        <div className="carousel_right">
            <h1 className="carousel_right_title">{images[currentImg].title}</h1>
            <div className="carousel_btns">
                <button onClick={() => {currentImg > 0 && setCurrentImg(currentImg-1)}} className="carousel_btn_left"><img src={LeftArrow} alt="Previous Arrow" /></button>
                <button onClick={() => {currentImg < images.length -1 && setCurrentImg(currentImg+1)}} className="carousel_btn_right"><img src={RightArrow} alt="Next Arrow" /></button>
            </div>
        </div>
    </div>
  )
}

export default Carousel