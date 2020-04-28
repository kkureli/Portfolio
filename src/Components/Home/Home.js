import React from "react";
import Button from "react-bootstrap/Button";
import style from "./Home.module.css";
import ReactTextRotator from "react-text-rotator";
import SpinningCube from "./Pyramid/SpinningCube";
import Drop from "./ColorDropDown";
import Music from "./Music/Music";
import { Link } from "react-router-dom";
import "./homeStyle.css";
import AnimationMapper from "./AnimationMapper";
import { HI_LETTERS, IAM, NAME, DEVELOPER } from "./LettersList";

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
          <AnimationMapper letters={HI_LETTERS}></AnimationMapper>
        </div>

        <div>
          <AnimationMapper letters={IAM}></AnimationMapper>
          <img
            style={{ marginLeft: "3px" }}
            className={`${style.inline} ${style.bigK}`}
            width={"50px"}
            src={require("./kg-happy.png")}
            alt=""
          />
          <AnimationMapper letters={NAME}></AnimationMapper>
        </div>
        <div>
          <span className={style.rotator}>
            <ReactTextRotator content={content} time={3000} startDelay={1500} />
          </span>
          <div>
            <AnimationMapper letters={DEVELOPER}></AnimationMapper>
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

export default Home;
