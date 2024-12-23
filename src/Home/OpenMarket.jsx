import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const OpenMarket = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center   mx-auto">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img
            src="https://zerodha.com/static/images/index-education.svg"
            alt="Stock market education illustration"
            className="img-fluid w-75"
          />
        </div>

        <div className="col-12 col-md-6 text-start">
          <h3 className="mb-3 fs-2 fw-bold">Free and open market education</h3>
          <div className="mb-4">
            <p className="text-muted lh-base">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a
              href="#"
              className="btn btn-link text-primary p-0 text-decoration-none"
            >
              Learn More
              <span className="ms-2">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </a>
          </div>
          <div>
            <p className="text-muted lh-base">
              Our comprehensive resources help you understand market dynamics,
              investment strategies, and develop your trading skills.
            </p>
            <a
              href="#"
              className="btn btn-link text-primary p-0 text-decoration-none"
            >
              Learn More
              <span className="ms-2">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenMarket;
