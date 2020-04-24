import React from "react";
import { Wave } from "react-animated-text";
import style from "./Projects.module.css";
import Row from "react-bootstrap/Row";
import ListProjects from "./ListProjects.js";
import Mapper from "./ProjectsMapper/ProjectsMapper";
const Projects = React.memo(function Projects(props) {
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
    <div className={style.home}>
      <div class="container">
        <div class="row">
          <div class="col">
            <span
              style={{ marginLeft: "0" }}
              className={[style.inline, "wobble-skew"].join(" ")}
            >
              {ExampleOne("P", 1)}
            </span>
            <span className={[style.inline, "wobble-skew"].join(" ")}>
              {ExampleOne("r", 1.2)}
            </span>
            <span className={[style.inline, "wobble-skew"].join(" ")}>
              {ExampleOne("o", 1.3)}
            </span>
            <span className={[style.inline, "wobble-skew"].join(" ")}>
              {ExampleOne("j", 1.4)}
            </span>
            <span className={[style.inline, "wobble-skew"].join(" ")}>
              {ExampleOne("e", 1.5)}
            </span>
            <span className={[style.inline, "wobble-skew"].join(" ")}>
              {ExampleOne("c", 1.6)}
            </span>
            <span className={[style.inline, "wobble-skew"].join(" ")}>
              {ExampleOne("t", 1.8)}
            </span>
            <span className={[style.inline, "wobble-skew"].join(" ")}>
              {ExampleOne("s", 1.9)}
            </span>
            <p>
              Here is a list of the some of the projects I have done by myself
              or a team.
            </p>
          </div>
        </div>

        <div className="projects">
          <Row>
            <Mapper projects={ListProjects}></Mapper>
          </Row>
        </div>
      </div>
    </div>
  );
});
export default Projects;
