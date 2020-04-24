import React, { useState } from "react";
// import Modal from "./Modal";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalBody from "react-bootstrap/ModalBody";
import ModalTitle from "react-bootstrap/ModalTitle";
export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const [show, setShow] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setShow(true);

    const templateParams = {
      to_name: "Kaan",
      from_name: name,
      message_html: content,
      sender_email: email
    };

    const templateId = "template_440GqIk0";

    window.emailjs.send(
      "default_service", // default email provider in your EmailJS account
      templateId,
      templateParams
    );
  };

  const handleChangeName = e => {
    setName(e.target.value);
  };
  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };
  const handleChangeContent = e => {
    setContent(e.target.value);
  };

  const handleClose = () => setShow(false);

  return (
    <div>
      <form onSubmit={event => handleSubmit(event)}>
        <div class="card border-dark rounded-3">
          <div class="card-header p-0">
            <div class="bg-dark text-white text-center py-2">
              <h3>
                <i class="fa fa-envelope"></i> Contact
              </h3>
            </div>
          </div>
          <div class="card-body p-3"></div>
          <div class="form-group">
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <i class="fa fa-user text-info"></i>
                </div>
              </div>
              <input
                onChange={event => handleChangeName(event)}
                type="text"
                class="form-control"
                id="name"
                name="name"
                placeholder="Name Surname"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <i class="fa fa-envelope text-info"></i>
                </div>
              </div>
              <input
                onChange={event => handleChangeEmail(event)}
                type="email"
                class="form-control"
                id="email"
                name="email"
                placeholder="name@gmail.com"
                required
              />
            </div>
          </div>

          <div class="form-group">
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <i class="fa fa-comment text-info"></i>
                </div>
              </div>
              <textarea
                onChange={event => handleChangeContent(event)}
                class="form-control"
                placeholder="Message"
                required
              ></textarea>
            </div>
          </div>
          <div class="text-center">
            <button
              type="submit"
              class="btn btn-dark text-white rounded-0 "
              style={{ width: "100%" }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <ModalTitle>
            <p style={{ color: "red" }}>Attention Please!</p>{" "}
          </ModalTitle>
        </Modal.Header>
        <ModalBody>
          <p style={{ color: "black" }}>Woohoo, your message was sent! </p>{" "}
        </ModalBody>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>{" "}
    </div>
  );
}
