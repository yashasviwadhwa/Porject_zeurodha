
const Account = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex flex-column gap-3 justify-content-center align-items-center">
          <h2 className="fw-bold">Open a Zerodha account</h2>
          <p className="fs-5">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <button
            className="btn btn-primary btn-custom mb-5"
            style={{
              height: "50px",
              width: "200px",
              lineHeight: "30px",
              background: "rgb(56,126,209)",
              cursor: "pointer",
            }}
          >
            Sign Up for Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
