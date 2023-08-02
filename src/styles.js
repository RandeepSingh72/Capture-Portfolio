import { motion } from "framer-motion";
import styled from "styled-components";

export const About = styled(motion.div)`
   min-height: 90vh;
   display: flex;
   padding: 2rem;
   align-items: center;
   justify-content: space-between;
   color: white;
   @media screen and (max-width: 780px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
    }
`;
export const Description = styled.div`
    flex: 1;
    padding-right: 1rem;
    z-index: 2;
    h2{
        font-weight: bold;
    }
    @media screen and (max-width: 900px) {
        h2{
            font-size: 3rem;
        }
        margin-bottom: 1rem;
    }
`;
export const Image = styled.div`
    flex: 1;
    overflow: hidden;
    z-index: 2;
    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;
export const Hide = styled.div`
    overflow: hidden;
`