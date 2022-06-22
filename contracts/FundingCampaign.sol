// SPDX-License-Identifier: Arno
pragma solidity ^0.8.0;
import "../client/node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol";

contract FundingCampaign{
    address payable owner;
    string tittle;
    string desc;
    uint public goal;
    uint public  timeconstraint;
    mapping(address=> uint) contribution;
    address [] public ledger;
    string name;

    uint public  count=0;

    enum state{started,finished , expired}
    state public campaignState;

    using SafeMath for uint;
    constructor(string memory  _tittle, string memory _desc,uint _fundRequired, uint _limit ,address payable Admin , string memory _name){

        tittle=_tittle;
        desc=_desc;
        goal=_fundRequired;
        timeconstraint=_limit;
        campaignState = state.started;
        owner = Admin;
        name=_name;
    }

    event creatorPaid(address reciepent );
    event contributionMade(uint donationValue,address sender , uint accountBalance);
    event refundPaid(address contributor, uint donationValue);
  

    modifier checkAdmin(){
         require(owner!=msg.sender,"campaign creator can not participate in donation");
         _;
     }

    modifier checkstate(){
       require(campaignState==state.started,"campaign is not running");
       _;
    }


    function isItstopped() internal returns (bool){
        count++;
        if(address(this).balance>=goal && block.timestamp<= timeconstraint){
         campaignState = state.finished;
         payout();
        return true;
        }
        else if(address(this).balance<goal && block.timestamp> timeconstraint)
        {
            campaignState =state.expired;
            refund();
            return true;
        }
       return false;
    }

    function payout() internal{
        require(campaignState==state.finished,"campaign is not finished yet");
        owner.transfer(address(this).balance);
        emit creatorPaid(owner);

    }

    function refund() internal {
         require(campaignState==state.expired,"campaign is not finished yet");

         uint x=0;
        while(x<ledger.length){
            uint donationValue= contribution[ledger[x]];
            contribution[ledger[x]]=0;
           payable( ledger[x]).transfer(donationValue);
            emit refundPaid(ledger[x],donationValue);
        }
       

    }

    function donate() payable public checkAdmin checkstate returns (bool){
        require(msg.value>= 0.001 ether);

        bool value= isItstopped();

        if(contribution[msg.sender]==0)
            ledger.push(msg.sender);

        contribution[msg.sender]=contribution[msg.sender].add(msg.value);
        
        emit contributionMade(msg.value,msg.sender,address(this).balance);
        return !value;
    }


    function showDetails() public view returns(string memory, string memory, uint , uint , address, state , uint,uint ,string memory ){

        return(tittle,desc,goal,(timeconstraint.sub(block.timestamp).div(1 days)),owner,campaignState,address(this).balance, ledger.length ,name);

    }


}