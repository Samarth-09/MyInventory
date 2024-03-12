import React, { useEffect, useState } from "react";
import WebName from "./WebName/WebName";
import NavBar from "./NavBar/NavBar";
import Product from "./Product/Product";
import "./Inventory.css";
import Button from "./Button/Button";
import axios from "axios";
import Footer from "./Footer/Footer";
// import * as img from "/Images/img1.png";
export default function () {

  const [data, setData] = useState([
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
  ]);
  const fetchData = async () => {
    var id = localStorage.getItem("uid") ?? 1;
    var res = await axios.get("http://localhost:8080/user/"+id);
    setData(res.data.prlist);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

 
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
              name={item.name}
              quantity={item.quantity}
              sales={item.sales_amount}
              img="/Images/img2.webp"
              price={item.price}
            ></Product>
          ))}
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

// const App = () => {
//   const [isDialogOpen, setDialogOpen] = useState(false);

//   const openDialog = () => {
//     setDialogOpen(true);
//   };

//   const closeDialog = () => {
//     setDialogOpen(false);
//   };

//   return (
//     <div>
//       <button onClick={openDialog}>Open Dialog</button>
//       <MyDialog
//         isOpen={isDialogOpen}
//         onClose={closeDialog}
//         content="This is the dialog content."
//       />
//     </div>
//   );
// };
