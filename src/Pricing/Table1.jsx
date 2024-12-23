import React from "react";

const Table1 = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col text-left">
          <h6 className="text-left fs-5 fw-bold mb-4">Charges for account opening</h6>
          <table className="table bg-primary mx-auto  table-light">
            <thead>
              <tr>
                <th scope="col">Type of account</th>
                <th scope="col">Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">Online account</td>
                <td>FREE</td>
              </tr>
              <tr>
                <td scope="row">Offline account</td>
                <td>FREE</td>
              </tr>
              <tr>
                <td scope="row">NRI account (offline only)</td>
                <td>₹ 500</td>
              </tr>
              <tr>
                <td>
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td>₹ 500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Table1;
