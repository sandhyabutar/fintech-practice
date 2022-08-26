import React from 'react'
import Input from "./Input";
import Button from "react-bootstrap/Button";



function RightReg() {
  return (
    <div className="right">
    <div className="right-body">
    <h1>Register</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Input name="Name" type="text" />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Input name="E-mail ID"  type="password"/>
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
        <Input name="Confirm Password"  type="password"/>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        <button className="button"
          style={{
           
          }}
        >
          Register
        </button>
      </div>
    
    
      </div>
      </div>
  )
}
  


export default RightReg
