import React from "react";

const PartnerCard = ({ imageSrc, description, altText }) => (
  <div className="col">
    <img
      src={imageSrc}
      alt={altText}
      className="img-fluid d-block w-50 mx-auto mb-3"
    />
    <p style={{ maxWidth: "350px", margin: "0 auto" }}>{description}</p>
  </div>
);

const Universe = () => {
  const partnerPlatforms = [
    {
      imageSrc:
        "https://zerodha.com/static/images/partners/zerodhafundhouse.png",
      description:
        "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
      altText: "Zerodha Fund House Logo",
    },
    {
      imageSrc: "https://zerodha.com/static/images/products/sensibull-logo.svg",
      description:
        "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
      altText: "Sensibull Logo",
    },
    {
      imageSrc: "https://zerodha.com/static/images/partners/tijori.svg",
      description:
        "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
      altText: "Tijori Logo",
    },
    {
      imageSrc: "https://zerodha.com/static/images/products/streak-logo.png",
      description:
        "Systematic trading platform that allows you to create and backtest strategies without coding.",
      altText: "Streak Logo",
    },
    {
      imageSrc: "https://zerodha.com/static/images/products/smallcase-logo.png",
      description:
        "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
      altText: "Smallcase Logo",
    },
    {
      imageSrc: "https://zerodha.com/static/images/products/ditto-logo.png",
      description:
        "Personalized advice on life and health insurance. No spam and no mis-selling.",
      altText: "Ditto Logo",
    },
  ];

  return (
    <div className="container w-75">
      <div className="row text-center mt-5 mb-3">
        <div className="col">
          <h3>The Zerodha Universe</h3>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 text-center py-5 g-lg-5 align-items-center justify-content-center g-2">
        {partnerPlatforms.map((platform, index) => (
          <PartnerCard
            key={index}
            imageSrc={platform.imageSrc}
            description={platform.description}
            altText={platform.altText}
          />
        ))}
      </div>
    </div>
  );
};

export default Universe;
