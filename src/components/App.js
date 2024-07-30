import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component imports
import GlobalStyles from "../GlobalStyles";
import NavBar from "./NavBar";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";

// helpers

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/about" element={<AboutMe />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
