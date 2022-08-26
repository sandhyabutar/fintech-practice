import React from "react";

function Input(props) {
  return (
    <div style={{ position: "relative",marginBottom:"20px"}}>
      <div>{props.name}</div>
      <input className="Input"
        type={props.type}
      />
    </div>
  );
}

export default Input;
