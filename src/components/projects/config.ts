import { getSkill, Skill, skills } from "../skills/config"
import SimpleChat from "./../../images/simple-chat.png";
import Portfolio from "./../../images/portfolio.png";
import Avatar from "./../../images/hardhat-logo.png";
import Crypto from "./../../images/crypto-tracker.png";
import Diamond from "./../../images/diamond-hands.png";
import Coin from "./../../images/coin-flip.png";
import Mobile from "./../../images/wallet.png";
import Whiteboard from "./../../images/whiteboard-app-preview.png";
import nftMarketPlace from './../../images/nftMarketPlace.jpeg';
import crowdFunding from './../../images/crowdfunding-app.jpeg';
import cardgame from './../../images/cardgame-project.jpeg';
import web3Portfolio from './../../images/web3Portfolio.jpeg'

export type Project = {
  name: string,
  description: string,
  image: any,
  url: string,
  github: string,
  technologies: Skill[],
}

export const projects: Project[] = [
  {
    name: "Portfolio",
    description: "Developer portfolio showing my blockchain projects and  skillset.",
    image: web3Portfolio,
    url: "https://abhishek-sagu-web3-portfolio.netlify.app/",
    github: "https://github.com/shisukeUrahara/web3-portfolio",
    technologies: getSkill(["react", "typescript", "html", "css", "git", "npm"])
  },
  {
    name: "Web3-Nft-Card game",
    description: "An online platform for users to play card game based on the blockchain platform. ",
    image: cardgame,
    url: "https://shisuke-nft-card-battle-game.netlify.app/",
    github: "https://github.com/shisukeUrahara/web3-nft-card-game",
    technologies: getSkill(["react", "nodejs","rainbowkit","hardhat","ethers", "solidity"])
  },
  {
    name: "Web3-Crowdsourcing-app",
    description: "A web3 app to create campaigns and to get them funded through crowdfunding.",
    image: crowdFunding,
    url: "https://shisuke-web3-crowdfunding-app.netlify.app/",
    github: "https://github.com/shisukeUrahara/web3-crowdfunding-app",
    technologies: getSkill(["react", "javascript", "thirdweb","hardhat"])
  },
  {
    name: "Web3-Nft-MarketPlace platform",
    description: "A web3 nft marketplace platform to mint , buy and resell nfts.",
    image: nftMarketPlace,
    url: "https://shisuke-web3-nft-marketplace.netlify.app/",
    github: "https://github.com/shisukeUrahara/web3-nft-marketplace",
    technologies: getSkill(["react", "solidity", "hardhat","rainbowkit","nextjs"])
  }
]