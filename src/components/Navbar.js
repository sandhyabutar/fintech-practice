import React from "react";
import Humanicon from "../Images/Humanicon.png"

function Navbar() {
  return (
    <div>
      {" "}
      <nav
        className="navbar navbar-inverse"
        style={{ background: "#E5F8E8", border: "transparent", height: "80px" }}
      >
        <div className="container-fluid" style={{ paddingTop: "8px" }}>
          <div className="navbar-header" style={{display:"flex"}}>
            <p
              className="fintech_text"
              style={{
                color: "#19C03E",
                marginRight: "80px",
                fontSize: "30px",
              }}
            >
              Fintech
            </p>
            <ul>
              <li>
                <a href="#home">Service</a>
              </li>
              <li>
                <a href="#news">Support</a>
              </li>
              <li>
                <a href="#contact">Home</a>
              </li>
              
            </ul>
           
          </div>
          <img src={Humanicon} style={{width:"40px", height:"50px",float:"right"}}/>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
