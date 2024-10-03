import axios from "axios";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { baseUrl } from "../../Components/constants";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlelogin = async () => {
    try {
      const response = await axios.post(`${baseUrl}api/restaurant/login`, {
        email,
        password,
      });

      const token = response.data.token;
      localStorage.setItem("token", token);

      
    } catch (error) {}
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <Row>
        <Col lg={6} md={6} xl={6} xs={12}>
          <div className="p-0 mx-0 p-md-5 mx-md-5">
            <p
              style={{ color: "#00BF63", fontSize: "32px", fontWeight: "400" }}
            >
              BOLI
            </p>
            <div className="mt-5 pt-4">
              <p
                style={{
                  color: "#344054",
                  fontSize: "22px",
                  fontWeight: "700",
                }}
              >
                Log In
              </p>
              <p
                style={{
                  color: "#667085",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                Please fill your detail to access your account.
              </p>

              <div className="mt-5 d-flex flex-column justify-content-start align-items-start">
                <label
                  style={{
                    color: "#344054",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Email
                </label>
                <input
                  type="text"
                  className="rounded-3 py-1 px-3 mt-2 w-75"
                  style={{
                    color: "#667085",
                    border: "1px solid #D0D5DD",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                  placeholder="debra.holt@example.com"
                  value={email}
                  onClick={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mt-3 d-flex flex-column justify-content-start align-items-start">
                <label
                  style={{
                    color: "#344054",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Password
                </label>
                <div
                  className="rounded-3 py-1 px-3 mt-2 w-75 d-flex justify-content-between align-items-center "
                  style={{
                    color: "#667085",
                    border: "1px solid #D0D5DD",
                  }}
                >
                  <input
                    className="w-100 border-0"
                    style={{
                      color: "#667085",
                      fontSize: "16px",
                      fontWeight: "400",
                    }}
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onClick={(e) => setPassword(e.target.value)}
                  />
                  <img
                    src="/passshow.svg"
                    alt=""
                    onClick={togglePasswordVisibility}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center w-75">
                <div className="d-flex align-items-center justify-content-center ">
                  <input type="checkbox" />
                  <p
                    className="my-0 ms-3"
                    style={{
                      color: "#344054",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    Remember me
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      color: "#00BF63",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    Forgot Password?
                  </p>
                </div>
              </div>

              <Row className="my-4">
                <Col>
                  <button
                    className="border-0 "
                    style={{
                      color: "#FFFFFF",
                      fontSize: "16px",
                      fontWeight: "500",
                      backgroundColor: "#00BF63",
                      padding: "12px 154px 12px 154px",
                      borderRadius: "8px",
                    }}
                  >
                    Sign in
                  </button>
                  <div className="ms-5 my-2">
                    <p
                      style={{
                        color: "#000000",
                        fontSize: "15px",
                        fontWeight: "400",
                      }}
                    >
                      {" "}
                      Don’t have an account?
                      <span
                        style={{
                          color: "#00BF63",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        Sign up
                      </span>
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} xl={6} xs={12}>
          <div
            className="p-5 m-2"
            style={{
              boxShadow: " -4px 0px 18.600000381469727px 0px #00000012",
              borderRadius: "40px",
              backgroundColor: "#FFFFFF0F",
            }}
          >
            <img src="/LoginPageside.png" alt="" className="p-5 w-100" />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Login;
