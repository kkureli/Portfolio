import React from "react";
import style from "./Projects.module.css";
import Row from "react-bootstrap/Row";
import ListProjects from "./ListProjects.js";
import Mapper from "./ProjectsMapper/ProjectsMapper";
import Animation from "./AnimationMapper";
import Letters from "./LettersList.js";
const Projects = React.memo(function Projects(props) {
  return (
    <div className={style.home}>
      <div class="container">
        <div class="row">
          <div class="col">
            <Animation letters={Letters}></Animation>
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
