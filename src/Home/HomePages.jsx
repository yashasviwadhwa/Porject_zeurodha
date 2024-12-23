import Hero from "./Hero.jsx";
import Navabar from "../Navbar.jsx";
import Trust from "./Trust.jsx";
import React from "react";
import Pricing from "./Pricing.jsx";
import OpenMarket from "./OpenMarket.jsx";
import Account from "./Account.jsx";

const HomePages = () => {
  return (
    <div>
      <Hero />
      <Trust />
      <Pricing />
      <OpenMarket />
      <Account />
    </div>
  );
};

export default HomePages;
