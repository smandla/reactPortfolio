import React, { useRef } from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
// import Home from "../Home/Home";
// import AboutMe from "../AboutMe/AboutMe";
import classes from "./Header.module.css";

const Header = (props) => {
  const aboutme = useRef(null);
  const portfolio = useRef(null);
  const contactme = useRef(null);

  const scrollToComp = (comp) => {
    window.scrollTo({
      top: comp.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <header className={classes.header}>
      <span className={classes.name}>kavya mandla</span>
      <ul>
        <li onClick={() => scrollToComp(aboutme)}>
          About Me
          {/* <a href="/aboutme"></a> */}
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact Me</a>
        </li>
        <li>
          <a href="#">Resume</a>
        </li>
        {/* <li>
          <a href="/hireme">Hire Me</a>
        </li> */}
      </ul>
    </header>
  );
};

export default Header;
