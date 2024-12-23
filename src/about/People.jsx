import React from "react";

import "./People.css";
const People = () => {
  return (
    <div className="container w-75 my-5">
      <div className="row align-items-center justify-content-center mx-auto">
        <h5 className="text-center fs-2 fw-bolder mb-4">People</h5>

        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src="https://zerodha.com/static/images/nithin-kamath.jpg"
            alt="Nithin Kamath"
            className="rounded-circle w-50"
          />
          <h6 className="mt-3 fs-4 mb-2">Nithin Kamath</h6>
          <p className="text-muted">Founder, CEO</p>
        </div>

        <div className="col-12 col-md-6">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p class="connect-breadcrumb">
            Connect on
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item active">
                  <a href="#">HomePage</a>
                </li>
                <li class="breadcrumb-item active">
                  <a href="#">TradingQna</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Twitter   
                </li>
              </ol>
            </nav>
          </p>
        </div>
      </div>
    </div>
  );
};

export default People;
