import { Routes, Route } from "react-router-dom";
import CardDetails from "./component/CardDetails";
import HomePage from "./component/HomePage";
import NavBar from "./component/NavBar";
import Login from "./component/Login";
import AddToCart from "./component/AddToCart";
import UserAddress from "./component/UserAddress";
// import OrderHistory from "./component/OrderHistory";
import Footer from "./component/Footer";
import TestingOrderHistory from "./component/TestingOrderHistory";
// import { useState } from "react";
import PNF from "./PNF";
const RoutePage = () => {
//   const token = localStorage.getItem("Token");

  return (
    <>
      <div>
        {/* <Login/> */}
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/cardDetail" element={<CardDetails />} />
          <Route path="/addToCart" element={<AddToCart />} />
          <Route path="/userAddress" element={<UserAddress />} />
          {/* <Route path="/orderHistory" element={<OrderHistory/>} /> */}
          <Route path="/orderHistory" element={<TestingOrderHistory />} />
          <Route path="/pnf" element={<PNF />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};
export default RoutePage;
 