import React from "react";
import "./Button.css";
import { BrowserRouter, useNavigate, Route, Routes } from "react-router-dom";
import AddStock from "../AddStock/AddStock";
export default function Button(props) {
  const navigate = useNavigate();
  function handleClick(e) {
    if (e.target.name == "Add Stock") {
      navigate("/addStock");
    }
    else {
      navigate("/addSales");
    }
    }
  return (
    <div>
      {/* <BrowserRouter> */}
      <button className="bttn" onClick={handleClick} name={props.name}>
        {props.name}
      </button>
      {/* </BrowserRouter> */}
      {/* <Routes>
        <Route path="/addStock">
          <AddStock />
        </Route>
      </Routes> */}
    </div>
  );
}
