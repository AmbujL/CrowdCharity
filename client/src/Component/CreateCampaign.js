import React, { useState } from "react";
import { Form, Button, Modal, FloatingLabel, Container } from "react-bootstrap";

export default function CreateCampaign({ prop,show,resetShow }) {
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [title, setTittle] = useState(undefined);
  const [desc, setDesc] = useState(undefined);
  const [amount, setAmount] = useState(undefined);
  const [limit, setLimit] = useState(undefined);

  const updateProps = (e) => {
    e.preventDefault();
    prop(title, desc, amount, limit, fname.concat(" ".concat(lname)));
  };

  return (
    <Container className="my-5">
      <Modal show={show} onHide={() => resetShow(!show)}>
        <Modal.Header
          closeButton
          className=" text-light"
          style={{ backgroundColor: "#333ca5" }}
        >
          <Modal.Title variant="secondary">Create Campaign</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              updateProps(e);
            }}
          >
            <Form.Group className="mb-3">
              <div className="d-flex justify-content-between">
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  className="my-3 "
                  style={{ width: "40%" }}
                  onChange={(e) => setfName(e.target.value)}
                />
                <Form.Control
                  type="text"
                  placeholder="Enter last Name"
                  className="my-3 "
                  style={{ width: "40%" }}
                  onChange={(e) => setlName(e.target.value)}
                />
              </div>

              <FloatingLabel label="Enter Tittle">
                <Form.Control
                  type="text"
                  placeholder="for eg. Bhukmari hathao"
                  onChange={(e) => setTittle(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <FloatingLabel label="Enter Description" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder=" "
                  onChange={(e) => setDesc(e.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel
                label="Enter amount required for Campaign"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder=" "
                  onChange={(e) => setAmount(e.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel label="Enter expiry date for the campaign">
                <Form.Control
                  type="text"
                  placeholder=" "
                  onChange={(e) => setLimit(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="info" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              resetShow(!show);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
