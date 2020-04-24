import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalBody from "react-bootstrap/ModalBody";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from "react-bootstrap/Button";

export default function Example(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
