import React, { Component } from "react";
import { Wave } from "react-animated-text";
import Card from "react-bootstrap/Card";
import style from "./Projects.module.css";
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
              Here is a list of the projects I have done by myself or with a
              team.
            </p>
            <div class="row">
              <div class="col-xs-1-12 ">
                <Card
                  className={"m-2"}
                  bg={"dark"}
                  text={"white"}
                  style={{ width: "18rem" }}
                >
                  <Card.Body>
                    <Card.Title>
                      <h3 style={{ color: "red" }}>Mentorship</h3>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 ">
                      <ul>
                        <li>HTML/CSS</li>
                        <li>Vanilla JS</li>
                        <li>Firebase Auth and Firestore Database</li>
                      </ul>
                    </Card.Subtitle>
                    <Card.Text>
                      <p>
                        Small website that allows you to find a Mentor/Mentee
                        with the time that suits you and connect with them
                        really easy
                      </p>
                      <p>
                        You can visit the website live{" "}
                        <span>
                          <a
                            target="__blank"
                            href="https://osamaakb.github.io/mentorship/"
                          >
                            here
                          </a>
                        </span>{" "}
                      </p>
                      <span style={{ fontStyle: "italic" }}>
                        This website was developed by the students of the
                        recoded bootcamp in Istanbul/Turkey
                      </span>
                    </Card.Text>
                    <Card.Link
                      target="__blank"
                      href="https://github.com/kkureli/mentorship"
                    >
                      <button mb-0 p-0 type="button" class="btn btn-danger">
                        <span style={{ color: "black" }}>Go To Project</span>
                      </button>
                    </Card.Link>
                  </Card.Body>
                </Card>
              </div>
              <div class="col-xs-1-12">
                <Card
                  className={"m-2"}
                  bg={"dark"}
                  text={"white"}
                  style={{ width: "18rem" }}
                >
                  <Card.Body>
                    <Card.Title>
                      <h3 style={{ color: "red" }}>Pizza Form</h3>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 ">
                      <ul>
                        <li>HTML/CSS</li>
                        <li>JS</li>
                        <li>MaterialUI</li>
                        <li>ReactJS</li>
                      </ul>
                    </Card.Subtitle>
                    <Card.Text>
                      This is a project that for get and update order for pizza
                      restaurant. It' not a real project. This web application
                      connect with virtual database and keep every updates.
                    </Card.Text>
                    <Card.Link
                      target="__blank"
                      href="https://github.com/kkureli/React-Pizza"
                    >
                      <button mb-0 p-0 type="button" class="btn btn-danger">
                        <span style={{ color: "black" }}>Go To Project</span>
                      </button>
                    </Card.Link>
                  </Card.Body>
                </Card>
              </div>
              <div class="col-xs-1-12">
                <Card
                  className={"m-2"}
                  bg={"dark"}
                  text={"white"}
                  style={{ width: "18rem" }}
                >
                  <Card.Body>
                    <Card.Title>
                      <h3 style={{ color: "red" }}>Basic Movie Website</h3>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 ">
                      <ul>
                        <li>HTML/CSS</li>
                        <li>JS</li>
                        <li>ReactJS</li>
                      </ul>
                    </Card.Subtitle>
                    <Card.Text>
                      <p>
                        This website using Movie Database API and keep update
                        always. Wrapped with bootstrap easy to use and fast. It
                        can improve and add more functionalty if needed.
                      </p>
                    </Card.Text>
                    <Card.Link
                      target="__blank"
                      href="https://github.com/kkureli/movie-explorer"
                    >
                      <button mb-0 p-0 type="button" class="btn btn-danger">
                        <span style={{ color: "black" }}>Go To Project</span>
                      </button>
                    </Card.Link>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Projects;
