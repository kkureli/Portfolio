import React, { useContext } from "react";
import { Switch, Route, __RouterContext } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import App from "./Components/Home/App";
const Main = () => {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    // config: { duration: 300 }
  });

  return (
    <>
      <Route render={(props) => <Navbar {...props} />} />
      {/* <main className="container-fluid"> */}
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path="/" render={(props) => <App {...props} />} />
            <Route exact path="/home" render={(props) => <App {...props} />} />
            <Route exact path="/about" render={() => <About />} />
            <Route exact path="/contact" render={() => <Contact />} />
            <Route exact path="/projects" render={() => <Projects />} />
            <Route
              render={() => (
                <div
                  style={{
                    position: "absolute",
                    marginLeft: "30%",
                    color: "red",
                    marginTop: "5%",
                  }}
                >
                  <h1>
                    Not found. Please go to{" "}
                    <a href="https://kkureli.github.io/Portfolio/">Homepage</a>
                  </h1>
                </div>
              )}
            />
          </Switch>
        </animated.div>
      ))}
      {/* </main> */}
    </>
  );
};

export default Main;
