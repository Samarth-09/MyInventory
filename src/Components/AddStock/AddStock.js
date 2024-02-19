import { useState, React } from "react";
import { Route } from "react-router-dom";
export default function AddStock() {
  const [data, setData] = useState({
    category: "",
    name: "",
    price: "",
    quantity: "",
    supplier: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
  }
  function handleChange(e) {
    setData((item) => ({
      ...item,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    
      <form>
        <label>
          Category:-
          <input
            type="text"
            name="category"
            value={data.category}
            onChange={handleChange}
          ></input>
        </label>

        <label>
          Name:-
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Price:-
          <input
            type="number"
            name="price"
            value={data.price}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Quantity:-
          <input
            type="number"
            name="quantity"
            value={data.quantity}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          supplier:-
          <input
            type="text"
            name="supplier"
            value={data.supplier}
            onChange={handleChange}
          ></input>
        </label>
      </form>
    
  );
}
