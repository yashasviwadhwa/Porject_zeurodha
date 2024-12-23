import React from "react";

const SignUp = () => {
  return (
    <div className="container mt-5 mb-5 p-3">
      <div className="row mt-5 d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-6 d-flex flex-col justify-content-center">
          <img
            src="https://signup.zerodha.com/img/landing.46a77378.png"
            alt="Signup Illustration"
            className="img-fluid"
            style={{ width: "500px" }}
          />
        </div>

        {/* Signup Form Section */}
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start">
          <h3 className="fw-bold fs-2 text-capitalize text-center">
            Signup now
          </h3>
          <p className="fw-lighter fs-5 text-center">
            Or track your existing application.
          </p>

          <form className="form-floating">
            <input
              type="tel"
              className="form-control   mt-3 mb-3"
              id="mobileInput"
              placeholder="+91"
              defaultValue="+91"
              style={{ width: "300px" }}
            />
            <label htmlFor="mobileInput">Mobile Number</label>
          </form>

          <button className="btn btn-primary  " style={{ width: "300px" }}>
            Continue
          </button>

          <p className="mt-3 text-center">
            <a href="#" className="text-primary">
              Want to open an NRI account?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
