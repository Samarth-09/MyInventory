import { useState, React } from "react";
import "./AddStock.css";
// import { Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar.js";
import Footer from "../Footer/Footer.js";
import axios from "axios";
// import Button from "../Button/Button.js";
const AddStock = () => {
  const [formData, setFormData] = useState({
    prid: "",
    name: "",
    price: "",
    quantity: 0,
    supName: "",
    sales_amount: 0,
    user:{
      "uid":localStorage.getItem("uid")
    }
  });

  const [x, setX] = useState(0);
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const fetchData = async () => {
    if (x == 1) {
      var res = await axios.post("http://localhost:8080/product/add", formData);
      if (res.data != null) {
        alert("Added Product");
      } else {
        alert("Unsucessfull");
      }
    } else {
      var res = await axios.post("http://localhost:8080/product/addStock", formData);
      if (res.data != null) {
        alert("Added Stock");
      } else {
        alert("Unsucessfull");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return x ? (
    <div className="back">
      <NavBar></NavBar>
      <hr className="addstock-hr"></hr>
      <button className="btn" onClick={() => setX(0)} name="Old Product">
        Old Product
      </button>
      <div className="stock-input">
        <p>Add Stock</p>
        {/* <label className="label">
          Product Id:
          <input
            type="number"
            name="prid"
            value={formData.prid}
            onChange={handleChange}
            className="input"
          />
        </label> */}
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
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="input"
          />
        </label>
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
          Supplier Name:
          <input
            type="text"
            name="supName"
            value={formData.supName}
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
  ) : (
    <div className="back">
      <NavBar></NavBar>
      <hr className="addstock-hr"></hr>
      <button className="btn" onClick={() => setX(1)} name="New Product">
        New Product
      </button>
      <div className="stock-input">
        <p>Add Stock</p>

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
          Product Id:
          <input
            type="number"
            name="prid"
            value={formData.prid}
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
