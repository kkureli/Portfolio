import React from "react";
import Col from "react-bootstrap/Col";
import "./cardStyle.css";

const Mapper = (props) => {
  const { projects } = props;
  return (
    projects &&
    projects.map((project) => {
      return (
        <Col className="mb-3" key={project.title} lg={6}>
          <div
            style={{ width: "95%", height: "300px" }}
            class="section-box-ten"
          >
            <figure>
              <h3 className="projectTitle">{project.title}</h3>
              <ul className="projectsList">
                {project.techs.map((tech) => {
                  return <li>{tech}</li>;
                })}
              </ul>
              <div className="projectDesc">
                {project.desc}
                {project.br &&
                  project.br.map((text) => {
                    return (
                      <span>
                        <br />
                        {text}
                      </span>
                    );
                  })}
              </div>

              {project.basic ? (
                <div>
                  <p>
                    <span> Basic: You can visit the website live </span>
                    <a target="__blank" href={project.basicDemo}>
                      here | <a href={project.basic}>Github Repo</a>
                    </a>
                  </p>
                  <p>
                    <span> Advanced: You can visit the website live </span>
                    <a target="__blank" href={project.advancedDemo}>
                      here | <a href={project.advanced}>Github Repo</a>
                    </a>
                  </p>
                </div>
              ) : (
                <div>
                  <p>
                    You can visit the website live{" "}
                    <a target="__blank" href={project.demoLink}>
                      here
                    </a>
                  </p>
                  <p>
                    <a target="__blank" href={project.githubLink}>
                      Github Repo
                    </a>
                    {project.private ? (
                      <span style={{ color: "red" }}>*Private Repo</span>
                    ) : null}
                  </p>
                </div>
              )}
            </figure>
            <div style={{ width: "540px" }}>
              <img
                width="100%"
                height="290px"
                alt={project.title}
                src={project.image}
                class="img-responsive"
              />
            </div>
          </div>
        </Col>
      );
    })
  );
};

export default Mapper;
