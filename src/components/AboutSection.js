import React from "react";
import home1 from "../img/home1.png";
//import style

import { Hide, About, Description, Image } from "../styles";


const AboutSection = () => {
    return(
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                        <br />
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span></h2>
                        <br />
                    </Hide>
                    <Hide>
                        <h2>come true.</h2>
                        <br />
                    </Hide>
                </div>
                <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="home guy" />
            </Image>
        </About>
    )
}


export default AboutSection;