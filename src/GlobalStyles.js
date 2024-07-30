import { createGlobalStyle } from "styled-components";
import keyframes from "styled-components";
const fadeIn = keyframes`
from { opacity: 0 } to {opacity: 1}
`;

const GlobalStyles = createGlobalStyle`
:root {
  margin: 5vh 30vw 5vh;
  font-family: 'Inconsolata';
  font-style: normal;
  font-weight: 200 900;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inconsolata/v32/QlddNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLyxq15Mjs.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}

nav {
  animation: 1s ${fadeIn} ease-out;
  font-size: 1em;
  display: flex;
  flex-direction: row;
  gap: 2vw;
  line-height: 0;
  justify-content: center;
}

img {
  width: 100%;
  height: 100%;
  border-style: double;
  border-width: 10px;
}

p {
  font-size: 1em;
  line-height: 1.6;
  margin-top: 5vh;
  margin-bottom: 5vh;
}

b {
  font-size: 1.25em;
}

form {
  animation: 1s ${fadeIn} ease-out;
  font-size: 1em; 
  line-height: 1.6;
  text-align: center;
  border-style: double;
  border-width: 10px;
  padding: 25px;
  margin-top: 5vh;
}

a {
padding: 20px;
}

@media screen and  (max-width: 600px) {
:root {
margin: 2.5vh 12.5vw 2.5vh;
}

nav {
gap: 0px;
line-height: 0;
font-size: 1em; 
flex-direction: column;
}

p {
  font-size: .75em;
} 

b {
  font-size: 1.25em;
}

section {
  flex-flow: column wrap;
}

form {
  padding: 5px;
  font-size: .75em;
}
}

@media screen and (max-width: 1024px) {
  :root {
    margin: 2.5vh 12.5vw 2.5vh;
}

nav {
  font-size: 1.5em; 
}

p {
  font-size: 1.5em;
} 

b {
  font-size: 2em;
}
}
`;

export default GlobalStyles;
