import React, { useState, useEffect } from "react";
import { css } from "@emotion/css";
import axios from "axios";
import { Formik, Form as FormikForm } from "formik";
import MainButton from "../MainButton";
import { SignupSchema } from "../../validation";
import Input from "./Field";
import { Redirect } from "react-router-dom";

const form = css({
  position: "fixed",
  width: "80%",
  minWidth: "315px",
  maxWidth: "440px",
  height: "400px",
  backdropFilter: "blur(14px)",
  background: "rgba(252, 209, 209, 0.2)",
  padding: "40px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  borderRadius: "10px",
  marginTop: "30px",
  left: "50%",
  zIndex: 10000,
  transform: "translate(-50%)",
  ":before": {
    content: "''",
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
  ".delete": {
    position: "absolute",
    top: 12,
    right: 12,
  },
  "&>button": {
    alignSelf: "flex-end",
  },
  div: {
    width: "80%",
  },
  "@media(max-width: 1240px)": {
    div: {
      width: "99%",
    },
  },
});

const Form = ({ route = "signup", formShow }) => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (redirect === false) return;
    formShow((state) => ({ ...state, show: false, endpoint: "" }));
    setRedirect(() => false);
  }, [redirect, formShow]);

  const handleSubmit = (userValues) => {
    delete userValues.endpoint;
    axios
      .post(route, userValues, {
        useCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setRedirect(() => true);
      }) //trae un nombre hacemos un toaster bienvenido nombre??
      .catch((err) => console.log(err));
  };

  return (
    <Formik
      initialValues={{ email: "", password: "", endpoint: route }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, handleSubmit }) => (
        <FormikForm className={form}>
          <button
            type="button"
            className="delete"
            onClick={() => formShow((state) => ({ ...state, show: false }))}
          />
          <Input name="email" tag="E-Mail" />
          <Input name="password" tag="Password" />
          <MainButton disabled={isSubmitting} onClick={(e) => handleSubmit(e)}>
            {route}
          </MainButton>
          {redirect && <Redirect to="/adoptions" />}
        </FormikForm>
      )}
    </Formik>
  );
};
//
export default Form;
