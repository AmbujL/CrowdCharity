import React from "react";

import '../App.css';

export default function () {
  return (
    <>
      <section
        style={{ background: "#3b45ad", color: "white", height: "250px" }}
      >
        <div className="b-example-divider"></div>

        <div className="mx-5">
          <footer className="d-flex flex-wrap justify-content-between  py-3 my-4 border-top">
            <div className="col-md-4 d-flex ">
              <a
                href="/"
                className="mb-3 me-2 mb-md-0  text-decoration-none lh-1"
              >
                <svg className="bi" width="30" height="24">
                  <use href="#bootstrap" />
                </svg>
              </a>
              <span className="">&copy; 2022 Company, Inc</span>
            </div>

            <div className="col-md-4 ">
              <div className="text-center mb-3">
                <a
                  href="#home"
                  className=" fs-5 "
                  style={{ textDecoration: "none", color: "white" }}
                >
                  CrowdCharity
                  <i className="fa fa-cubes" aria-hidden="true"></i>
                </a>
              </div>
              <ul className=" list-unstyled fa-lg d-flex justify-content-center">
                <li className="ms-3">
                  <a className="text-white" href="#" disabled={true}>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="ms-3">
                  <a className="text-white" href="#">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="ms-3">
                  <a className="text-white" href="#">
                    <i
                      className="fa fa-facebook-official"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
              </ul>
            </div>

            <ul className="nav col-md-4 justify-content-end ">
              <li className="nav-item">
                <a href="#" className="nav-link text-white px-2 ">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#BroseCampaign" className="nav-link text-white px-2 ">
                  Browse Campaign
                </a>
              </li>
              <li className="nav-item">
                <a href="#WorkingPage" className="nav-link text-white px-2 ">
                  How it Works?
                </a>
              </li>

              <li className="nav-item">
                <a href="#stories" className="nav-link text-white px-2 ">
                  Stories
                </a>
              </li>
              <li className="nav-item">
                <a href="#info" className="nav-link text-white px-2 ">
                  FAQs
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </section>
    </>
  );
}
