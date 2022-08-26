import React from 'react'
import Input from "./Input";
// import Button from "react-bootstrap/Button";
import google_icon from "../Images/grommet-icons_google.png";
import facebook_icon from "../Images/facebook_icon.png";

function RightLR() {
  return (
    <div className="right">
    <div className="right-body">
    <h1>Login</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Input name="E-mail ID" type="text" />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Input name="Password"  type="password"/>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button className="button"
          style={{
           
          }}
        >
          Login
        </button>
      </div>
      <p className="Horizontal_line">
        <span>Or login with</span>
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <div className="google_fb_icons" style={{ marginRight: "20px" }}>
          <div style={{ display: "flex" }}>
            <img src={google_icon} alt="google_icon" />
            <div style={{ margin: "5px 0px 0px 20px" }}>Google</div>
          </div>
        </div>

        <div class="google_fb_icons">
          <div style={{ display: "flex" }}>
            <img src={facebook_icon} alt="facebook_icon" />
            <div style={{ margin: "5px 0px 0px 15px" }}>Facebook</div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin:"30px",
        }}
      >
        <div >Don’t have an account?</div>
        <a href="./register" style={{ color: "#008088" }}>
          Register
        </a>
       {/* <Button>click me</Button> */}
      </div>
      </div>
      </div>
  )
}

export default RightLR