import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/Home/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { AnimatedSwitch } from "react-router-transition";

import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Cv from "./Components/About/Pdf";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
// import { PageTransition } from "@steveeeie/react-page-transition";

ReactDOM.render(
  <Router basename={"Portfolio"}>
    <Route render={props => <Navbar {...props} />} />
    <Switch>
      <Route exact path="/" render={props => <App {...props} />} />
      <Route exact path="/home" render={props => <App {...props} />} />
      <Route exact path="/about" component={About} />
      <Route exact path="/cv" component={Cv} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/projects" component={Projects} />
    </Switch>
  </Router>,
  //   <BrowserRouter>
  //   <Route
  //     render={({ location }) => (
  //       <PageTransition
  //         preset="moveToLeftFromRight"
  //         transitionKey={location.pathname}
  //       >
  //         <Switch location={location}>
  //           <Route to="/home" component={Home} />
  //           <Route to="/about" component={About} />
  //         </Switch>
  //       </PageTransition>
  //     )}
  //   />
  // </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
