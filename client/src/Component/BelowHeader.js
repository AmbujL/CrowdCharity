import React, { useContext } from "react";
import "font-awesome/css/font-awesome.min.css";
import "../App.css";
import { GlobalState } from "../App.js";
import img3 from "../images/0041.webp";
import gwhite from "../images/mainBody_background.jpg";
import cubes from "../images/Ethereum_Monochromatic (1).png";

export const LandingPage = () => {
  const { show, setShow } = useContext(GlobalState);

  return (
    <>
      <div
        className=" container-fluid row align-content-md-center justify-content-between text-white "
        style={{
          height: "650px",
        }}
      >
        <div className=" col-md-7  ms-5  ">
          <h2 className=" display-3 fw-bolder">Free CrowdFunding for India</h2>
          <div className="lead fs-4  ms-2">
            <p>
              A Complete Decentralized solution of doing charity or raising
              funds for projects.
            </p>

            <ul className="p-4 mx-4 my-1">
              <strong>
                <li>100% insured way of transfering funds</li>
                <li>Complete Decentralized Structure</li>
                <li>Powered by Ethereum Blockchain</li>
                <li>All or Nothing architecture</li>
              </strong>
            </ul>
          </div>

          <div className="h4">
            <i className="bi-chevron-right" aria-hidden="true"></i>
            <a
              href="#"
              style={{ textDecoration: "none" }}
              className="text-info"
              onClick={() => setShow(!show)}
            >
              Get Started
            </a>
          </div>
        </div>

        <div className="col-md-4 ">
          <img
            src={cubes}
            alt="cubes"
            className="img-fluid w-100 h-100 d-md-block d-none "
          ></img>
        </div>
      </div>
    </>
  );
};

export function Below() {
  return (
    <>
      <div
        className="mt-0"
        style={{
          backgroundImage: "url(" + gwhite + ")",
          backgroundRepeat: "repeat",
          backgroundPosition: "cover",
        }}
      >
        <section className="container ">
          <div className="container-fluid m-3 mt-5">
            <h2 className="text-center  mb-5 ">
              <strong> Why CrowdCharity ? </strong>
            </h2>
            <div className="row justify-content-evenly fa-2x mt-5">
              <div className="col-md-3  text-center">
                <i
                  className="  fa fa-thumbs-o-up color-format "
                  aria-hidden="true"
                ></i>
                <i className="fa-solid fa-horizontal-rule"></i>
                <p className=" mt-1  fs-6 p-align  ">
                  Industry's Best FundRaising Success Rate{" "}
                </p>
              </div>

              <div className="col-md-3 text-center">
                <i className="fa-solid fa-users-line color-format"></i>
                <p className="mt-1 fs-6 p-align "> Prefered by Donor's</p>
              </div>

              <div className="col-md-3   text-center align-items-center">
                <div className="mb-4">
                  <i className="color-format">
                    <i className="fa-solid fa-circle-check"></i>
                    <i className="fa-solid fa-circle-xmark"></i>
                  </i>
                </div>

                <p className="mt-1 fs-6 p-align  "> All or Nothing Modal</p>
              </div>

              <div className="col-md-3  text-center ">
                <i className="fa-brands fa-ethereum color-format"></i>

                <p className="mt-1 fs-6 p-align">
                  Complete Decenteralised Platform
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div
            className=" container d-flex shadow p-3 mt-5 mb-5 rounded-pill  fw-light "
            style={{ background: "#E0F7FA", color: "black" }}
          >
            <p className="w-100 h5  text-center">
              <span>
                <i className="bi bi-megaphone fa-2x"></i> &nbsp; &nbsp;
              </span>
              Our CrowdFunding Platform charges no fees
            </p>
            <h4 style={{ color: "#64B5F6", fontSize: 40 }}>0%</h4>
          </div>
        </section>

        <section id="home" className="">
          <div
            className="container-fluid  "
            style={{ height: "600px" }}
          >
            <div className=" row justify-content-center align-items-center mx-1 text-white  bg-dark h-100 ">
              <div
                className=" col-md-5 col bg-dark h-100 p-0"
              >
                <img src={img3} alt="img3" className="img-fluid h-100 w-100" />
              </div>

              <div className="col-md-7  text-start p-5">
                <div className="jumbotron mb-3  ">
                  <h1 className="display-3 mb-5">
                    Shining a light on untapped potential!
                  </h1>
                  <p className="lead ms-3 text-start text-wrap mb-4 ">
                    With the help of our decentaralised platform fueled by
                    Ethereum
                    <i className="fab fa-ethereum fs-5"></i> Blockchain
                    technology , we empower Underprivileged with the funding and
                    support they need to overcome  social, cultural, or
                    economic hurdles individuals face in their daily lives.
                  </p>
                  <p className="mx-2 fs-3 lead ">
                    Time to embrace Decenteralisation !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
