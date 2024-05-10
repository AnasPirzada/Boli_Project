import React from "react";

const ForgotPassword = () => {
  return (
    <>
      <div
        className="ms-2 d-block d-md-flex  justify-content-around "
        style={{ height: "100vh" }}
      >
        <div>
          <h1 className="mt-5 " style={{ color: "#00BF63" }}>
            BOLI
          </h1>
          <div className="d-flex flex-column justify-content-center h-75">
            <div>
              <h2 className="fw-bold">Forgot Password?</h2>
              <p style={{ color: "#667085" }}>
                Please enter your registered email address.
              </p>
            </div>
            <div className="mt-4">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded-2 p-2  w-100 shadow"
                placeholder="debra.holt@example.com"
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
          <img src="/Frame 4.png" className="w-100 h-auto" />
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
