import Technologies from "./Technologies";
import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";

const AboutMe = () => {
  const [aboutMe, setaboutMe] = useState(false);

  useEffect(() => {
    const triggerFadeIn = () => setaboutMe(true);
    setTimeout(triggerFadeIn, 1000);

    return () => {
      clearTimeout(triggerFadeIn);
    };
  });
  return (
    <>
      {aboutMe ? (
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
          }}
        >
          <StyledP>
            <b>{"Born and raised"}</b>{" "}
            {
              "in New Jersey, I moved to Montreal in 2014 to pursue an education at Concordia University to study journalism. Notably, I was editor-in-chief at The Link Newspaper, received national nominations for best writing in two categories, and freelanced for publications such as Vice Sports and The Montreal Gazette. My programming career began in February 2024 through the Concordia University Full-Stack Web Development Bootcamp."
            }
          </StyledP>
          <Technologies />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

const fadeIn = keyframes`
from { opacity: 0 } to {opacity: 1}
`;
const StyledP = styled.p`
  animation: 0.25s ${fadeIn} ease-out;
`;

export default AboutMe;
