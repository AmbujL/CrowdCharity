import React, { useState, useEffect } from "react";
import { Modal, Button, ProgressBar, Form, Nav } from "react-bootstrap";
import modalbg from "../images/modalbg.jpg";
export default function CampaignInfo({
  propShow,
  propSet,
  tittle,
  desc,
  goal,
  currentRaisedFund,
  expiry,
  campaignState,
  owner,
  funders,
  instance,
  donate,
  img,
  name,
  initials,
}) {
  const [result, setResult] = useState(undefined);
  const [eth, setEth] = useState(undefined);
  const [selected, setSelected] = useState(1);

  const handleSelect = (eventKey) => {
    setSelected(parseInt(eventKey));
  };

  useEffect(() => {
    var result = new Date();
    result.setDate(result.getDate() + expiry);
    setResult(result.toDateString());

  }, [expiry]);

  const submit = async (e) => {
    document.getElementById("donateButton").disabled = true;
       document.getElementById("showmsgdonate").innerHTML =
         "Awaiting Confirmation...";
    await donate(instance, eth).then(() => {
      document.getElementById("donateButton").disabled = false;
      document.getElementById("showmsgdonate").innerHTML = "Resolved";
    });
  };

  return (
    <>
      <Modal show={propShow} onHide={propSet} centered size="xl">
        <Modal.Header
          closeButton
          variant="dark"
          className=" justify-content-center  text-white"
          style={{ backgroundColor: "#333ca5" }}
        >
          <div>
            <Modal.Title className="fs-5">{tittle}</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body
          style={{ height: "600px", backgroundImage: "url(" + modalbg + ")" }}
        >
          <div className="row mx-2  g-2 h-100 ">
            <div className="col-md-8 h-100  overflow-auto shadow  rounded-2 bg-light">
              <div className=" m-2 " style={{ height: "300px" }}>
                <img
                  className=" h-100 d-block mx-auto"
                  src={img}
                  alt={Math.floor(Math.random())}
                ></img>
              </div>

              <hr className="display-6 mx-2" />
              <div>
                <Nav
                  justify
                  fill
                  variant="tabs"
                  defaultActiveKey="#About"
                  onSelect={handleSelect}
                >
                  <Nav.Item className="bg-info">
                    <Nav.Link eventKey="1" href="#About">
                      About
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="bg-info">
                    <Nav.Link eventKey="2">Profile</Nav.Link>
                  </Nav.Item>
                </Nav>

                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    {selected == 1 ? (
                      <p className=" fs-6 m-3  ">{desc}</p>
                    ) : (
                      <div className="container row ">
                        <div className="col-6 d-flex justify-content-start">
                          <div data-letters={initials}> </div>
                          <div>
                            <div>Raised By : </div>
                            <strong>{name} </strong>
                          </div>
                        </div>

                        <div className="col-6  justify-content-end">
                          <div>Public Id on Ethereum : </div>
                          <strong>{owner} </strong>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 bg-dark text-white rounded-2">
              <div className="mb-md-2 shadow text-center">
                <div>
                  <span className="display-3 fw-bolder text-success">
                    {currentRaisedFund}
                  </span>
                  <i className="fab fa-ethereum fs-3"></i>
                </div>
                <small className="text-muted">Raised of :</small>
                <span className="fs-4">
                  {goal} <i className="fab fa-ethereum fs-5"></i>
                </span>
              </div>

              <span className="m-1">
                <ProgressBar
                  animated
                  now={(currentRaisedFund / goal) * 100}
                  label={`${currentRaisedFund} Eth`}
                  style={{ height: "25px" }}
                />
              </span>

              <div className="d-block text-center mb-3">
                <table className="w-100">
                  <thead>
                    <tr className="fs-4 text-danger">
                      <th>DAY'S LEFT</th>
                      <th>FUNDER'S</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="fw-bolder fs-3">
                      <td>{expiry}</td>
                      <td>{funders}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="d-inline-flex mt-2 mb-5">
                <span className="small text-center  ">
                  Note: All or nothing. This campaign will only be funded if it
                  reaches its goal by {result}
                </span>
              </div>

              <div className="">
                <Form
                  className="row justify-content-center"
                  onSubmit={(e) => submit(e)}
                >
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="number"
                      placeholder="Enter amount in eth"
                      onChange={(e) => setEth(e.target.value)}
                      step="0.001"
                      min="0.001"
                    />
                  </Form.Group>
                  <div>
                    <Button
                      variant="info"
                      id="donateButton"
                      type="submit"
                      className="w-100 "
                    >
                      <span className="fs-5">
                        <i className="fas fa-heart  "></i> CONTRIBUTE{" "}
                      </span>
                    </Button>
                    <div
                      className="small text-muted mt-2"
                      id="showmsgdonate"
                    ></div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
