import React, { useRef } from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
// import Home from "../Home/Home";
// import AboutMe from "../AboutMe/AboutMe";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <span className={classes.name}>kavya mandla</span>
      <ul>
        <li>
          <a href="/aboutme">About Me</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact Me</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
