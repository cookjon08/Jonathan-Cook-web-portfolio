import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [navBar, setnavBar] = useState(false);

  useEffect(() => {
    const triggerFadeIn = () => setnavBar(true);
    setTimeout(triggerFadeIn, 1000);

    return () => {
      clearTimeout(triggerFadeIn);
    };
  });

  return (
    <>
      {navBar ? (
        <nav>
          <NavLink key="hero" to="/">
            Home{" "}
          </NavLink>
          <NavLink key="about" to="/about">
            About{" "}
          </NavLink>
          <NavLink key="projects" to="/projects">
            Projects{" "}
          </NavLink>
          <NavLink key="contact" to="/contact">
            Contact{" "}
          </NavLink>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
};

export default NavBar;
