import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Footer from "./Footer.jsx";
import Navabar from "./Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import HomePages from "./Home/HomePages.jsx";
import SignUp from "./Signup/SignUp.jsx";
import AboutPage from "./about/AboutPage.jsx";
import ProductPage from "./Products/ProductPage.jsx";
import SupportPortal from "./SupportPortal/SupportPortal.jsx";
import Pricing from "./Pricing/Pricing.jsx";
function App() {
  return (
    <>
      <Navabar />
      <Routes>
        <Route path="/" element={<HomePages />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
        <Route path="/support" element={<SupportPortal />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
