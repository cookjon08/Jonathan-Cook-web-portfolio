import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import ReactPlayer from "react-player";
import demo from "../assets/demo-gif.mp4";

const Projects = () => {
  const [player, setplayer] = useState(false);

  useEffect(() => {
    const triggerFadeIn = () => setplayer(true);
    setTimeout(triggerFadeIn, 1000);

    return () => {
      clearTimeout(triggerFadeIn);
    };
  });
  return (
    <>
      {player ? (
        <StyledDemo>
          <p>
            <b>{"Shown below"}</b>
            {
              " is a demo of a Tic-Tac-Toe app I built the player-name inputs, starting-player randomizer, and the game logic for. Here I demonstrate possible outcomes."
            }
          </p>
          <ReactPlayer
            url={demo}
            playing={true}
            loop={true}
            controls={true}
            width={"100%"}
            height={"100%"}
          />
        </StyledDemo>
      ) : (
        <></>
      )}
    </>
  );
};

const fadeIn = keyframes`
from { opacity: 0 } to {opacity: 1}
`;
const StyledDemo = styled.div`
  animation: 1s ${fadeIn} ease-out;
`;

export default Projects;
