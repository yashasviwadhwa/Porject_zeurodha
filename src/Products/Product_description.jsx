import React from "react";

const ProductDescription = ({
  img,
  product_name,
  p,
  property = "flex-row",
}) => {
  return (
    <div className="container mb-5">
      <div
        className={`d-md-flex justify-content-between align-items-center ${property}`}
      >
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
          <img
            src={img}
            alt={product_name || "Product Image"}
            className="img-fluid"
          />
        </div>

        <div className="col-12 col-md-6 p-3 d-block d-md-flex flex-column justify-content-center align-items-start">
          <h3 className="fs-3 fw-bold mb-2 mt-2">{product_name}</h3>
          <p
            className=" lh-large"
            style={{
              width: "400px",
              lineHeight: "35px",
            }}
          >
            {p}
          </p>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {
  const products = [
    {
      img: "https://zerodha.com/static/images/products-kite.png",
      product_name: "Kite",
      p: "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
      property: "flex-row",
    },
    {
      img: "https://zerodha.com/static/images/products-console.png",
      product_name: "Console",
      p: "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualizations.",
      property: "flex-row-reverse",
    },
    {
      img: "https://zerodha.com/static/images/products-coin.png",
      product_name: "Coin",
      p: "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.",
      property: "flex-row",
    },
    {
      img: "https://zerodha.com/static/images/products-kiteconnect.png",
      product_name: "Kite Connect API",
      p: "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our client base.",
      property: "flex-row-reverse",
    },
    {
      img: "https://zerodha.com/static/images/varsity-products.png",
      product_name: "Varsity mobile",
      p: "An easy-to-grasp collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.",
      property: "flex-row",
    },
  ];

  return (
    <div>
      {products.map((product, index) => (
        <ProductDescription
          key={index}
          img={product.img}
          product_name={product.product_name}
          p={product.p}
          property={product.property}
        />
      ))}
    </div>
  );
};

export default ProductList;
