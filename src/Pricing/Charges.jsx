import React from "react";

const Charges = () => {
  return (
    <section className="container text-center mx-auto w-75 ">
      <div className="row mt-5 ">
        <h3 className="fw-bold fs-2 ">Charges</h3>
        <p className="fw-lighter fs-5 mt-2" style={{ marginBottom: "80px" }}>
          List of all charges and taxes
        </p>
        <div className="col-md-4 col-12">
          <img
            src="https://zerodha.com/static/images/pricing-eq.svg"
            alt=""
            className="w-50"
          />
          <h4 className="fs-4 fw-bold mb-3">Free equity delivery</h4>
          <p className="lh-lg fw-lighter ">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-md-4 col-12">
          <img
            src="https://zerodha.com/static/images/other-trades.svg"
            alt=""
            className="w-50"
          />
          <h4 className="fs-4 fw-bold mb-3">Intraday and F&O trades</h4>
          <p className="lh-lg fw-lighter">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-md-4 col-12">
          <img
            src="https://zerodha.com/static/images/pricing-eq.svg"
            alt=""
            className="w-50"
          />
          <h4 className="fs-4 fw-bold mb-3">Free direct MF</h4>
          <p className="lh-lg fw-lighter">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Charges;
