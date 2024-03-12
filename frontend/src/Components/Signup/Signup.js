import { useState, React } from "react";
import "../AddStock/AddStock.css";
import { Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar.js";
import Footer from "../Footer/Footer.js";
import axios from "axios";
const Signup = () => {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [storeName, setStoreName] = useState("");
  const [prname, setPrname] = useState("");
  const [prprice, setPrprice] = useState("");
  const [sname, setSname] = useState("");
  const [sno, setSno] = useState("");
  const [saddr, setSaddr] = useState("");
  const [stquantity, setStquantity] = useState("");
  const [saquantity, setSaquantity] = useState("");
  const [saamount, setSaamount] = useState("");

  //     {
  //     prlist: [{
  //         name:"",
  //         price:0,
  //         supid: {
  //             name:"",
  //             no:"",
  //             addr:""
  //         },
  //         stid: {
  //             quantity: 0
  //         },
  //         sid: {
  //             quantity: 0,
  //             amount: 0
  //         }
  //     }],
  //     name: "",
  //     pwd: "",
  //     storeName: "",
  //   });

  //   const handleProduct = (e) =>{
  //     const { name, value } = e.target;
  //     setFormData((prevData) => ({
  //         ...prevData,
  //         prlist: [
  //             {
  //                 ...prevData.prlist[0],
  //             }
  //         ],
  //       }));
  //   }

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      prlist: [
        {
          name: prname,
          price: prprice,
          supid: {
            name: sname,
            no: sno,
            addr: saddr,
          },
          stid: {
            quantity: stquantity,
          },
          sid: {
            quantity: saquantity,
            amount: saamount,
          },
        },
      ],
      name: name,
      pwd: pwd,
      storeName: storeName,
    };
    // console.log("Form submitted:", user);
    storeData(user);
  };

  const storeData = async (user) => {
    const u = await axios.post("http://localhost:8080/user/save", user);
    console.log(u);
    localStorage.setItem("uid", u.data.uid);
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
    {
      state: prname,
      setState: setPrname,
      label: "Product Name",
      type: "text",
      inputName: "ProductName",
    },
    {
      state: prprice,
      setState: setPrprice,
      label: "Product Price",
      type: "number",
      inputName: "ProductPrice",
    },
    {
      state: sname,
      setState: setSname,
      label: "Supplier Name",
      type: "text",
      inputName: "SupplierName",
    },
    {
      state: sno,
      setState: setSno,
      label: "Supplier Number",
      type: "text",
      inputName: "SupplierNumber",
    },
    {
      state: saddr,
      setState: setSaddr,
      label: "Supplier Address",
      type: "text",
      inputName: "SupplierAddress",
    },
    {
      state: stquantity,
      setState: setStquantity,
      label: "Stock Quantity",
      type: "number",
      inputName: "StockQuantity",
    },
    {
      state: saquantity,
      setState: setSaquantity,
      label: "Sale Quantity",
      type: "number",
      inputName: "SaleQuantity",
    },
    {
      state: saamount,
      setState: setSaamount,
      label: "Sale Amount",
      type: "number",
      inputName: "SaleAmount",
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
