import React from "react";
import Rectangle from "../Images/Rectangle.png";
import dots from "../Images/dots.png";

function LeftLR() {
  return (
    <div className="left">
      <h1 className="fintech_text">Fintech</h1> 
      
      
      <div className="body_left">
      <div className="left_image">
        <div className="card">
          <div className="card-body">
            <img  src={Rectangle} />
          </div>
        </div>
      </div>
    </div>
      <div className="left_text1">
      Get ready for an amazing Banking experience!
      </div>
      <div style={{margin:"40px 0px 20px 170px"}}>
      <img  src={dots}/>
      </div>
    </div>
  );
}

export default LeftLR;
