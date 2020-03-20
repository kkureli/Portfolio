import React, { Component } from "react";
import axios from "axios";
import style from "./Projects.module.css";
import { Wave } from "react-animated-text";
import Card from "react-bootstrap/Card";

export class Projects extends Component {
  ExampleOne = (text, delay) => (
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
  state = { projects: [1, 2, 3] };
  newProjects = [];
  componentDidMount() {
    return axios
      .get(`https://api.github.com/users/kkureli/repos`)
      .then(repos => {
        repos.data.slice(24).map(data => {
          return this.newProjects.push(data);
        });
        this.setState({ projects: this.newProjects });
      })
      .catch(err => {
        throw err;
      });
  }

  mapProjects = () => {
    return this.state.projects.map(project => {
      console.log(project.title);

      return (
        <div class="col-xs-1-12">
          <Card
            className={"m-2"}
            bg={"dark"}
            text={"white"}
            style={{ width: "18rem" }}
          >
            <Card.Body>
              <Card.Title>
                <h3>Project Title: </h3> {project.name}
              </Card.Title>
              <Card.Subtitle className="mb-2 ">
                Made by {project.language}
              </Card.Subtitle>
              <Card.Text></Card.Text>
              <Card.Link target="__blank" href={project.html_url}>
                <button mb-0 p-0 type="button" class="btn btn-danger">
                  <span style={{ color: "black" }}>Go To Project</span>
                </button>
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
      );
    });
  };
  render() {
    return (
      <div style={{ height: "0" }}>
        <div className={style.home}>
          <div class="container">
            <div class="row">
              <div class="col">
                <span className={[style.inline, "wobble-skew"].join(" ")}>
                  {this.ExampleOne("P", 1)}
                </span>
                <span className={[style.inline, "wobble-skew"].join(" ")}>
                  {this.ExampleOne("r", 1.2)}
                </span>
                <span className={[style.inline, "wobble-skew"].join(" ")}>
                  {this.ExampleOne("o", 1.3)}
                </span>
                <span className={[style.inline, "wobble-skew"].join(" ")}>
                  {this.ExampleOne("j", 1.4)}
                </span>
                <span className={[style.inline, "wobble-skew"].join(" ")}>
                  {this.ExampleOne("e", 1.5)}
                </span>
                <span className={[style.inline, "wobble-skew"].join(" ")}>
                  {this.ExampleOne("c", 1.6)}
                </span>
                <span className={[style.inline, "wobble-skew"].join(" ")}>
                  {this.ExampleOne("t", 1.8)}
                </span>
                <span className={[style.inline, "wobble-skew"].join(" ")}>
                  {this.ExampleOne("s", 1.9)}
                </span>
                <div class="row">{this.mapProjects()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
