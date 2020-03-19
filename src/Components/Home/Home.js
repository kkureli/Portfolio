import React from "react";
import Button from "react-bootstrap/Button";
import { Wave } from "react-animated-text";
import style from "./Home.module.css";
import ReactTextRotator from "react-text-rotator";
import SpinningCube from "./Pyramid/SpinningCube";
import Drop from "./ColorDropDown";
import Music from "./Music/Music";
const content = [
  {
    text: "react",
    className: style.classA,
    animation: "fade"
  },
  {
    text: "web",
    className: style.classB,
    animation: "fade"
  },
  {
    text: "javascript",
    className: style.classC,
    animation: "fade"
  }
];

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

const Home = props => {
  return (
    <div>
      {console.log(props)}{" "}
      <div>
        <div className={style.dropDown}>
          <Drop></Drop>
        </div>
      </div>
      <code className={style.bodyOcode}>&lt;body&gt;</code>
      <div>
        <code className={style.h1Ocode}>&lt;h1&gt;</code>
      </div>
      <SpinningCube></SpinningCube>
      <div className={style.home}>
        <div className={style.line}>
          <span className={[style.inline, "wobble-skew"].join(" ")}>
            {ExampleOne("H", 1)}
          </span>
          <span className={[style.inline, "wobble-skew"].join(" ")}>
            {ExampleOne("i", 1.5)}
          </span>
          <span className={[style.inline, "wobble-skew"].join(" ")}>
            {ExampleOne(", ", 2)}
          </span>
        </div>

        <div>
          <span className={[style.inline, "wobble-skew"].join(" ")}>
            {ExampleOne("I", 1)}
          </span>
          <span className={[style.inline, "wobble-skew"].join(" ")}>
            {ExampleOne("'", 1.5)}
          </span>
          <span className={[style.inline, "wobble-skew"].join(" ")}>
            {ExampleOne("m ", 2)}
          </span>
          <img
            style={{ marginLeft: "3px" }}
            className={`${style.inline} ${style.bigK}`}
            width={"50px"}
            src={require("./kg-happy.png")}
            alt=""
          />
          <span className={[style.inline, "wobble-skew"].join(" ")}>
            {ExampleOne("a", 1)}
          </span>
          <span className={[style.inline, "wobble-skew"].join(" ")}>
            {ExampleOne("a", 1.5)}
          </span>
          <span className={[style.inline, "wobble-skew"].join(" ")}>
            {ExampleOne("n", 1.7)}
          </span>
          <span className={[style.inline, "wobble-skew"].join(" ")}>
            {ExampleOne(",", 1.8)}
          </span>
        </div>
        <div>
          <span>
            <ReactTextRotator content={content} time={3000} startDelay={1500} />
          </span>
          <div>
            <span className={[style.inline, "wobble-skew"].join(" ")}>
              {ExampleOne("d", 1)}
            </span>
            <span className={[style.inline, "wobble-skew"].join(" ")}>
              {ExampleOne("e", 1.2)}
            </span>
            <span className={[style.inline, "wobble-skew"].join(" ")}>
              {ExampleOne("v", 1.4)}
            </span>
            <span className={[style.inline, "wobble-skew"].join(" ")}>
              {ExampleOne("e", 1.5)}
            </span>
            <span className={[style.inline, "wobble-skew"].join(" ")}>
              {ExampleOne("l", 1.6)}
            </span>
            <span
              style={{ "padding-left": "3px" }}
              className={[style.inline, "wobble-skew"].join(" ")}
            >
              {ExampleOne("o", 1.8)}
            </span>
            <span className={[style.inline, "wobble-skew"].join(" ")}>
              {ExampleOne("p", 1.9)}
            </span>
            <span className={[style.inline, "wobble-skew"].join(" ")}>
              {ExampleOne("e", 2)}
            </span>
            <span className={[style.inline, "wobble-skew"].join(" ")}>
              {ExampleOne("r", 2)}
            </span>
            <span className={[style.inline, "wobble-skew"].join(" ")}>
              {ExampleOne(".", 2)}{" "}
            </span>
            <code className={style.h1Ccode}>&lt;h1&gt;</code>
          </div>
        </div>
        <h2 className={[style.underText].join(" ")}>
          Front End Web Developer / Freelancer
        </h2>
        <div>
          <a href="./contact">
            {" "}
            <Button variant="danger">CONTACT ME</Button>
          </a>
        </div>
      </div>
      <code className={style.codyCcode}>&lt;/ body&gt;</code>
      <div>
        <code className={style.htmlCcode}>&lt;/ html&gt;</code>
      </div>
      <Music></Music>
    </div>
  );
};

export default Home;
