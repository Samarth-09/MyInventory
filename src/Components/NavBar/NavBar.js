import React from "react";
import "./NavBar.css"
export default function NavBar() {
  return (
    <>
      <div className="nav">
        {/* <a href="#">Home</a> */}
        <img src = "/Images/logo1.png" width={200} height={100}></img>
        {/* <link onClick={}>Inventory</link> */}
        <a href="#">About Us</a>
        <div class="profile-icon">P</div>
      </div>
    </>
  );
}
