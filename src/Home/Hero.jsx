import "./Hero.css";
import { useState } from "react";
const Hero = () => {
  
  return (
    <div className="container">
      <div className="row">
        <div className="col mx-auto text-center">
          <img
            src="https://zerodha.com/static/images/landing.png"
            alt="Investment platform"
            className="img-fluid w-75 mx-auto"
          />
          <h1 className="fs-1 fw-semibold mt-4 mb-3">Invest in everything</h1>
          <p className="fs-5 mb-4">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <button
            className="btn btn-primary btn-custom"
            style={{
              height: "50px",
              width: "200px",
              lineHeight: "30px",
              background: "rgb(56,126,209)",
              cursor: "pointer",
            }}
          >
            Sign Up for Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
