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

    document.getElementById("createCampaignButton").disabled = true;
    document.getElementById("showmsg").innerHTML="Awaiting confirmation...";
    e.preventDefault();
    prop(title, desc, amount, limit, fname.concat(" ".concat(lname))).then(
      () => {
        (document.getElementById("createCampaignButton").disabled = false);
       document.getElementById("showmsg").innerHTML =
         "Resolved";
      }
    );
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
                  placeholder=" "
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
                label="Enter amount required for Campaign (in ether)"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder=" "
                  onChange={(e) => setAmount(e.target.value)}
                  step="0.001"
                  min="0.001"
                />
              </FloatingLabel>

              <FloatingLabel label="Enter validity for the campaign (in days)">
                <Form.Control
                  type="number"
                  placeholder=" "
                  onChange={(e) => setLimit(e.target.value)}
                  min="1"
                />
              </FloatingLabel>
            </Form.Group>
            <Button
              variant="info"
              type="submit"
              className="mt-3"
              id="createCampaignButton"
            >
              Submit
            </Button>
            <div className="small text-muted mt-2" id="showmsg"></div>
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
