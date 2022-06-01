import React, {useState,} from 'react';
import { Carousel, Container } from 'react-bootstrap';
import "font-awesome/css/font-awesome.min.css";
import '../App.css'
import Slider from "react-slick";
import logo1 from "../images/patient1.webp";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'



const Reviews = () => {
  return (
    <>
      <section className="align-self-center p-2" style={{ height: "400px" }}>
        <div
          className=" row justify-content-lg-center mx-auto align-items-lg-center   shadow roundness-all "
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "#E0F7FA",
          }}
        >
          <div className="col-sm-12 col-md-5  ">
            <img
              className=" w-100  "
              src={logo1}
              alt="First slide"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="col-sm-12 col-md-7 ">
            <h5 className="mb-3 "> You made it Happen!</h5>
            <p className="fs-6 w-75 ">
              Hi' this is gregory , i have been suffering from tuberclosis past
              10 years
              <span className="bold text-info"> CrowdCharity</span> has helped
              me in surviving this desease , each day i pray to god and thanks
              him for being able to live another day.
            </p>
            <a className="text-info" href="#home">
              <i className="fa fa-arrow-right" aria-hidden="true"></i> Read More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <button className="btn-carousel">
        <FaChevronLeft />
      </button>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <button className="btn-carousel">
        <FaChevronRight />
      </button>
    </div>
  );
};




export default function () {


  // const feedback = [
  //   {
  //     img:
  //     desc:''
  //   }
  //   {
  //     img:
  //     desc:''
  //   }
  //   {
  //     img:
  //     desc:''
  //   }
  // ]
  
  

  var settings = {
    fade: true,
    arrows: true,
    dots: true,
    infinite: false,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow className="" />,
    prevArrow: <SamplePrevArrow className=" " />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          width: 200,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section
        className="content container-fluid m-auto "
        style={{ width: "75%", height: "500px" }}
      >
        <h3 className="text-center mb-3 fw-bolder ">Our Stories</h3>
        <Slider {...settings}>
          <div className="ms-3 me-3">
            <Reviews />
          </div>
          <div className="ms-3 me-3">
            <Reviews />
          </div>

          {/* <section>
            <div className="row">
              <div className="col-6 text-end">
                <img
                  className=" w-75 img-fluid"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhGLdfObm7b6Pqb5OvdzxzSx_thW5N0dMoEA&usqp=CAU"
                  alt="First slide"
                />
              </div>

              <div className=" col-6 text-start lead p-5 ">
                allah mehrrbhan to gadha pehlwan
              </div>
            </div>
          </section> */}
        </Slider>
      </section>
    </>
  );
}

