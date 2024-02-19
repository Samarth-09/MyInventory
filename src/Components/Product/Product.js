import React from "react";
// import img1 from "./Images/img1.png";
import "./Product.css";
export default function Product(props) {
  return (
    <>
      <div class="product-card">
        <img className="image" src={props.img} alt="Product Image"></img>
        <hr/>
        <div class="product-details">
          <button>{props.name}</button>
          <hr/>
          <button>Quantity:- {props.quantity}</button>
          <hr/>
          <button>Sales:- {props.sales}</button>
        </div>
      </div>
    </>
  );
}
