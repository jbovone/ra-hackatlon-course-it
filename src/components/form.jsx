import React, { useState } from "react";
import { css } from "@emotion/css";
import axios from "axios";
import MainButton from "./MainButton";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
const form = css({
  position: "fixed",
  width: "50%",
  minWidth: "320px",
  backdropFilter: "blur(7px)",
  background: "rgba(252, 209, 209, 0.2)",
  padding: "50px",
  display: "flex",
  flexDirection: "column",
  borderRadius: "10px",
  marginTop: "30px",
  height: "400px",
  left: "25%",
  "&>:first-child": {
    position: "absolute",
    top: 0,
    right: 0,
    margin: 10,
  },
  ".curtrain": {
    height: "100%",
    width: "100%",
    padding: "50px",
    top: 0,
    right: 0,
    opacity: "0.2",
    background: "Black",
    position: "absolute",
    borderRadius: "10px",
  },
});

const label = css({
  fontSize: "20px",
  fontFamily: "Roboto",
  color: "white",
});

const formContainer = css({
  display: "flex",
  width: "80%",
  margin: "auto",
  maxWidth: "40em",
});

const ButtonContainer = css({
  marginTop: "3rem",
  textAlign: "center",
});

const formValidation = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = "The email field cannot be empty";
  }
  if (!values.password) {
    errors.password = "The password field cannot be empty";
  }

  if (values.password.length < 5) {
    errors.password = "Password must be at least 5 characters long";
  }
  return errors;
};

const Form = ({ route = "signup", formShow }) => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (value) => {
    console.log(value);
    console.log(route, "route");
    return axios
      .post(route, value, {
        useCredentials: true,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <form className={formContainer}>
      <button
        className="delete"
        onClick={() => formShow((state) => ({ ...state, show: !state.show }))}
      ></button>
      <div className="curtrain" />
      <input
        type="password"
        name="password"
        onChange={(e) =>
          setValue((value) => ({ ...value, [e.target.name]: e.target.value }))
        }
      />
      <input
        type="email"
        name="email"
        onChange={(e) =>
          setValue((value) => ({ ...value, [e.target.name]: e.target.value }))
        }
      />
      <MainButton onClick={handleSubmit} value={value}>
        {route === "signup" ? "Create account" : "Log in"}
      </MainButton>
    </form>
  );
};

export default Form;

/* 
import React, { useState } from "react";
import { css } from "@emotion/css";
import axios from "axios";
import MainButton from "./MainButton";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
const form = css({
  position: "fixed",
  width: "50%",
  minWidth: "320px",
  backdropFilter: "blur(7px)",
  background: "rgba(252, 209, 209, 0.2)",
  padding: "50px",
  display: "flex",
  flexDirection: "column",
  borderRadius: "10px",
  marginTop: "30px",
  height: "400px",
  left: "25%",
  "&>:first-child": {
    position: "absolute",
    top: 0,
    right: 0,
    margin: 10,
  },
  ".curtrain": {
    height: "100%",
    width: "100%",
    padding: "50px",
    top: 0,
    right: 0,
    opacity: "0.2",
    background: "Black",
    position: "absolute",
    borderRadius: "10px",
  },
});

const label = css({
  fontSize: "20px",
  fontFamily: "Roboto",
  color: "white",
});

const formContainer = css({
  display: "flex",
  width: "80%",
  margin: "auto",
  maxWidth: "40em",
});

const ButtonContainer = css({
  marginTop: "3rem",
  textAlign: "center",
});

const formValidation = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = "The email field cannot be empty";
  }
  if (!values.password) {
    errors.password = "The password field cannot be empty";
  }

  if (values.password.length < 5) {
    errors.password = "Password must be at least 5 characters long";
  }
  return errors;
};

const Form = ({ route = "signup", formShow }) => {
  const handleSubmit = (userValues) => {
    axios
      .post(route, userValues, {
        useCredentials: true,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className={formContainer}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={formValidation}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, handleSubmit }) => (
          <>
            <FormikForm
              action={route}
              className={form}
              onSubmit={() => handleSubmit()}
            >
      
              <div className="curtrain" />
              <div className="field">
                <label htmlFor="email" className={label}>
                  E-Mail
                </label>
                <Field
                  className="input"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                <ErrorMessage
                  style={{ color: "red" }}
                  name="email"
                  component="span"
                />
              </div>
              <div className="field">
                <label htmlFor="password" className={label}>
                  Password
                </label>
                <Field
                  className="input"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  style={{ color: "red" }}
                  name="password"
                  component="span"
                />
              </div>
              <div className="field">
                <p className={ButtonContainer}></p>
              </div>
               
            </FormikForm>
          </>
        )}
      </Formik>
    </div>
  );
};

*/
