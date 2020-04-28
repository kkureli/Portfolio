import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Wave } from "react-animated-text";
import style from "./Home.module.css";
import ReactTextRotator from "react-text-rotator";
import SpinningCube from "./Pyramid/SpinningCube";
import Drop from "./ColorDropDown";
import Music from "./Music/Music";
import { Route, Link } from "react-router-dom";
import "./homeStyle.css";
const content = [
  {
    text: "react",
    className: style.classA,
    animation: "fade",
  },
  {
    text: "web",
    className: style.classB,
    animation: "fade",
  },
  {
    text: "javascript",
    className: style.classC,
    animation: "fade",
  },
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

const Home = React.memo(function Home(props) {
  let hidden = false;

  const musicButton = () => {
    const player = document.getElementById("player");

    if (hidden === true) {
      hidden = false;
      player.classList.add("Home_hidden__1rETE");
    } else {
      player.classList.remove("Home_hidden__1rETE");
      hidden = true;
    }
  };

  return (
    <div className={style.homePage}>
      <div>
        <div className={style.dropDown}>
          <Drop></Drop>
        </div>
      </div>
      <code className={style.bodyOcode}>&lt;body&gt;</code>
      <div>
        <code className={style.h1Ocode}>&lt;h1&gt;</code>
      </div>
      <span className={style.cube}>
        <SpinningCube></SpinningCube>
      </span>
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
          <span className={style.rotator}>
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
        <div className="contactMeDiv">
          <Link to="./contact">
            <Button variant="outline-danger contactHomeBtn" className="p-2 ">
              CONTACT ME
            </Button>
          </Link>
        </div>
      </div>
      <code className={style.codyCcode}>&lt;/ body&gt;</code>
      <div>
        <code className={style.htmlCcode}>&lt;/ html&gt;</code>
      </div>
      <button
        id="playerBtn"
        onClick={() => musicButton()}
        style={{
          zIndex: 20012,
          position: "absolute",
          bottom: "0px",
          left: "-48.2%",
        }}
        type="button"
        class="btn btn-danger p-0 m-0 soundBtn"
      >
        <img
          style={{ zIndex: 20012 }}
          width="44px"
          alt="music"
          src="https://img.icons8.com/wired/64/000000/music.png"
        />
      </button>
      <div
        id="player"
        className={`${hidden ? " " : style.hidden} ${style.music} `}
      >
        {" "}
        <span>
          <Music></Music>
        </span>
      </div>
    </div>
  );
});

// const comprasionFn = function(prevState, nextState) {
//   console.log("prev", prevState);
//   console.log("next", nextState);
// };

// export default React.memo(Home, comprasionFn);
export default Home;
