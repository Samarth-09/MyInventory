import { useState, React } from "react";
import "../AddStock/AddStock.css";
import { Route, useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar.js";
import Footer from "../Footer/Footer.js";
import axios from "axios";
const Signup = () => {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [storeName, setStoreName] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      prlist: [],
      name: name,
      pwd: pwd,
      storeName: storeName,
    };
    // console.log("Form submitted:", user);
    storeData(user);
  };

  const storeData = async (user) => {
    const res = await axios.post("http://localhost:8080/user/signup", user);
    console.log(res.data);
    localStorage.setItem("uid", res.data.uid);
    alert(`Your uid is:- ${res.data.uid}`);
    navigate("/inventory");
  };

  const stateHooks = [
    {
      state: name,
      setState: setName,
      label: "Username",
      type: "text",
      inputName: "UserName",
    },
    {
      state: pwd,
      setState: setPwd,
      label: "Password",
      type: "password",
      inputName: "Password",
    },
    {
      state: storeName,
      setState: setStoreName,
      label: "Store Name",
      type: "text",
      inputName: "StoreName",
    },
  ];

  return (
    <div className="back">
      <NavBar></NavBar>
      <hr className="addstock-hr"></hr>
      <div className="stock-input">
        <p>Sign-Up</p>
        {stateHooks.map(
          ({ state, setState, label, type, inputName }, index) => (
            <label key={index} className="label">
              {label}:
              <input
                type={type}
                name={inputName}
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="input"
              />
            </label>
          )
        )}
        <button type="submit" className="bttnn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
};

// Styles

export default Signup;
