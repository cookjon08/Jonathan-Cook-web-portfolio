import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import handleImages from "../helpers/handleImages";

const Hero = () => {
  const [hero, setHero] = useState(false);

  useEffect(() => {
    const triggerFadeIn = () => setHero(true);
    setTimeout(triggerFadeIn, 1000);

    return () => {
      clearTimeout(triggerFadeIn);
    };
  });

  return (
    <>
      {hero ? (
        <>
          <StyledHero>
            <p>
              <b>Hey there,</b> welcome to my portfolio. My name is Jonathan
              Cook, and I am a full-stack web developer based in Montreal.
            </p>
            <img alt="Site's author" src={handleImages()}></img>
          </StyledHero>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

const fadeIn = keyframes`
from { opacity: 0 } to {opacity: 1}
`;
const StyledHero = styled.div`
  animation: 0.75s ${fadeIn} ease-out;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

export default Hero;
