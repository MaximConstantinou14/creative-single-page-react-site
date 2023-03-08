import React from 'react';
import "../CSS/variables.css";
import "../CSS/hero.css";

import StrategicRedLine from "../assets/desktop/bg-pattern-wave-red.svg";

const Hero = () => {
  return (
    <main>
        <div className="strategic_section">
            <div className="strategic_img_container"></div>
            <img src={StrategicRedLine} alt="" className="strategic_red_line" />
            <div className="strategic_text_container">
                <h1 className="strategic_title"> <span className="strategic_red_title">Design</span> is strategic</h1>
                <p className="strategic_description">
                    “A well-crafted design strategy consistently produces 
                    desired outcomes and brand awareness. We are firm believers 
                    that success  lies in creative collaboration with our clients.”
                </p>
                <a href="#" className="strategic_link">Schedule a Call</a>
            </div>
        </div>

        <div className="strategic_nums_section">
            <div className="strategic_nums_left">
                <h1 className="strategic_nums_left_title">Our approach for creating a winning brand</h1>
            </div>
            <div className="strategic_nums_right">
                <h1 className="strategic_nums_right_title">Our approach for creating a winning brand</h1>
                <div className="strategic_nums_right_one">
                    <h1 className="strategic_nums_right_one_num">01</h1>
                    <h1 className="strategic_nums_right_one_title">Brand Strategy</h1>
                    <p className="strategic_nums_right_one_description">
                        Brand strategy is critical for long-term success. 
                        Outshining competitors and capturing the target audience are key.
                    </p>
                </div>
                <div className="strategic_nums_right_two">
                    <h1 className="strategic_nums_right_two_num">02</h1>
                    <h1 className="strategic_nums_right_two_title">Brand Design</h1>
                    <p className="strategic_nums_right_two_description">
                        Keeping the brand design unique and meaningful helps in 
                        communicating the brand’s value effectively.
                    </p>
                </div>
                <div className="strategic_nums_right_three">
                    <h1 className="strategic_nums_right_three_num">03</h1>
                    <h1 className="strategic_nums_right_three_title">Web Design</h1>
                    <p className="strategic_nums_right_three_description">
                        A beautifully crafted website is the best tool for brand awareness, 
                        and ultimately results in increased revenues.
                    </p>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Hero