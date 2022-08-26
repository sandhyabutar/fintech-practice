import React from 'react'
import Rectangle from "../Images/Rectangle.png";

function DivLeft(props) {
  return (
   <div style={{ display: "flex", padding: "15px 10px 10px 10px", lineHeight: "0.1" }}>
    
    <img
      src={Rectangle}
      alt="Avatar"
      style={{ width: "20%",height:"20%", borderRadius: "100%", margin: "5px" }}
    />
    <div style={{paddingRight:"25%"}}>
      <p style={{ fontSize: "15px", fontWeight: "bold" }}>{props.name }</p>
      <p>{props.companytype}</p>
      <p style={{ fontSize: "10px", color: "#D3D3D3" }}>{props.company}</p>
    </div>
    <p style={{ fontSize: "15px",  }}>{props.day}</p>
  </div>
  )
}

export default DivLeft