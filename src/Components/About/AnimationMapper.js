import { Wave } from "react-animated-text";
import React from "react";
import style from "./About.module.css";

const ExampleOne = (text, delay) => (
  <span className={[style.inline, "wobble-skew"].join(" ")}>
    <Wave
      delay={delay}
      effectDuration={2}
      text={text}
      iterations={1}
      effect="verticalFadeIn"
      effectChange={2}
      effectDirection="up"
    />
  </span>
);
const AnimationMapper = (props) => {
  return (
    props.letters &&
    props.letters.map((letter) => {
      return ExampleOne(letter.letter, letter.delay);
    })
  );
};

export default AnimationMapper;
