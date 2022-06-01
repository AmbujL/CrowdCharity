import React from "react";
import { Accordion, Container, Button, Carousel } from "react-bootstrap";
import CustomCard from "../Component/Card";
import "../App.css";
import Corosoul from "./Corosoul";
import CardCarousel from "./CardCarousel";
import img1 from "../images/Currency_Two Color.png";
import light from "../images/light.webp";
export default function MainBody({ donate, show, setShow }) {
  return (
    <>
      <section className="m-5" id="BroseCampaign">
        <h3 className="text-center mb-1 ">
          <strong> Our Campaigns </strong>
        </h3>
        <div className="container  ">
          <div className="row  justify-content-md-start  mt-3 ">
            <CardCarousel donate={donate} />
          </div>
        </div>
        <div className="text-center mt-3 mb-5 p-3 ">
          <Button
            variant="info"
            onClick={() => setShow(!show)}
            style={{ color: "white", fontWeight: "bold" }}
          >
            CREATE A CAMPAIGN FOR FREE
          </Button>
        </div>
      </section>

      <section className="" id="WorkingPage">
        <div className="text-center my-5 ">
          <h3 className="fw-bold">
            How Does it work in CrowdCharity with Blockchain in picture ?
          </h3>

          <div className="row mt-5 ">
            <div className="col-lg-6 ">
              <img src={light} className="img-fluid " />
            </div>

            <div className="col-lg-6 text-start">
              <div className="row ">
                <div className="col-lg-2 mt-3">
                  {" "}
                  <i className="fa-solid fa-chalkboard-user color-format fa-2x"></i>
                </div>
                <div
                  className="card my-2 col-lg-10 input-borderless"
                  style={{
                    width: "25rem",
                    minHeight: "150px",
                    backgroundColor: "transparent",
                  }}
                >
                  <div className="card-body">
                    <h4 className="card-title mb-3">Start your Campaign</h4>
                    <p className="card-text">
                      Fill out the form. just tell us a few details about you
                      and the one you are raising fund for.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row ">
                <div className="col-lg-2 mt-3">
                  <i className="fa-solid fa-file-lines fa-2x color-format"></i>
                </div>
                <div
                  className="card my-2 col-lg-10 input-borderless"
                  style={{
                    width: "25rem",
                    minHeight: "150px",
                    backgroundColor: "transparent",
                  }}
                >
                  <div className="card-body">
                    <h4 className="card-title mb-3">Smart Contract Creation</h4>
                    <p className="card-text">
                      A contract in Ethereum Blockchain will be created on
                      behalf of you with respective details on signing
                      authorization from your account using metamask.
                    </p>
                    <span
                      className="small text-muted"
                      style={{ fontSize: "12px" }}
                    >
                      Please Note that a small fee in form of Gas charges is
                      applicable on Smart contract creation.
                    </span>
                  </div>
                </div>
              </div>

              <div className="row ">
                <div className="col-lg-2 mt-3">
                  <i className="fa-solid fa-gears color-format fa-2x"></i>
                </div>
                <div
                  className="card my-2 col-lg-10 input-borderless"
                  style={{
                    width: "25rem",
                    minHeight: "150px",
                    backgroundColor: "transparent",
                  }}
                >
                  <div className="card-body">
                    <h4 className="card-title mb-3">Campaign Resultion</h4>
                    <p className="card-text">
                      On SuccessFully completing funding of the campaign . the
                      campaign creator is credited with all campaign ethereum
                      cryptocurency in his/her account in ethereum blockchain.
                      if the Campaign passes it's due out of it's given
                      validity. then the remaining amount in smart contract is
                      return back to their respective Donor's As per our
                      All/None structure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 mb-5 ">
        <div className="container-fluid ">
          <div className="d-md-flex justify-content-evenly align-items-center bg-dark text-white">
            <div
              className="flex-fill text-center align-self-center"
              style={{ minHeight: "230px" }}
            >
              <div className="display-4 ">
                <strong> In Need of Fund Urgently ? </strong>{" "}
              </div>
              <div className="display-6">
                Raise a Campaign{" "}
                <Button
                  variant="info"
                  onClick={() => setShow(!show)}
                  style={{ color: "white", fontWeight: "bolder" }}
                >
                  Now
                </Button>
              </div>
            </div>
            <div className="bg-light flex-fill img-fluid">
              <img src={img1} />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5" id="stories">
        <Corosoul></Corosoul>
      </section>
      <section id="info" className="my-5">
        <Container fluid vaiant="dark" bg="dark" className="mb-3 p-md-3">
          <h2 className="text-center mb-5">Frequently Asked Questions</h2>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                How do we enforce crowdfunding using Ethereum Blockchain
              </Accordion.Header>
              <Accordion.Body className="bg-dark text-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>What does all or None means?</Accordion.Header>
              <Accordion.Body className="bg-dark text-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header className="row-sm">
                How CrowdCharity{" "}
                <i className="fa fa-cubes" aria-hidden="true"></i> &nbsp; Makes
                sure that campaign owner is paid ?
              </Accordion.Header>
              <Accordion.Body className="bg-dark text-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>
    </>
  );
}
