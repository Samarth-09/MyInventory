import React, { useEffect, useState } from "react";
import WebName from "./WebName/WebName";
import NavBar from "./NavBar/NavBar";
import Product from "./Product/Product";
import "./Inventory.css";
import Button from "./Button/Button";
import axios from "axios";
import Footer from "./Footer/Footer";
export default function () {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Realme X7 Max",
      quantity: "50",
      sales: "10000",
      img: "/Images/img1.png",
    },
    {
      id: 2,
      name: "Realme Narzo",
      quantity: "50",
      sales: "10000",
      img: "/Images/img2.webp",
    },
    {
      id: 4,
      name: "Lenevo Yoga 920",
      quantity: "50",
      sales: "10000",
      img: "/Images/img1.png",
    },
    {
      id: 5,
      name: "Lenevo Yoga 720",
      quantity: "50",
      sales: "10000",
      img: "/Images/img2.webp",
    },
    {
      id: 6,
      name: "Charger",
      quantity: "50",
      sales: "10000",
      img: "/Images/img1.png",
    },
    {
      id: 7,
      name: "Power Bank",
      quantity: "50",
      sales: "10000",
      img: "/Images/img2.webp",
    },
    {
      id: 8,
      name: "Power Bank",
      quantity: "50",
      sales: "10000",
      img: "/Images/img1.png",
    },
    {
      id: 9,
      name: "Power Bank",
      quantity: "50",
      sales: "10000",
      img: "/Images/img2.webp",
    },
  ]);
  const fetchData = async () => {
    var res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    var d = [...data];
    d.push({
      id: 10,
      name: res.data.userId,
      quantity: "100",
      sales: "100",
      img: "/Images/img2.webp",
    });
    // data.push();
    setData(d);
    console.log(data);
  };
  useEffect(() => {
    // var n =9, i=1;
    // while(i<=n)
    // {

    // }
    fetchData();
  }, []);

  // const [isDialogOpen, setDialogOpen] = useState(false);

  // const openDialog = () => {
  //   setDialogOpen(true);
  // };

  // const closeDialog = () => {
  //   setDialogOpen(false);
  // };
  // const MyDialog = ({ isOpen, onClose, content }) => {
  //   return (
  //     <div className={`dialog ${isOpen ? "open" : ""}`}>
  //       <div className="dialog-content">
  //         <span onClick={onClose} className="close-button">
  //           &times;
  //         </span>
  //         {content}
  //       </div>
  //     </div>
  //   );
  // };

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
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              sales={item.sales}
              img={item.img}
            ></Product>
          ))}
        </div>
        {/* <button onClick={openDialog}>Open Dialog</button>
        <MyDialog
          isOpen={isDialogOpen}
          onClose={closeDialog}
          content="This is the dialog content."
        /> */}
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
