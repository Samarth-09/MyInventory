import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./Profile.css";
export default function Profile() {
  return (
    <>
      <div className="back">
        <NavBar></NavBar>
        <hr className="addstock-hr"></hr>
        <div className="stock-input">
          <p>Product Name:- Realme X7 max</p>
          <hr className="addstock-hr"></hr>
          <p>Total Sales:- 100000</p>
          <hr className="addstock-hr"></hr>
          <p>Supplier:- Noida</p>
          <hr className="addstock-hr"></hr>
          <p>Quantity left:- 100</p>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
