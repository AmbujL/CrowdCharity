import React, { useEffect, useState, createContext } from "react";
import FundingContainerContract from "./contracts/FundingContainer.json";
import FundingCampaignContract from "./contracts/FundingCampaign.json";
import getWeb3 from "./getWeb3";
import { Alert } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateCampaign from "./Component/CreateCampaign";
import { Below, LandingPage } from "./Component/BelowHeader.js";
import MainBody from "./Component/MainBody.js";
import AlertCustom from "./Component/AlertCustom";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import nblue from "./images/night-blue.png";
import gwhite from "./images/mainBody_background.jpg";
import logo1 from "./images/patient1.webp";
import logo2 from "./images/patient2.jpg";
import logo3 from "./images/patient3.jpg";
import logo4 from "./images/patient4.jpg";
import logo5 from "./images/cancer_5.jpg";
import logo6 from "./images/ukraine.jpg";
import loginmsg from "./images/loginmsg.png";

export const GlobalState = createContext();

export default function App() {
  const array = [logo1, logo2, logo3, logo4, logo5, logo6];
  const [show, setShow] = useState(false);
  const [campaign, setCampaign] = useState({});
  const [flag, setFlag] = useState(false);
  const [web3, setWeb3] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);
  const [Instance, setInstance] = useState(undefined);
  const [CampaignInfo, setCampaignInfo] = useState([]);
  const [randomSet, setRandomSet] = useState([]);
  const [auth, setAuth] = useState(
    JSON.parse(window.sessionStorage.getItem("flag"))
  );

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        window.ethereum.on("chainChanged", () => {
            window.sessionStorage.setItem("flag", false);
          window.location.reload();

        });
        window.ethereum.on("accountsChanged", async () => {
          window.location.reload();
        });
      }

      if (Instance !== undefined) fetchCampaigns();
      try {
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();
        const netId = await web3.eth.net.getId();
        const address = FundingContainerContract.networks[netId].address
        const instance = new web3.eth.Contract(
          FundingContainerContract.abi,
          address
        );
        setWeb3(web3);
        setAccounts(accounts);
        setInstance(instance);
        window.sessionStorage.setItem("flag", true);
        setAuth(JSON.parse(window.sessionStorage.getItem("flag")));
      } catch (error) {
        console.log(error);
        return (
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>{error}</p>
          </Alert>
        );
      }
    };
    init();
  }, [Instance, accounts]);


  const createCampaign = async (title, desc, amount_required, limit, name) => {
    try {

     const status= await Instance.methods
        .createCampaign(title, desc, web3.utils.toWei(amount_required), limit, name)
        .send({ from: accounts[0] })
        .then((res) => {
          const eventInfo = res.events.Projectcreated.returnValues;
          setCampaign({
            CamapignAddress: eventInfo.Campaignaddress,
            CampaignCreater: eventInfo.campaign_creator_address,
            Tittle: eventInfo.title,
            Desc: eventInfo.desc,
          });
          setFlag(true);
          if (res) return true;
          
        });
      return status;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCampaigns = async () => {
    try {
      setCampaignInfo([]);
      await Instance.methods
        .showCampaigns()
        .call()
        .then(async (projects) => {
          projects.forEach(async (campaign) => {
            const campaignInstance = await new web3.eth.Contract(
              FundingCampaignContract.abi,
              campaign
            );

            await campaignInstance.methods
              .showDetails()
              .call()
              .then((result) => {
                const obj = {
                  title: result[0],
                  desc: result[1],
                  goal: web3.utils.fromWei(result[2], "ether"),
                  expiry: result[3],
                  currentRaisedFund: web3.utils.fromWei(result[6], "ether"),
                  campaignState: result[5],
                  owner: result[4],
                  funders: result[7],
                  name: result[8],
                  instance: campaignInstance,
                };

                setCampaignInfo((CampaignInfo) => [...CampaignInfo, obj]);
              });
          });
        });
    } catch (error) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>{error}</p>
        </Alert>
      );
    }
  };

  const fundCampaign = async (instance, eth) => {
    try {
      const status= await instance.methods
        .donate()
        .send({
          from: accounts[0],
          value: parseInt(web3.utils.toWei(eth, "ether")),
        })
        .then((result) => {
          const eventInfo = result.events.contributionMade.returnValues;
          console.log(eventInfo);

        
            
          const creator_obj = result.events.creatorPaid;
          if (typeof creator_obj == "object") {
            alert("Creator Paid Successfully");
          }
            if (result) return true;
         
        });
      return status;
    }
    catch (e)
    {
      console.log("encountered error", e);
    }
  };

  const changeState = () => {
    setFlag(!flag);
  };

  

  if (web3 == undefined || accounts === undefined || Instance === undefined) {
    
    if (
      auth == null || auth ==false
    ) {
      return (
        <>
          <div className="text-center mt-5">
            <img src={loginmsg} alt="loginmsg" style={{ width: "300px", height: "300px" }} />
            <p className="text-muted mt-3 display-5">
              Please Connect metamask to Ropsten Network ..
            </p>
          </div>
        </>
      );
    }

  
      return (
        <h1 className="display-6 text-center text-muted mt-5">
          Loading..
        </h1>
      );
    
  }

  return (
    <div>
      <GlobalState.Provider
        value={{ CampaignInfo, array, randomSet, setRandomSet, show, setShow }}
      >
        <section
          className="p-0 my-0 "
          style={{
            backgroundSize: "cover",
            backgroundImage: "url(" + nblue + ")",
            backgroundPosition: "0px 0px",
            position: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div style={{ backgroundColor: "#0760785a" }} className="p-0 m-0">
            <Header prop={accounts[0]} show={show} setShow={setShow}></Header>
            <LandingPage />
          </div>
        </section>
        <Below />
        <div
          className="p-0 "
          style={{
            backgroundImage: "url(" + gwhite + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "cover",
          }}
        >
          <div className="container">
            <MainBody donate={fundCampaign} show={show} setShow={setShow} />
          </div>
        </div>

        {flag ? <AlertCustom prop={changeState} infoObj={campaign} /> : <p></p>}

        <CreateCampaign
          prop={createCampaign}
          show={show}
          resetShow={setShow}
        ></CreateCampaign>
        <Footer />
      </GlobalState.Provider>
    </div>
  );
}
