import React from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const SupportHero = () => {
  return (
    <div className="container-fluid p-5" style={{ backgroundColor: "#387ed1" }}>
      <div className="container d-flex justify-content-between w-75 mx-auto">
        <div>
          <h3 className="fs-5 text-white">Support Portal</h3>
        </div>
        <div>
          <h3 className="fs-5 text-white">Track Ticket</h3>
          <div
            style={{
              width: "95px",
              height: "1.5px",
              backgroundColor: "#fff",
            }}
          ></div>
        </div>
      </div>
      <div className="container w-75 mx-auto text-white">
        <div className="row">
          <div className="col-md-7 mt-4">
            <p className="w-75 fs-4">
              Search for an answer or browse help topics to create a ticket
            </p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search for an answer or browse help topics to create a ticket"
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <FaSearch />
                </button>
              </div>
            </div>
            <div
              className="d-md-flex  m-3 m-sm-0"
              style={{ columnGap: "1rem" }}
            >
              <div>
                <p>Track Your Opening</p>
                <div
                  style={{
                    height: "1px",
                    width: "120px",
                    backgroundColor: "#fff",
                    marginTop: "0px",
                    marginBottom: "0",
                  }}
                ></div>
              </div>
              <div>
                <p className="">Track Your Opening</p>
                <div
                  style={{
                    height: "1px",
                    width: "120px",
                    backgroundColor: "#fff",
                    marginTop: "0px",
                  }}
                ></div>
              </div>
              <div>
                <p>Track Your Opening</p>
                <div
                  style={{
                    height: "1px",
                    width: "120px",
                    backgroundColor: "#fff",
                    marginTop: "0px",
                  }}
                ></div>
              </div>
            </div>
            <div className="mt-3">
              <p>Track Your Opening</p>
              <div
                style={{
                  height: "1px",
                  width: "120px",
                  backgroundColor: "#fff",
                  marginTop: "0px",
                  marginBottom: "0",
                }}
              ></div>
            </div>
          </div>
          <div className="col-md-5 mt-4">
            <h5 className="mb-3 fs-4">Featured</h5>
            <ol className="d-flex flex-column gap-3">
              <li>
                <a href="#" className="text-white ">
                  Latest Intraday leverages and Square-off timings
                </a>
              </li>
              <li>
                <a href="#" className="text-white ">
                  Offer for sale (OFS) - December 2024
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportHero;
