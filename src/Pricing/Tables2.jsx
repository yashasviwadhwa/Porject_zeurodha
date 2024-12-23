import React from "react";

const Tables2 = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          <h2 className="text-start mb-4">Service Charges</h2>
          <table className="table table-primary mx-auto  table-light ">
            <thead>
              <tr>
                <th scope="col">Service</th>
                <th scope="col">Billing Frequency</th>
                <th scope="col">Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tickertape</td>
                <td>Monthly / Annual</td>
                <td>Free: 0 | Pro: 249 / 2399</td>
              </tr>
              <tr>
                <td>Smallcase</td>
                <td>Per transaction</td>
                <td>Buy & Invest More: 100 | SIP: 10</td>
              </tr>
              <tr>
                <td>Kite Connect</td>
                <td>Monthly</td>
                <td>Connect: 2000 | Historical: 2000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tables2;
