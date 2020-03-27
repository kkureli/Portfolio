import React, { useState } from "react";
import style from "./style.module.css";
import { Route, Link } from "react-router-dom";

const Navbar = props => {
  let home = false;
  let contact = false;
  let about = false;
  let projects = false;

  const [loaded, setLoaded] = useState(true);

  window.onload = function() {
    setLoaded(false);
  };

  if (props.history.location.pathname === "/home") {
    home = true;
  } else if (props.history.location.pathname === "/about") {
    about = true;
  } else if (props.history.location.pathname === "/contact") {
    contact = true;
  } else if (props.history.location.pathname === "/projects") {
    projects = true;
  }
  // Example("spinningBubbles", "red");
  if ({ loaded }.loaded === true) {
    return (
      <div
        style={{
          marginLeft: "-50px",
          position: "absolute",
          left: "50%",
          display: "flex",
          alignItems: "center",
          marginTop: "20%",
          zIndex: "200",
          width: "60px"
        }}
      >
        <img src={require("./831.png")} alt="" />
      </div>
    );
  } else {
    return (
      <div className={style.Nav}>
        <ul className={style.bar}>
          <li>
            <Link to="/home">
              {" "}
              <img
                className={style.logo}
                src={require("./kg-happy.png")}
                alt=""
                srcset=""
              />
            </Link>
          </li>
          <li>
            <Link to="/home">
              <img
                alt={"home"}
                className={`${home ? style.iconPath : ""} ${style.homeIcon} ${
                  style.icons
                } `}
                src={require("./download.png")}
              />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <img
                alt="about"
                className={`${about ? style.iconPath : ""} ${style.icons} `}
                src={require("./icons8-person-64.png")}
              />
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <img
                alt="projects"
                className={`${projects ? style.iconPath : ""} ${style.icons} `}
                src={require("./skills.png")}
              />
            </Link>
          </li>

          <li>
            <Link to="/contact">
              <img
                alt="contact"
                className={`${contact ? style.iconPath : ""} ${style.icons} `}
                src={require("./contact.png")}
              />
            </Link>
          </li>
          <div className={style.social}>
            <li>
              <a
                target="__blank"
                href="https://www.linkedin.com/in/kaankureli/"
              >
                <img
                  alt="contact"
                  className={style.icons}
                  src={require("./link.png")}
                />
              </a>
            </li>
            <li>
              <a target="__blank" href="https://www.github.com/kkureli/">
                <img
                  alt="contact"
                  className={style.icons}
                  src={require("./git.png")}
                />
              </a>
            </li>
          </div>
        </ul>
      </div>
    );
  }
};
export default Navbar;
