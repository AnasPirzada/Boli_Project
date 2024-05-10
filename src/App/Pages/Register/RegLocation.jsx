import React from "react";

const RegLocation = () => {
  return (
    <div
      className="ms-2 d-block d-md-flex  justify-content-around "
      style={{ height: "100vh" }}
    >
      <div  className="  h-100"> 
        <div >

        <h1 className="mt-5 " style={{ color: "#00BF63" ,marginTop:'100px'}}>
          BOLI
        </h1>
        </div>
        <div className="d-flex flex-column justify-content-center h-75">
          <div>
            <h2 className="fw-bold">Location of your Restaurant</h2>
            <p style={{ color: "#667085" }}>
              Please enter the location of your restaurant.
            </p>
          </div>
          <div className="mt-4">
            <input
              type="text"
              id="name"
              name="name"
              className="border rounded-2 p-2  w-100 shadow"
              placeholder="9 W 53rd St, New York, NY 10019, USA."
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="border rounded-2 p-2 w-100"
              style={{ background: "#00BF63", color: "white" }}
            >
              Done
            </button>
          </div>
        </div>
      </div>

      <div className="object-contain  d-md-flex d-none  ">
        <img src="/Frame 3.png" className="w-100 h-auto" />
      </div>
    </div>
  );
};

export default RegLocation;
