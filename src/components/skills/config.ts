import React from "./../../images/react-logo.png";
import HTML from "./../../images/html5-logo.png";
import CSS from "./../../images/css-logo.png";
import JS from "./../../images/js-logo.png";
import TS from "./../../images/ts-logo.png";
import Solidity from "./../../images/solidity-logo.png";
import Hardhat from "./../../images/hardhat-logo.png"; 
import Truffle from "./../../images/truffle-logo.png"; 
import Ganache from "./../../images/ganache-logo.png"; 
import Chainlink from "./../../images/chainlink-logo.png"; 
import NPM from "./../../images/npm-logo.png";
import YARN from "./../../images/yarn-logo.png";
import Git from "./../../images/git-logo.png";
import Moralis from "./../../images/moralis-logo.png";
import Native from "./../../images/react-native.png";
import Web3 from "./../../images/web3js.png";
import Ethers from "./../../images/ethers-logo.png";
import Waffle from "./../../images/waffle.png";
import Next from "./../../images/nextjs-logo.png";
import IPFS from "./../../images/ipfs-logo.png";
import Graph from "./../../images/thegraph-logo.png";
import Arweave from "./../../images/arweave.png";
import Socket from "./../../images/socket.svg";
import NodeJS from "./../../images/nodej-js.png";
import Rainbowkit from './../../images/Rainbowkit.svg';
import Thirdweb from './../../images/Thirdweb.jpeg';
import NFTs from './../../images/NFTs.jpg';
import Defi from './../../images/Defi.png'

export type Skill = {
  name: string;
  img: any;
  url: string;
}

export const getSkill = (names: string[]) => {
  let toReturn: Skill[] = [];
  names.map((name: string) => {
    skills.map((skill: Skill) => {
      if(skill.name.toLowerCase() === name.toLowerCase()) {
        toReturn.push(skill);
      }
    });
  })
  return toReturn;
}

export const skills: Skill[] = [
  {
    name: "Solidity",
    url: "https://soliditylang.org/",
    img: Solidity
  },
  {
    name: "Hardhat",
    url: "https://hardhat.org/",
    img: Hardhat
  },
  {
    name: "Truffle",
    url: "https://trufflesuite.com/",
    img: Truffle
  },
  {
    name: "Ganache",
    url: "https://trufflesuite.com/ganache/",
    img: Ganache
  },
  {
    name: "Chainlink",
    url: "https://chain.link/",
    img: Chainlink
  },
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    img: JS
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
    img: TS
  },
  {
    name: "NodeJS",
    url: "https://nodejs.org/en/",
    img: NodeJS
  },
  {
    name: "React",
    url: "https://reactjs.org/",
    img: React
  },
  {
    name: "NEXT.js",
    url: "https://nextjs.org/",
    img: Next
  },
  {
    name: "Moralis",
    url: "https://moralis.io/",
    img: Moralis
  },
  {
    name: "EthersJS",
    url: "https://docs.ethers.io/v5/",
    img: Ethers
  },
  {
    name: "web3js",
    url: "https://web3js.readthedocs.io/en/v1.7.4/",
    img: Web3
  },
  {
    name: "IPFS",
    url: "https://ipfs.io/",
    img: IPFS
  },
  {
    name: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    img: HTML
  },
  {
    name: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    img: CSS
  },
  {
    name: "NPM",
    url: "https://www.npmjs.com/",
    img: NPM
  },
  {
    name: "YARN",
    url: "https://yarnpkg.com/",
    img: YARN
  },
  {
    name: "Git",
    url: "https://git-scm.com/",
    img: Git
  },
  {
    name: "Rainbowkit",
    url: "https://www.rainbowkit.com/",
    img: Rainbowkit
  },
  {
    name: "Thirdweb",
    url: "https://thirdweb.com/",
    img: Thirdweb
  },
  {
    name: "NFTs",
    url: "https://ethereum.org/en/nft/",
    img: NFTs
  },
  {
    name: "Defi",
    url: "https://ethereum.org/en/defi/",
    img: Defi
  }
]