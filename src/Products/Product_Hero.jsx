import React from "react";

const Product_Hero = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 col-md-4 text-center mx-auto text-black mb-5">
          <h2 className="fs-1  mb-3 text-captialize fw-bold">
            Zerodha Products
          </h2>
          <p className="fs-5 mb-2">
            Sleek, modern, and intuitive trading platforms
          </p>
          <p>
            Check out our
            <a href="" className="text-decoration-none">
              {" "}
              investment offerings →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product_Hero;
