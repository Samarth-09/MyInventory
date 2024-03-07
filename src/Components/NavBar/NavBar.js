import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <div className="nav">
        {/* <a href="#">Home</a> */}
        <img src="/Images/logo1.png" width={200} height={100}></img>
        <Link to="/inventory" className="links">Inventory</Link>
        {/* <a>Inventory</a> */}
        <Link to="/" className="links">About Us</Link>
        {/* <a href="#">About Us</a> */}
        <div class="profile-icon">P</div>
      </div>
    </>
  );
}
