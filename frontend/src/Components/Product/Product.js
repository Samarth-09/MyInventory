import React, { useState } from "react";
import "./Product.css";
import QRCode from "qrcode.react";
export default function Product(props) {
  const [qr, setQr] = useState(false);
  function generateQr() {
    setQr(!qr);
  }

  return (
    <>
      <div class="product-card">
        <img className="image" src={props.img} alt="Product Image"></img>
        <hr />
        <div class="product-details">
          <button>{props.name}</button>
          <hr />
          <button>Quantity:- {props.quantity}</button>
          <hr />
          <button>Sales:- {props.sales}</button>
          <hr />
          <button onClick={generateQr}>
            {qr == true ? "Close Qr" : "Generate Qr-code"}
          </button>
          {qr == true ? <QRCode value="http://192.168.1.10:3000" /> : <></>}
        </div>
      </div>
    </>
  );
}
