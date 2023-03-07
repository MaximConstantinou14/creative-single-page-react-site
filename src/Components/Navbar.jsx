import React from 'react'
import "../CSS/variables.css";
import "../CSS/navbar.css";
import logo from "../assets/desktop/logo.svg";
import hamburgerImg from "../assets/mobile/icon-hamburger.svg";
import crossImg from "../assets/mobile/icon-cross.svg";

import { useState } from 'react';

const Navbar = () => {

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);  };

  return (
    <nav>
        <div className="nav_white">
            <a href="#" className="logo_link">
                <img src={logo} alt="Creative Logo Image" className="nav_logo_img" />
            </a>
            <button onClick={handleToggle} className="hamburger_btn">
                <img src={isActive ? hamburgerImg : crossImg} alt="Hamburger Navigation Icon" className="hamburger_btn_img" />
            </button>
        </div>
        <div className={isActive ? "nav_red_inactive" : "nav_red_active"}>
            <ul className="nav_list">
                <li className="nav_item">
                    <a href="#" className="nav_link">about</a>
                </li>
                <li className="nav_item">
                    <a href="#" className="nav_link">service</a>
                </li>
                <li className="nav_item">
                    <a href="#" className="nav_link">projects</a>
                </li>
                <li className="nav_item">
                    <button className="scedule_call_nav_btn">Schedule a Call</button>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar