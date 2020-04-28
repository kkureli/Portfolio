import React from "react";
import style from "./Contact.module.css";
import { Wave } from "react-animated-text";
import Maps from "./Maps";
import Form from "./Form";
import AnimationMapper from "./AnimationMapper";
import Letters from "./LettersList";
const Contact = React.memo(function Contact(props) {
  return (
    <div className={style.home}>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <AnimationMapper letters={Letters}></AnimationMapper>
            <div>
              <p>
                I am interested in freelance, remote or full-time opportunities
                and projects. However, if you have other request or question,
                don’t hesitate to contact me using below form either.
              </p>
            </div>
            <div class="col p-0">
              <Form></Form>
            </div>
          </div>
          <div style={{ zIndex: "50" }} class="col-md-6 ">
            <p className={style.maps}>
              <Maps></Maps>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
