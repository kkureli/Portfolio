import { Wave } from "react-animated-text";
import React from "react";

const AnimationMapper = () => {
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
  return <></>;
};

export default AnimationMapper;
