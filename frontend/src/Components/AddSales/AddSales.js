import React from "react";
import "../AddStock/AddStock.css";
import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import axios from "axios";
import { queries } from "@testing-library/react";
export default function AddSales() {
  const [formData, setFormData] = useState({
    sales_amount: 0,
    name: "",
    quantity: 0,
    prid: 0,
    user: {
      uid: localStorage.getItem("uid")
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();    
  };

  const fetchData = async () => {
    var res = await axios.post("http://localhost:8080/product/addSales", formData);
    if(res.data != null)
    {
      alert("Sales Added");
    }
    else{
      alert("Unsuccessfull");
    }
  }
  return (
    <div className="back">
      <NavBar></NavBar>
      <hr className="addstock-hr"></hr>
      <div className="stock-input">
        <p>Add Sales</p>
        <label className="label">
          Product Id:
          <input
            type="number"
            name="prid"
            value={formData.prid}
            onChange={handleChange}
            className="input"
          />
        </label>
        {/* <label className="label">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
          />
        </label> */}
        <label className="label">
          Quantity:
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="input"
          />
        </label>
        <label className="label">
          Sales:
          <input
            type="number"
            name="sales_amount"
            value={formData.sales_amount}
            onChange={handleChange}
            className="input"
          />
        </label>
        <button type="submit" className="bttnn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
}
