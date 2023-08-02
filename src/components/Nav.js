import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import {motion} from "framer-motion";

const Nav = () => {
    const {pathname} = useLocation();
    return(
       <StyledNav>
        <h1><Link to="/" id="logo">Capture</Link></h1>
        <ul>
            <li>
                <Link to="/">1. About Us</Link>
                <Line transition={{duration: 1}} initial={{width:"0%"}} animate={{width: pathname === "/" ? "50%" : "0%"}}/>
            </li>
            <li>
                <Link to="/work">2. Our Work</Link>
                <Line transition={{duration: 1}} initial={{width:"0%"}} animate={{width: pathname.startsWith("/work") ? "50%" : "0%"}}/>
            </li>
            <li>
                <Link to="/contact">3. Contact Us</Link>
                <Line transition={{duration: 1}} initial={{width:"0%"}} animate={{width: pathname === "/contact" ? "50%" : "0%"}}/>
            </li>
        </ul>
       </StyledNav>
    )
}
const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    background: #282828;
    position: sticky;
    top: 0;
    z-index: 10;
    a{
        text-decoration: none;
        color: white;
    }
    ul{
        display: flex;
        list-style: none;
    }
    #logo{
        font-size: 1.5rem;
        font-family: 'Lobster', cursive;
        font-weight: lighter;
    }
    @media (max-width: 800px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 0.5rem;
      justify-content: space-between;
      width: 100%;
      li {
        padding: 0;
      }
     }
    }
    li{
        padding-left: 5rem;
        position: relative;
    }
`;
const Line = styled(motion.div)`
    height: 0.3rem;
    background: #23d997;
    width: 0%;
    position: absolute;
    bottom: -80%;
    left: 50%;
    @media screen and (max-width: 800px) {
    left: 10%;
    }

`

export default Nav;