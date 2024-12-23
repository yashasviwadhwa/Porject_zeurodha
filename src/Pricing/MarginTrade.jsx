import React from "react";

const MarginTrade = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col">
          <h5>Margin Trading Facility (MTF)</h5>
          <ul>
            <li>
              MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
              The interest is applied from T+1 day until the day MTF stocks are
              sold.
            </li>
            <li>
              MTF Brokerage: 0.03% or Rs. 20/executed order, whichever is lower.
            </li>
            <li>MTF pledge charge: ₹30 + GST per pledge request per ISIN.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MarginTrade;
