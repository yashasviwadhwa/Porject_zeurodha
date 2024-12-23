const Footer = () => {
  return (
    <div className="">
      <div className="bg-light text-da container-fluid mt-5">
        <div className="row ">
          <div className="col-3 mt-5  mb-3">
            <img
              src="https://zerodha.com/static/images/logo.svg"
              alt="Zerodha Logo"
              className="img-fluid w-75 mb-2"
            />
            <p className="mt-2">© 2010 - 2024, Zerodha Broking Ltd.</p>
            <div className="icons">
              <a href="#" className="text-dark me-2">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-dark me-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-dark">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="col-md-3 col-12 mb-3 mt-5">
            <h5 className="mb-3">Company</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Zerodha.tech
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Press & Media
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Zerodha cares
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-12 mb-3 mt-5">
            <h5 className="mb-3">Support</h5>
            <ul className="list-unstyled d-flex flex-column gap-1">
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Support Portal
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Z-connect Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  list of Charges
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Download & resoruce
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Video{" "}
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Makret Overview
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  How to file a complaints
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  status of your Complaints
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-12 mb-3 mt-5">
            <h5 className="mb-3">Account</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Open an Account
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Fund Transfer
                </a>
              </li>
            </ul>
          </div>
            
        </div>
      </div>
    </div>
  );
};

export default Footer;
