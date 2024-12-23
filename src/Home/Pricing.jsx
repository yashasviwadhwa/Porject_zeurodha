const Pricing = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center mx-auto">
        <div className="col-12 col-md-6 text-start d-flex flex-column justify-content-center align-items-start ">
          <h3>Unbeatable pricing</h3>
          <p className="w-75 text-justify lh-lg">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none d-inline-block mt-4">
            See Pricing
          </a>
        </div>
        <div className="col-12 col-md-6 ">
          <div className="d-inline-flex flex-col align-items-center justify-content-center">
            <img
              src="https://zerodha.com/static/images/pricing-eq.svg"
              alt=""
              className="w-75 img-fluid"
            />
            <span className="d-flex">
              <h5 className="w-75 text-start">Free account opening</h5>
            </span>
          </div>
          <div className="d-inline-flex flex-col align-items-center">
            <img
              src="https://zerodha.com/static/images/pricing-eq.svg"
              alt=""
              className="w-75 img-fluid"
            />
            <span className="d-flex">
              <h5 className="w-25 text-start">Free account opening</h5>
            </span>
          </div>
          <div className="d-flex flex-col align-items-center">
            <img
              src="https://zerodha.com/static/images/pricing-eq.svg"
              alt=""
              className="w-50   img-fluid"
            />
            <span className="d-flex">
              <h5 className="w-25 text-start">Free account opening</h5>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
