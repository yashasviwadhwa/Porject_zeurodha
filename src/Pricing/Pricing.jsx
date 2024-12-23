import React from "react";
import Charges from "./Charges";
import Table1 from "./Table1";
import Table2 from "./Tables2";
import BrokerageCharges from "./BrokerageCharges ";
import MarginTrade from "./marginTrade";
import Dicalaimer from "./Dicalaimer";
const Pricing = () => {
  return (
    <div>
      <Charges />
      <BrokerageCharges />
      <MarginTrade />
      <Dicalaimer />
      <Table1 />
      <Table2 />
    </div>
  );
};

export default Pricing;
