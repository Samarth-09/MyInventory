import React, { useEffect, useState } from "react";
import WebName from "./WebName/WebName";
import NavBar from "./NavBar/NavBar";
import Product from "./Product/Product";
import "./Inventory.css";
import Button from "./Button/Button";
import axios from "axios";
import Footer from "./Footer/Footer";
import { useNavigate } from "react-router-dom";
// import * as img from "/Images/img1.png";
export default function () {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      var id = localStorage.getItem("uid");
      var res = await axios.get("http://localhost:8080/user/" + id);
      if (res.data.prlist.length == 0) {
        alert("Add some Products");
        navigate("/addStock");
      } else {
        setData(res.data.prlist);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("uid") == null) {
      alert("You need to Login first");
      navigate("/login");
    } else {
      fetchData();
    }
  }, []);

  useEffect(() => {
    // Log the data state after it has been updated
    console.log(data);
  }, [data]);

  return (
    <>
      <div className="bg">
        <WebName></WebName>
        <NavBar></NavBar>
        <hr className="addstock-hr"></hr>
        <div className="bttns">
          <Button name="Add Stock"></Button>
          <Button name="Add Sales"></Button>
        </div>

        <div className="products">
          {data.map((item) => (
            <Product
              key={item.prid}
              id={item.prid}
              name={item.name}
              quantity={item.quantity}
              sales={item.sales_amount}
              img="/Images/img1.png"
              price={item.price}
            ></Product>
          ))}
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

//   {
//     id: 1,
//     name: "Realme X7 Max",
//     quantity: "50",
//     sales: "10000",
//     img: "/Images/img1.png",
//   },
//   {
//     id: 2,
//     name: "Realme Narzo",
//     quantity: "50",
//     sales: "10000",
//     img: "/Images/img2.webp",
//   },
//   {
//     id: 4,
//     name: "Lenevo Yoga 920",
//     quantity: "50",
//     sales: "10000",
//     img: "/Images/img1.png",
//   },
//   {
//     id: 5,
//     name: "Lenevo Yoga 720",
//     quantity: "50",
//     sales: "10000",
//     img: "/Images/img2.webp",
//   },
//   {
//     id: 6,
//     name: "Charger",
//     quantity: "50",
//     sales: "10000",
//     img: "/Images/img1.png",
//   },
//   {
//     id: 7,
//     name: "Power Bank",
//     quantity: "50",
//     sales: "10000",
//     img: "/Images/img2.webp",
//   },
//   {
//     id: 8,
//     name: "Power Bank",
//     quantity: "50",
//     sales: "10000",
//     img: "/Images/img1.png",
//   },
//   {
//     id: 9,
//     name: "Power Bank",
//     quantity: "50",
//     sales: "10000",
//     img: "/Images/img2.webp",
//   },
