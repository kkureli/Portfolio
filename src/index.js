import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/Home/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Cv from "./Components/About/Pdf";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";

ReactDOM.render(
  <Router>
    <Route render={props => <Navbar {...props} />} />

    <Route exact path="/" render={props => <App {...props} />} />
    <Route exact path="/home" render={props => <App {...props} />} />
    <Route exact path="/about" component={About} />
    <Route exact path="/cv" component={Cv} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/projects" component={Projects} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
