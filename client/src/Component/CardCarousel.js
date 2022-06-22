import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CustomCard from "../Component/Card";
import React,{ useState,useContext } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {GlobalState } from "../App.js"

export default function Carousel({donate}) {
  const [sliderRef, setSliderRef] = useState(null);
  const { CampaignInfo } = useContext(GlobalState);
    
  
  const sliderSettings = {
    // removes default buttons
    speed: 500, // ms
    cssEase: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: false,
    infinite: (CampaignInfo.length>3)? true:false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div className="content m-auto " style={{ width: "95% " }}>
      <div className="d-flex justify-content-end mb-4">
        <button onClick={sliderRef?.slickPrev} className="btn-carousel">
          <FaChevronLeft />
        </button>
        &nbsp; &nbsp;
        <button onClick={sliderRef?.slickNext} className="btn-carousel acti">
          <FaChevronRight />
        </button>
      </div>

      <Slider ref={setSliderRef} {...sliderSettings}>
        {CampaignInfo.map((element, index) => (
          <div key={index}>
            <CustomCard
              tittle={element.title}
              desc={element.desc}
              goal={Math.round(element.goal *100)/100}
              currentRaisedFund={Math.round(element.currentRaisedFund*100)/100}
              expiry={parseInt(element.expiry)}
              campaignState={parseInt(element.campaignState)}
              owner={element.owner}
              funders={parseInt(element.funders)}
              name={element.name}
              instance={element.instance}
              donate={donate}
            ></CustomCard>
          </div>
        ))}
      </Slider>
    </div>
  );
}