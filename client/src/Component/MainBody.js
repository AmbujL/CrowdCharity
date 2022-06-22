import React from "react";
import { Accordion, Container, Button } from "react-bootstrap";
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
              <img src={light} alt="light" className="img-fluid " />
            </div>

            <div className="col-lg-6 text-start">
              <div className="row ">
                <div className="col-lg-2 mt-3">
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
                    <h4 className="card-title mb-3">Campaign Resolution</h4>
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
              <img src={img1} alt="img1" />
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
                when a user create a campaign in CrowdCharity a smart contract
                with the mentioned details is created inside Ethereum , where other
                user's get to donate using native crypto coin ethereum against
                specific campaign smart contract . upon completion of the campaign
                the creator of campaign is rewarded with all the ethereum coin
                as they are sent to his/her account.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>What does all or None means?</Accordion.Header>
              <Accordion.Body className="bg-dark text-light">
                All or None architecture emphasis on the requirement of
                collecting all the required funds under a validity for a
                campaign before sending it to creator's account .On failing so,
                the funds get returned back to their respective donor.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header className="row-sm">
                How CrowdCharity &nbsp;
                <i className="fa fa-cubes" aria-hidden="true"></i> &nbsp; makes
                sure that Campaign Creator is paid ?
              </Accordion.Header>
              <Accordion.Body className="bg-dark text-light">
                Payout to creator is initiated on last donation when campaign
                has collected required fund under it's validity or if the
                validity has been passed then Refund to donors is initiated
                where all the funds is sent back to their donor's account.
                <p className="mt-3 text-muted small">
                  Campaign creator is only paid when the campaign
                  successfully collect required fund under it's validity.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>
    </>
  );
}
