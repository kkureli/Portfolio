import React from "react";
import { Wave } from "react-animated-text";
import Card from "./CardComponent";
import { Route, Link } from "react-router-dom";
import style from "./About.module.css";

const About = React.memo(function About(props) {
  const ExampleOne = (text, delay) => (
    <Wave
      delay={delay}
      effectDuration={2}
      text={text}
      iterations={1}
      effect="verticalFadeIn"
      effectChange={2}
      effectDirection="up"
    />
  );

  return (
    <div className={style.about}>
      <div className={style.aboutHome}>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <span className={[style.inline, "wobble-skew"].join(" ")}>
                {ExampleOne("A", 1)}
              </span>
              <span className={[style.inline, "wobble-skew"].join(" ")}>
                {ExampleOne("b", 1.2)}
              </span>
              <span className={[style.inline, "wobble-skew"].join(" ")}>
                {ExampleOne("o", 1.3)}
              </span>
              <span className={[style.inline, "wobble-skew"].join(" ")}>
                {ExampleOne("u", 1.4)}
              </span>
              <span className={[style.inline, "wobble-skew"].join(" ")}>
                {ExampleOne("t ", 1.5)}
              </span>
              <span className={[style.inline, "wobble-skew"].join(" ")}>
                {ExampleOne("m", 1.8)}
              </span>
              <span className={[style.inline, "wobble-skew"].join(" ")}>
                {ExampleOne("e", 1.9)}
              </span>
              <div class="row">
                <div class="col">
                  <p>
                    Frontend web developer with a background in Mechatronics
                    Engineering. <br /> <br /> Enthusiastic coding bootcamp
                    graduate who poses comprehensive and practical knowledge of
                    latest programming technologies. <br /> <br /> Passionate
                    for frontend development opportunities.
                  </p>
                  <div>
                    <button type="button" className="btn btn-dark mb-3">
                      <a
                        style={{ color: "white" }}
                        target="__blank"
                        href="https://docs.google.com/document/d/e/2PACX-1vTmSXnfQtvmsmEAhUPhKXhhUAn1LpvXmJgowoa0DLWJ77FIGdsxcqR-P_lzJ6U6-cEfhezdio4Nr-Jb/pub"
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
