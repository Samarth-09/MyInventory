import { useState, React } from "react";
import "../AddStock/AddStock.css";
import { Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar.js";
import Footer from "../Footer/Footer.js";
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
    // Add your form submission logic here
    console.log("Form submitted:", name+pwd+saddr+sname);
  };

  //   return (
  //     <div className="back">
  //       <NavBar></NavBar>
  //       <hr className="addstock-hr"></hr>
  //       <div className="stock-input">
  //         <p>Add Stock</p>
  //         <label className="label">
  //           Username:
  //           <input
  //             type="text"
  //             name="UserName"
  //             value={name}
  //             onChange={(e) => {setName(e.target.value);}}
  //             className="input"
  //           />
  //         </label>
  //         <label className="label">
  //           Name:
  //           <input
  //             type="text"
  //             name="name"
  //             value={pwd}
  //             onChange={(e) => {setName(e.target.value);}}
  //             className="input"
  //           />
  //         </label>
  //         <label className="label">
  //           Price:
  //           <input
  //             type="text"
  //             name="price"
  //             value={formData.price}
  //             onChange={handleChange}
  //             className="input"
  //           />
  //         </label>
  //         <label className="label">
  //           Quantity:
  //           <input
  //             type="text"
  //             name="quantity"
  //             value={formData.quantity}
  //             onChange={handleChange}
  //             className="input"
  //           />
  //         </label>
  //         <label className="label">
  //           Supplier:
  //           <input
  //             type="text"
  //             name="supplier"
  //             value={formData.supplier}
  //             onChange={handleChange}
  //             className="input"
  //           />
  //         </label>
  //         <button type="submit" className="bttnn" onClick={handleSubmit}>
  //           Submit
  //         </button>
  //       </div>
  //       <Footer></Footer>
  //     </div>
  //   );
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
