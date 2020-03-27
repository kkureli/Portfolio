import React, { Component } from "react";
import { Wave } from "react-animated-text";
import Card from "react-bootstrap/Card";
import style from "./Projects.module.css";
import cardStyle from "./cardStyle.css";
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

            <div class="row">
              <div class="col-xs-1-12 projectCard ">
                <div style={{ width: "540px" }} class="col-md-4 center-block">
                  <div style={{ width: "500px" }} class="section-box-ten">
                    <figure>
                      <h3>Mentorship</h3>
                      <ul>
                        <li>HTML/CSS</li>
                        <li>Vanilla JS</li>
                        <li>Firebase Auth and Firestore Database</li>
                      </ul>
                      <p>
                        Small website that allows you to find a Mentor/Mentee
                        with the time <br /> that suits you and connect with
                        them really easy
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
                      <a
                        target="__blank"
                        href="https://github.com/kkureli/mentorship"
                      >
                        Github Project Link
                      </a>
                    </figure>
                    <div style={{ width: "540px" }}>
                      <img
                        width="100%"
                        height="290px"
                        alt="mentor"
                        src={require("./mentorship.png")}
                        class="img-responsive"
                      />
                    </div>
                  </div>
                </div>
                {/* <Card
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
                </Card> */}
              </div>
              <div class="col-xs-1-12 projectCard">
                {/* <Card
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
                </Card> */}
                <div
                  style={{ width: "540px" }}
                  class="col-md-4 center-block projectCard"
                >
                  <div style={{ width: "500px" }} class="section-box-ten">
                    <figure>
                      <h3>Movie Explorer</h3>
                      <ul>
                        <li>HTML/CSS</li>
                        <li>Bootstrap</li>
                        <li>JS</li>
                        <li>ReactJS</li>
                      </ul>
                      <p>
                        This website using Movie Database API and keep update
                        always. <br /> Wrapped with bootstrap easy to use and
                        fast.
                      </p>
                      <p>
                        You can visit the website live{" "}
                        <span>
                          <a
                            target="__blank"
                            href="https://kkureli.github.io/MovieExplorer/"
                          >
                            here
                          </a>
                        </span>{" "}
                      </p>
                      <a
                        target="__blank"
                        href="https://github.com/kkureli/MovieExplorer"
                      >
                        Github Project Link
                      </a>
                    </figure>
                    <div style={{ width: "540px" }}>
                      <img
                        width="100%"
                        height="290px"
                        alt="mentor"
                        src={require("./movie-explorer.png")}
                        class="img-responsive"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-1-12">
                {/* <Card
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
                </Card> */}

                <div
                  style={{
                    marginTop: "20px",
                    width: "540px"
                  }}
                  class="col-md-4 center-block projectCard"
                >
                  <div style={{ width: "500px" }} class="section-box-ten">
                    <figure>
                      <h3>Burger Builder & Order (Demo)</h3>
                      <p>
                        The Burger Builder is a React application designed as
                        part of <br /> learning React.js. This application is a
                        simulated food ordering app <br /> that utilizes React,
                        Firebase, Redux, and Axios to allow users to <br />{" "}
                        sign-up and order burgers. <br /> <br />
                        <span style={{ fontStyle: "italic" }}>
                          Not finished, working on..{" "}
                        </span>
                      </p>
                      <p>
                        You can visit the website live{" "}
                        <span>
                          <a
                            target="__blank"
                            href="https://kkureli.github.io/BurgerBuilder/"
                          >
                            here
                          </a>
                        </span>{" "}
                      </p>
                      <a
                        target="__blank"
                        href="https://github.com/kkureli/BurgerBuilder"
                      >
                        Github Project Link
                      </a>
                    </figure>
                    <div style={{ width: "540px" }}>
                      <img
                        width="100%"
                        height="290px"
                        alt="mentor"
                        src={require("./burger.png")}
                        class="img-responsive"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ marginTop: "20px", width: "540px" }}
                class="col-xs-1-12 "
              >
                <div
                  style={{ width: "540px", marginBottom: "35px" }}
                  class="col-md-4 center-block"
                >
                  <div style={{ width: "500px" }} class="section-box-ten">
                    <figure>
                      <h3>Pizza Form (Demo)</h3>
                      {/* <ul>
                        <li>HTML/CSS</li>
                        <li>JS</li>
                        <li>MaterialUI</li>
                        <li>ReactJS</li>
                      </ul> */}
                      <p>
                        This is a project that for get and update order for
                        pizza restaurant. <br /> This web application connect
                        with virtual database and keep every <br /> updates. The
                        database of orders can be found in a json-server, <br />{" "}
                        under http://localhost:3000/pizzas.{" "}
                        <span style={{ fontStyle: "italic" }}>
                          Make sure that before you fire up <br /> your React
                          server, you first fire up your json-server.
                        </span>
                      </p>
                      <p>
                        You can visit the website live{" "}
                        <span>
                          <a
                            target="__blank"
                            href="https://kkureli.github.io/React-Pizza-updated/"
                          >
                            here
                          </a>
                        </span>{" "}
                      </p>
                      <a
                        target="__blank"
                        href="https://github.com/kkureli/React-Pizza-updated"
                      >
                        Github Project Link
                      </a>
                    </figure>
                    <div style={{ width: "540px" }}>
                      <img
                        width="100%"
                        height="290px"
                        alt="mentor"
                        src={require("./pizza.gif")}
                        class="img-responsive"
                      />
                    </div>
                  </div>
                </div>
                {/* <Card
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
                </Card> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Projects;
