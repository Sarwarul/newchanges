import React from "react";
import "./Navbar.css";

const Navbar=()=>{
  return(
    <div className="header">
    <div className="logo-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxKFLD_CUCAARwL6dse_b0vyrLEaMG9sJtDsJwrn6QWA&s"/>
    </div>
    <div className="nav-items">
        <ul>
            <li>About us</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
    </div>
    </div>
  )
}
export default Navbar;