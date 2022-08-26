import React from "react";
import ".//Page.css";
import Rectangle from "../Images/Rectangle.png";
import DivLeft from "./DivLeft";

function Page() {
  return (
    <div className="container" style={{ display: "flex" }}>
      <div className="left1">
        <div style={{ display: "flex" }}>
          <h3>Search</h3>
          <h3 style={{ color: "#D3D3D3", paddingRight: "55%" }}>123</h3>
          <h3>filter</h3>
        </div>
        <div
          style={{
            display: "flex",
            padding: "10px 10px 0px 10px",
            lineHeight: "0.1",
            background: "#D3D3D3",
          }}
        >
          <img
            src={Rectangle}
            alt="Avatar"
            style={{
              width: "20%",
              height: "20%",
              borderRadius: "100%",
              margin: "5px",
            }}
          />
          <div style={{ paddingRight: "25%" }}>
            <p style={{ fontSize: "15px", fontWeight: "bold" }}>
              Lukas Hafman{" "}
            </p>
            <p>Barista</p>
            <p style={{ fontSize: "10px", color: "#D3D3D3" }}>Kobal company</p>
          </div>
          <p style={{ fontSize: "15px" }}>Wednesday</p>
        </div>
        <DivLeft
          name="Lukas Hufman"
          companytype="Brista"
          company="kobal company"
          day="wednesday"
        />
        <DivLeft
          name="Lukas Hufman"
          companytype="Brista"
          company="kobal company"
          day="wednesday"
        />
        <DivLeft
          name="Lukas Hufman"
          companytype="Brista"
          company="kobal company"
          day="wednesday"
        />
        <DivLeft
          name="Lukas Hufman"
          companytype="Brista"
          company="kobal company"
          day="wednesday"
        />
        <DivLeft
          name="Lukas Hufman"
          companytype="Brista"
          company="kobal company"
          day="wednesday"
        />
        <DivLeft
          name="Lukas Hufman"
          companytype="Brista"
          company="kobal company"
          day="wednesday"
        />
        <DivLeft
          name="Lukas Hufman"
          companytype="Brista"
          company="kobal company"
          day="wednesday"
        />
        <DivLeft
          name="Lukas Hufman"
          companytype="Brista"
          company="kobal company"
          day="wednesday"
        />
      </div>
      <div className="main-content">
        <h3>Britsta (Why not? a Resturent)</h3>
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <div className="hotel">Hotel</div>
          <div className="hotel">Resturent</div>
          <div className="hotel">3 days ago</div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ color: "#D3D3D3", marginRight: "5px" }}>
            Work Experince
          </div>
          <div>2 Year</div>
        </div>{" "}
        <div style={{ display: "flex" }}>
          <div style={{ color: "#D3D3D3", marginRight: "5px" }}>Eductaion</div>
          <div>No Intermation</div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ color: "#D3D3D3", marginRight: "5px" }}>
            Salary Expectation
          </div>
          <div>10000-20000</div>
        </div>
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <div style={{ color: "#D3D3D3", marginRight: "5px" }}>Reloaction</div>
          <div>Able to Relocate</div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "15px" }}>Exprience</div>
          <div style={{ marginRight: "15px", color: "#D3D3D3" }}>
            compimantries
          </div>
          <div style={{ marginRight: "15px", color: "#D3D3D3" }}>
            Active-log
          </div>
        </div>
        <hr />
        <div style={{lineHeight:"1.1"}}>
        <h4>Britsta (Why not? a Resturent)</h4>
        <p style={{fontSize:"15px"}}>
          The India Gate is located at the heart of India’s capital city, New
          Delhi. About 2.3 km from the Rashtrapati Bhavan, it is located on the
          eastern extremity of the ceremonial boulevard, Rajpath. India Gate is
          y of the ceremonial boulevard, Rajpath. India Gate isAbout 2.3 km from the Rashtrapati Bhavan,
        
          
        </p>
        <p style={{ color: "#87CEEB" }}>Why not cafe</p>
        <p>Undivided Indian</p>
        <h4>Britsta (Terra cafe & bar)</h4>
        <p>
          The India Gate is located at the heart of India’s capital city, New
          Delhi. About 2.3 km from the Rashtrapati Bhavan.
        </p>
        </div>
        <p style={{ color: "#87CEEB" }}>Terra cafe & bar</p>
        <p>Rashtrapati Bhavan</p>
      </div>
      <div className="right">
        <div style={{ display: "flex" }}>
          <button className="button">Invite</button>
        </div>
        <div>
          <img
            src={Rectangle}
            alt="Rectangle"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        <h4>Lukas hofman</h4>
        <p style={{ fontSize: "15px" }}>capital city</p>
        <div style={{ display: "flex" }}>
          <div style={{ background: "#D3D3D3", borderRadius: "10px",padding:"5px 40px 5px 40px",marginRight:"5px" }}>
            Chat
          </div>
          <div style={{ background: "#D3D3D3", borderRadius: "10px",padding:"5px 30px 5px 10px" }} >CV</div>
          
        </div>
        <p style={{ fontSize: "15px", color: "#D3D3D3" }}>Email Address</p>
        <p style={{ fontSize: "15px",  }}>Lumanssing@gmail.com</p>
        <p style={{ fontSize: "15px", color: "#D3D3D3" }}>Mobile Number</p>
        <p style={{ fontSize: "15px",  }}>2347575945</p>
        <p style={{ fontSize: "15px", color: "#D3D3D3" }}>Deadline cremony</p>
        <p style={{ fontSize: "15px",  }}>Social Activity</p>
      </div>
    </div>
  );
}

export default Page;
