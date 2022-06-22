import React, { useState, useEffect, useContext } from "react";
import {
  Navbar,
  Nav,
  Button,
  Container,
  Badge,
  Offcanvas,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CampaignInfo from "./CampaignPopup";
import "../App.css";
import { GlobalState } from "../App.js";

const NavLinks = (props) => {
  const { className1, className2, style } = props;

  return (
    <>
      <Nav navbarScroll className={className1} style={style}>
        <Nav.Link href="/" className={className2}>
          Home
        </Nav.Link>
        <Nav.Link href="#BroseCampaign" className={className2}>
          Browse Campaign
        </Nav.Link>
        <Nav.Link href="#WorkingPage" className={className2}>
          How it Works?
        </Nav.Link>
        <Nav.Link href="#stories" className={className2}>
          Stories
        </Nav.Link>

        <Nav.Link href="#info" className={className2}>
          FAQs
        </Nav.Link>
      </Nav>
    </>
  );
};

const CampaignSearchResult = ({ element, index }) => {
  const [showModal, setShowModal] = useState(false);
  const [initials, setInitials] = useState("");
  const { array, randomSet } = useContext(GlobalState);
  const [objProgress, setObjProgress] = useState(element.currentRaisedFund);

  useEffect(() => {
    if (element.campaignState == 1) setObjProgress(element.goal);

    setInitials("");
    element.name.split(" ").forEach((n) => {
      setInitials((initials) => initials + n.charAt(0).toUpperCase());
    });
  }, [element]);

  return (
    <>
      <a
        id={index}
        href="#"
        style={{ textDecoration: "none" }}
        onClick={() => setShowModal(!showModal)}
      >
        <div>
          <strong className="text-info">{element.title}</strong>
        </div>
        <small className="text-muted"> by: {element.name}</small>
      </a>

      <CampaignInfo
        id="modal-content"
        img={array[randomSet[index]]}
        propShow={showModal}
        propSet={() => setShowModal(!showModal)}
        tittle={element.title}
        desc={element.desc}
        goal={element.goal}
        currentRaisedFund={objProgress}
        expiry={element.expiry}
        campaignState={element.campaignState}
        owner={element.owner}
        funders={element.funders}
        instance={element.instance}
        donate={element.donate}
        name={element.name}
        initials={initials}
      />
    </>
  );
};

export default function Header({ prop, show, setShow }) {
  const [display, setDisplay] = useState(false);
  const [showSearchbar, setShowSearchbar] = useState(false);
  const [searchContent, setContent] = useState([]);
  const { CampaignInfo } = useContext(GlobalState);

  function handleShowSearchbar() {
    setShowSearchbar(!showSearchbar);
  }

  const handleClose = () => {
    setDisplay(false);
  };
  const handleShow = () => setDisplay(true);

  const handleSearch = (e) => {
    e.preventDefault();
    setContent([]);
    const key = e.target.value.toLowerCase();
    CampaignInfo.forEach((Campaign) => {
      (Campaign.desc.toLowerCase().includes(key) ||
        Campaign.title.toLowerCase().includes(key) ||
        Campaign.name.toLowerCase().includes(key)) &&
        setContent((searchContent) => [...searchContent, Campaign]);
    });
  };

  const myNav = document.getElementById("mynav");
  window.onscroll = function () {
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      myNav.classList.add("nav-colored");
      myNav.classList.remove("nav-transparent");
    } else {
      myNav.classList.add("nav-transparent");
      myNav.classList.remove("nav-colored");
    }
  };

  async function connect() {
    if (typeof window.ethereum != "undefined") {
      const accounts = await window.ethereum
        .request({
          method: "wallet_requestPermissions",
          params: [
            {
              eth_accounts: {},
            },
          ],
        })
        .then(() =>
          window.ethereum.request({
            method: "eth_requestAccounts",
          })
        );
    }
  }

  return (
    <>
      <Navbar
        id="mynav"
        expand="lg"
        sticky="top"
        style={{ backgroundColor: "" }}
      >
        <Container fluid className="mx-1">
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="w-25 w-sm-100  "
            onClick={handleShow}
          />

          <Navbar.Offcanvas
            show={display}
            onHide={handleClose}
            id="navbarScroll"
            style={{ backgroundColor: "#E8EAF6" }}
          >
            <Offcanvas.Header
              closeButton
              style={{ backgroundColor: "#E8EAF6" }}
            >
              <Offcanvas.Title>
                <span className="mt-0 display-6 fw-bolder">CrowdCharity </span>{" "}
                <i className="fa fa-cubes" aria-hidden="true"></i>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="fs-4  ">
                <NavLinks
                  className1=""
                  className2="text-dark  rounded my-2 clearfix offcanvas-style-border"
                />
                <div className="text-center mt-5   mb-2 p-3 ">
                  <Button
                    variant="info"
                    onClick={() => {
                      handleClose();
                      setShow(!show);
                    }}
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    CREATE A CAMPAIGN
                  </Button>
                </div>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          <Navbar.Collapse className="d-none d-lg-block col-lg-4 ">
            <div
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
            >
              <NavLinks className2="text-white" />
            </div>
          </Navbar.Collapse>

          <Navbar.Brand
            href="#home"
            className="col-lg-4 text-white text-center "
          >
            <span className="mt-0 fs-3">CrowdCharity </span>
            <i className="fa fa-cubes" aria-hidden="true"></i>
          </Navbar.Brand>

          <div className="col-lg-4  d-flex justify-content-end align-content-md-center ">
            <div className="d-sm-flex d-none me-3">
              <Button
                variant="none"
                onClick={handleShowSearchbar}
                className="text-white fs-5"
              >
                <i className="fa fa-search" aria-hidden="true"></i> Search
              </Button>
            </div>

            <div className=" mt-0  d-inline-flex text-light align-items-center">
              <button
                href="#login"
                style={{
                  maxWidth: "150px",
                  border: "0px none",
                  backgroundColor: "transparent",
                }}
                onClick={() => connect()}
              >
                <i className="fa fa-user me-1 fa-lg text-primary"></i>
                <Badge variant="warning" bg="warning" className="text-dark">
                  <div
                    className="d-block text-truncate"
                    style={{ maxWidth: "100px" }}
                  >
                    {prop}
                  </div>
                </Badge>
              </button>
            </div>
          </div>
        </Container>
      </Navbar>
      <Offcanvas
        show={showSearchbar}
        onHide={handleShowSearchbar}
        placement="top"
        style={{ height: "300px" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className=" fs-6 fw-bold text-info container">
            SEARCH CROWDCHARITY
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0 ">
          <div className="container">
            <i className="fa fa-search text-info fs-5" aria-hidden="true" />
            &nbsp;
            <input
              type="text"
              className="input-borderless w-75 "
              placeholder="Search by Campaign description , tittle and creator Name "
              aria-label="Username"
              aria-describedby="addon-wrapping"
              onChange={(e) => {
                handleSearch(e);
              }}
            />
            <hr className=" bg-info fs-4" />
          </div>
          <div className="container  ">
            <div className="overflow-auto">
              {searchContent.map((element, index) => (
                <div key={index} className="mb-2 ">
                  <CampaignSearchResult element={element} index={index} />
                </div>
              ))}
            </div>{" "}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
