import React from "react";
import Card from "./CardComponent";
import style from "./About.module.css";
import "./About.css";
import Letters from "./LettersList";
import AnimationMapper from "./AnimationMapper";

const About = React.memo(function About(props) {
  return (
    <div className={style.about}>
      <div className={style.aboutHome}>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <AnimationMapper letters={Letters}></AnimationMapper>
              <div class="row">
                <div class="col">
                  <p>
                    Web developer with a passion for working and collaborating
                    with other developers to enhance web development together by
                    bringing meaningful and compelling websites to users.
                  </p>
                  <p>
                    Enthusiastic coding bootcamp graduate who possesses
                    comprehensive and practical knowledge of latest programming
                    technologies with experience in HTML, CSS, JavaScript,
                    ReactJS and NodeJS. MERN Stack Developer in backend with
                    GraphQL.
                  </p>
                  <div>
                    <button type="button" className="btn btn-dark mb-3 cvBtn">
                      <a
                        style={{ color: "white" }}
                        target="__blank"
                        href="https://docs.google.com/document/d/e/2PACX-1vQXx4WqKXIKEJolY66HKDT4VnQIr47Jm1-o5fyWU75KeqxI9Eu13nBG47h6ZZlDVtfysp3V4toDDkU8/pub"
                      >
                        Click for CV
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ zIndex: "50" }} class="col">
              <Card></Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
