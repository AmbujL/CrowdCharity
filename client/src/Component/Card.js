import React, { useEffect, useState ,useContext } from "react";
import "../App.css"
import {
  Card,
  ProgressBar,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import {GlobalState} from "../App.js";


import CampaignInfo from "./CampaignPopup";

export default function CustomCard({
  tittle,
  desc,
  goal,
  currentRaisedFund,
  expiry,
  campaignState,
  owner,
  funders,
  name,
  instance,
  donate,
}) {
  const [CustomStyle, setCustomStyle] = useState({
    Backgroundcolor: "#0288D1",
  });
  
  const [initials, setinitials] = useState("")
  const [state, setState] = useState("");
  const [show, setShow] = useState(false);
   const {array, setRandomSet } = useContext(GlobalState);
  const [rand, setRand] = useState(0);
  const [objProgress, setObjProgress] = useState(currentRaisedFund);

  useEffect(() => {
    const init =  () => {
      switch (campaignState) {
        case 0:
          setState("RUNNING");
          setCustomStyle({ color: "#4CAF50", fontWeight: "bold" });
          break;
        
        case 1:
          setState("COMPLETED");
           setObjProgress(goal);
          setCustomStyle({ color: "#993eab",fontWeight: "bold"});
          break;
        case 2:
          setState("EXPIRED");
           setCustomStyle({ color: "#bd3434" });
          break;

        default:
          setState("Unknown");
      }
  
      name.split(" ").forEach(n => {
        setinitials(initials=>(initials+ (n.charAt(0).toUpperCase())));
      }) 
      
    
    };
    init();
    
  }, [campaignState, name, array.length]);

  useEffect(() => {
    var tempRand = Math.floor(Math.random() * array.length);

      setRand(tempRand);
    setRandomSet((randomSet) => [...randomSet, tempRand]);
    
  },[])
  
  
  
  
  return (
    <>
      <a
        href="#modal-content"
        style={{ textDecoration: "none" }}
        onClick={() => setShow(!show)}
      >
        <div className=" m-2 card-shadow" style={{ width: "300px" }}>
          <Card
            bg="white"
            variant="white"
            text="dark"
            style={{
              borderLeft: "2px solid #90CAF9",
              backgroundColor: "light",
            }}
          >
            <Card.Img
              border="secondary"
              variant="top"
              style={{ height: "180px" }}
              src={array[rand]}
              className="roundness "
            />
            <Card.Header>
              <div style={CustomStyle}>
                <small style={{ fontSize: "12px" }} className="font-monospace ">
                  {state}
                </small>
              </div>
              <Card.Title
                className="fs-6  truncate-2l"
                style={{ minHeight: "40px" }}
              >
                {tittle}
              </Card.Title>

              <small className=" d-block ">
                Raised by
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip>
                      <strong>{owner}</strong>.
                    </Tooltip>
                  }
                >
                  <span
                    className="text-muted d-block text-truncate"
                    style={{ maxWidth: "200px" }}
                  >
                    <small data-letters={initials}>{name} </small>
                  </span>
                </OverlayTrigger>
              </small>
            </Card.Header>

            <Card.Body className="">
              <Card.Text>
                <span style={{ maxWidth: "1000px" }}>
                  <span className="text-truncate d-block  fs-6">
                    <small>{desc} </small>
                  </span>
                </span>
              </Card.Text>
              <span>
                <div className="d-flex justify-content-between ">
                  <div className="">
                    <span className="fw-bold fs-5 fst-italic">
                      <i className="fa-brands fa-ethereum "></i>
                      {`${objProgress}  `}
                    </span>
                    <small className="text-muted"> raised </small>
                  </div>
                  <div className="fs-6 fw-light">
                    {Math.round((objProgress / goal) * 100)}%
                  </div>
                </div>
                <ProgressBar
                  variant="info"
                  now={(objProgress / goal) * 100}
                  label={`${objProgress} Eth`}
                  visuallyHidden
                  style={{ height: "5px" }}
                />
              </span>

              <div className="mt-2 d-flex justify-content-between">
                <div>
                  <i className="bi bi-clock m-1"></i>
                  <strong>{expiry} </strong>
                  <span className="text-muted" style={{ fontSize: "12px" }}>
                    Day's left
                  </span>
                </div>

                <div>
                  <i
                    className="fa-solid fa-heart m-1"
                    style={{ color: "red" }}
                  ></i>
                  <strong>{funders} </strong>
                  <span className="text-muted" style={{ fontSize: "12px" }}>
                    Supporters
                  </span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </a>
      <CampaignInfo
        id="modal-content"
        img={array[rand]}
        propShow={show}
        propSet={() => setShow(!show)}
        tittle={tittle}
        desc={desc}
        goal={goal}
        currentRaisedFund={objProgress}
        expiry={expiry}
        campaignState={campaignState}
        owner={owner}
        funders={funders}
        instance={instance}
        donate={donate}
        name={name}
        initials={initials}
      />
    </>
  );
}

CustomCard.defaultProps = {
  tittle: "garibi hathao",
  desc: "bla bla bla bla bla",
  goal: 5,
  currentRaisedFund: 2,
  expiry: 2,
  campaignState: "Testing",
  owner: "0xy78876bc676cgdw7et7768y",
};
