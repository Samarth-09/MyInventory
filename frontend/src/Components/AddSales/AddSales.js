import React from "react";
import "../AddStock/AddStock.css";
import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
export default function AddSales() {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    quantity: "",
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
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="back">
      <NavBar></NavBar>
      <hr className="addstock-hr"></hr>
      <div className="stock-input">
        <p>Add Sales</p>
        <label className="label">
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="input"
          />
        </label>
        <label className="label">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
          />
        </label>
        <label className="label">
          Quantity:
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
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
