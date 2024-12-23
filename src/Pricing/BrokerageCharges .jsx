import React from "react";

const BrokerageCharges = () => {
  return (
    <div className="container my-5">
      <h2 className="text-left mb-4">Charges explained</h2>
      <div className="row">
        <div className="col-md-6 ">
          <div>
            <h5>Securities/Commodities transaction tax</h5>
            <p>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.
            </p>
            <p>
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>
          </div>
          <div>
            <h5>Transaction/Turnover Charges</h5>
            <p>
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions
            </p>
            <p>
              BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
              to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
              merged into a new group X w.e.f 01.12.2017)
            </p>
            <p>
              BSE has revised transaction charges in SS and ST groups to
              ₹1,00,000 per crore of gross turnover.
            </p>
            <p>
              BSE has revised transaction charges for group A, B and other non
              exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
              W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
              December 1, 2022.
            </p>
            <p>
              BSE has revised transaction charges in M, MT, TS and MS groups to
              ₹275 per crore of gross turnover.
            </p>
          </div>
          <div>
            <h5>Call & trade</h5>
            <p>
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including auto square off orders.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <h5>Securities/Commodities transaction tax </h5>
            <p>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.
            </p>
            <p>
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>
          </div>
          <div>
            <h5>GST</h5>
            <p>
              Tax levied by the government on the services rendered. 18% of
              (brokerage + SEBI charges)
            </p>
            <h5>SEBI Charges</h5>
            <p>
              Charged at ₹10 per crore + GST by Securities and Exchange Board of
              India for regulating the markets.
            </p>
          </div>
          <div>
            <h5>DP (Depository participant) charges</h5>
            <p>
              ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
              charged on the trading account ledger when stocks are sold,
              irrespective of quantity.
            </p>
            <p>
              Female demat account holders (as first holder) will enjoy a
              discount of ₹0.25 per transaction on the CDSL fee.
            </p>
          </div>
          <div>
            <h5>Pledging charges</h5>
            <p>₹30 + GST per pledge request per ISIN.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrokerageCharges;
