// SPDX-License-Identifier: Arno
pragma solidity ^0.8.0;
import "../client/node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./FundingCampaign.sol";

contract FundingContainer{
    using SafeMath for uint;
    FundingCampaign [] project;

    event Projectcreated(address Campaignaddress, address campaign_creator_address, string title , string desc );


    //create campaign function

    function createCampaign (string memory _tittle, string memory desc , uint fundRequired , uint limit ,string memory name)  public returns(bool)
    {
        limit= block.timestamp.add(limit.mul(1 days)); 

        FundingCampaign  campaign = new FundingCampaign(_tittle, desc , fundRequired, limit , payable(msg.sender) , name);
            project.push(campaign);
        
        emit Projectcreated(address(campaign),msg.sender,_tittle,desc);
        return true;
    }

    //return array of campaign objects

    function showCampaigns() external view returns(FundingCampaign[] memory) {
        return project;
    }

}

