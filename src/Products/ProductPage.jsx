import React from "react";
import Product_Hero from "./Product_Hero";
import Product_description from "./Product_description";
import Universe from "./Universe";

const ProductPage = () => {
  return (
    <div>
      <Product_Hero />
      <Product_description
        img="https://zerodha.com/static/images/products-kite.png"
        product_name="Kite"
        p="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        property="flex-row"
      />
      <Product_description
        img="https://zerodha.com/static/images/products-console.png"
        product_name="Console"
        p="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.     "
        property="  flex-row-reverse"
      />
      <Product_description
        img="https://zerodha.com/static/images/products-coin.png"
        product_name="Coin"
        p="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.  "
        property="  flex-row"
      />
      <Product_description
        img="https://zerodha.com/static/images/products-kiteconnect.png"
        product_name="Kite Connect API"
        p="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        property="  flex-row-reverse"
      />
      <Product_description
        img="https://zerodha.com/static/images/varsity-products.png"
        product_name="Varsity mobile"
        p="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        property="  flex-row"
      />
      <Universe />
    </div>
  );
};

export default ProductPage;
