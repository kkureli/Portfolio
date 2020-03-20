import React from "react";
import style from "./App.module.css";
import Home from "./Home";
// Wrapp the aplication with the navigation Provider passing down the current page slug.
export default function App(props) {
  return (
    <div>
      {console.log(props)} {/* <Nav></Nav> */}
      <div className={style.home}>
        <Home></Home>
      </div>
    </div>
  );
}
