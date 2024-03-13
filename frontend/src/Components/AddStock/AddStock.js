import { useState, React } from "react";
import "./AddStock.css";
import { Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar.js";
import Footer from "../Footer/Footer.js";
const AddStock = () => {
  const [formData, setFormData] = useState({
    prid: "",
    name: "",
    price: "",
    quantity: "",
    supplier: "",
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
        <p>Add Stock</p>
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
          Price:
          <input
            type="text"
            name="price"
            value={formData.price}
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
        <label className="label">
          Supplier:
          <input
            type="text"
            name="supplier"
            value={formData.supplier}
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
};

// Styles

export default AddStock;
