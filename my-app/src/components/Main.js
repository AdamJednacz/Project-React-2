import React from 'react';
import arrow from "../assets/arrow.png"
const Main = () => {
    return (
        <main>
          <div className="container">
                <h1>Rent your dream car</h1>
              <div className="dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              </div>
          </div>
            <div className="arrow_bg">
                <img src={arrow} alt="arrow"/>
            </div>
        </main>
    );
};

export default Main;