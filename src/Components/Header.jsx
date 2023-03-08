import React from 'react';
import "../CSS/variables.css";
import "../CSS/header.css";

const Header = () => {
  return (
    <header className="header_wrapper">
        <div className="header_img_section"></div>
        <div className="header_text_section">
            <h1 className="header_title">Branding & website design agency</h1>
            <p className="header_description">
              We specialize in visual storytelling by creating
               cohesive brand and website design solutions for 
               small businesses, giving lasting impressions to 
               audiences in a digital world.
            </p>
            <button className="header_btn">learn more</button>
        </div>
    </header>
  )
}

export default Header