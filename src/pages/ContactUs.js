import React from "react";
//animation
import {motion} from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop"

const ContactUs = () => {
    return(
        <ContactStyle
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        style={{ background: "#fff" }}
      >
        <Title>
          <Hide>
            <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
          </Hide>
        </Title>
        <div>
          <Hide>
            <Social variants={titleAnim}>
              <Circle />
              <h3>Send Us A Message</h3>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnim}>
              <Circle />
              <h3>Send an email.</h3>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnim}>
              <Circle />
              <h3>Social Media</h3>
            </Social>
          </Hide>
        </div>
        <ScrollTop/>
      </ContactStyle>
    );
  };
  
  const ContactStyle = styled(motion.div)`
    padding: 2rem 4rem;
    color: #353535;
    min-height: 90vh;
    @media (max-width: 1500px) {
      padding: 2rem;
      font-size: 1rem;
    }
  `;
  const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
    font-weight: bold;
    @media (max-width: 800px) {
      margin-top: 5rem;
    }
  `;
  const Hide = styled.div`
    overflow: hidden;
  `;
  const Circle = styled.div`
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    background: #353535;
  `;
  const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h3 {
      margin: 2rem;
      color: black;
      font-size: 2rem;
    }
  `;

export default ContactUs;