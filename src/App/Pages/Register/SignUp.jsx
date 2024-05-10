import { React, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Alert } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { baseurl } from "../../../const";

const SignUp = () => {

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.email = "Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    if (!values.password !== !values.confirmPassword) {
      errors.confirmPassword = "Password does not match";
    }

    return errors;
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        `${baseurl}/api/restaurant/register`,
        values
      );
      console.log(response.data); // Handle the response from the server
      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
      }); // Display a success message
      const routeWithParams = `/Otp?email=${encodeURIComponent(values.email)}`;
      navigate(routeWithParams);
    } catch (error) {
      console.error("Error:", error); // Log any errors
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
      });  // Display an error message
    }
    setSubmitting(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div
        className="ms-2 d-block d-md-flex  justify-content-around "
        style={{ height: "100vh" }}
      >
        <div className="">
          <h1
            className="mt-5 d-flex   align-items-center"
            style={{ color: "#00BF63" }}
          >
            BOLI
          </h1>
          <div className="d-flex flex-column justify-content-center h-75 mobv-login">
            <Formik
              initialValues={initialValues}
              validate={validate}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div>
                    <h2 className="fw-bold">Sign Up</h2>
                    <p style={{ color: "#667085" }}>
                      Please fill your detail to create your account.
                    </p>
                  </div>
                  <div className="mt-3">
                    <label htmlFor="name" className="mb-1">
                      Name
                    </label>
                    <br />
                    <Field
                      type="name"
                      id="name"
                      name="name"
                      className="border rounded-2 p-2  w-100"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error "
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor="email" className="mb-1">
                      Email
                    </label>
                    <br />
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="border rounded-2 p-2  w-100"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error "
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor="password" className="mb-1">
                      Password
                    </label>
                    <br />
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Field
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        className="border rounded-2 p-2 w-100 position-relative"
                      />
                      <img
                        src="/passshow.svg"
                        onClick={togglePasswordVisibility}
                        style={{
                          cursor: "pointer",
                          marginLeft: "280px",
                          position: "absolute",
                        }}
                        className="mobv-img"
                      />
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor="confirmPassword" className="mb-1">
                      Confirm Password
                    </label>
                    <br />
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Field
                        type={showPassword ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        className="border rounded-2 p-2 w-100 position-relative"
                      />
                      <img
                        src="/passshow.svg"
                        onClick={togglePasswordVisibility}
                        style={{
                          cursor: "pointer",
                          marginLeft: "280px",
                          position: "absolute",
                        }}
                        className="mobv-img"
                      />
                    </div>
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className="mt-2 d-flex justify-content-between"></div>
                  <div className="mt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="border rounded-2 p-2 w-100"
                      style={{ background: "#00BF63", color: "white" }}
                    >
                      {isSubmitting ? "Submitting..." : "Sign Up"}
                    </button>
                  </div>
                  <div className="text-center mt-2">
                    <p>
                      Don’t have an account?{" "}
                      <Link to='/'
                        style={{
                          color: "  #00BF63  ",
                        }}
                      >
                        Log In
                      </Link>
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>

        <div className="object-contain  d-md-flex d-none  ">
          <img src="/Frame 1.png" alt="" srcset="" className="w-100 h-auto" />
        </div>
      </div>


      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
};

export default SignUp;
