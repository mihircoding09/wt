import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/homebg.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        
        <p> WHAT'S BETTER THAN NICE CARS?<br/>NICE CARS AT NICE PRICES.</p>
        <h1> AUTOMOBUY .SELL.PROFIT.</h1>
        <Link to="/history">
          <button> BUY </button><button> SELL </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;