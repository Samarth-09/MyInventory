import React from "react";
import WebName from "./WebName/WebName";
import NavBar from "./NavBar/NavBar";
import Product from "./Product/Product";
import "./Inventory.css";
import Button from "./Button/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default function () {
  const data = [
    {
      id: 1,
      name: "Realme X7 Max",
      quantity: "50",
      sales: "10000",
      img: "/Images/img1.png",
    },
    {
      id: 2,
      name: "Realme Narzo",
      quantity: "50",
      sales: "10000",
      img: "/Images/img1.png",
    },
    {
      id: 4,
      name: "Lenevo Yoga 920",
      quantity: "50",
      sales: "10000",
      img: "/Images/img1.png",
    },
    {
      id: 5,
      name: "Lenevo Yoga 720",
      quantity: "50",
      sales: "10000",
      img: "/Images/img1.png",
    },
    {
      id: 6,
      name: "Charger",
      quantity: "50",
      sales: "10000",
      img: "/Images/img1.png",
    },
    {
      id: 7,
      name: "Power Bank",
      quantity: "50",
      sales: "10000",
      img: "/Images/img1.png",
    },
    {
      id: 8,
      name: "Power Bank",
      quantity: "50",
      sales: "10000",
      img: "/Images/img1.png",
    },
    {
      id: 9,
      name: "Power Bank",
      quantity: "50",
      sales: "10000",
      img: "/Images/img1.png",
    },
  ];
  return (
    <>
      <div className="bg">
        <WebName></WebName>
        <NavBar></NavBar>
        <div className="bttns">
          <Button name="Add Stock"></Button>
          <Button name="Add Sales"></Button>
        </div>

        <div className="products">
          {data.map((item) => (
            <Product
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              sales={item.sales}
              img={item.img}
            ></Product>
          ))}
        </div>
      </div>
    </>
  );
}
