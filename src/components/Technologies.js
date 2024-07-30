import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNodeJs,
  faReact,
  faJs,
  faCss3,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";

const Technologies = () => {
  const [technologies, settechnologies] = useState(false);

  useEffect(() => {
    const triggerFadeIn = () => settechnologies(true);
    setTimeout(triggerFadeIn, 1000);

    return () => {
      clearTimeout(triggerFadeIn);
    };
  });

  return (
    <>
      {technologies ? (
        <section
          style={{
            display: "flex",
            alignItems: "center",
            borderStyle: "double",
            borderWidth: "10px",
            padding: "10px",
          }}
        >
          <h2>{"Technologies"}</h2>
          <StyledSection>
            <FontAwesomeIcon icon={faHtml5} size="2xl" alt="HTML icon" />{" "}
            {"HTML5 "}
          </StyledSection>
          <StyledSection>
            <FontAwesomeIcon icon={faCss3} size="2xl" alt="CSS icon" />{" "}
            {"CSS3 "}
          </StyledSection>
          <StyledSection>
            <FontAwesomeIcon icon={faJs} size="2xl" alt="Javascript icon" />{" "}
            {"Javascript "}
          </StyledSection>
          <StyledSection>
            <FontAwesomeIcon icon={faNodeJs} size="2xl" alt="NodeJs icon" />{" "}
            {"NodeJs "}
          </StyledSection>
          <StyledSection>
            <FontAwesomeIcon icon={faReact} size="2xl" alt="React icon" />{" "}
            {"React "}
          </StyledSection>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

const fadeIn = keyframes`
from { opacity: 0 } to {opacity: 1}
`;

const StyledSection = styled.section`
  animation: 1s ${fadeIn} ease-out;
  padding: 10px;
`;

export default Technologies;
