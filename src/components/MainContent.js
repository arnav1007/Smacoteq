import React from 'react';
import './MainContent.css';
import line from '../images/horizontal_line.jpg';
const MainContent = () => (
  <main className="main-container">
    <div className="content">
      <h1>Building Sustainable and Scalable <br /> Decentralized Technologies <br /> For The Industry 4.0 Supply Chains</h1>
      <div className="line"><img className="horizontal-line"src={line} alt="horizontal line" /></div>
      <ul className='upper-list'>
        <li>eBL Tokenization &nbsp; =={">"}&nbsp; Built on top of tradetrust to create & trade shipment related Docs</li>
        <li>ARTH.BHUMI &nbsp; =={">  "} &nbsp;Commodity Tokenization | EBL Generation & Tokenization of Trade</li>
        <li>ANTELOPE FI&nbsp; =={">  "}&nbsp; Trade Financing Protocol</li>
      </ul>
      <ul className='lower-list'>
      <li>Ant Liquidity Pools &nbsp;=={">  "} &nbsp;Coming up Next, Stay Tuned!</li>
        <li>ARTH Stable Coins + Fiat Liquidity Pools&nbsp; =={">  "}&nbsp; Coming up Next, Stay Tuned!</li>
      </ul>
    </div>
  
  </main>
);

export default MainContent;
