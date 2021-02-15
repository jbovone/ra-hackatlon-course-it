import React from "react";
import { Field, ErrorMessage } from "formik";
import { css } from "@emotion/css";

const label = css({
  fontSize: "20px",
  fontFamily: "Roboto",
  color: "white",
});

const Input = ({ name, tag }) => {
  return (
    <div className="field">
      <label htmlFor={name} className={label}>
        {tag}
      </label>
      <Field className="input" name={name} type={name} placeholder={name} />
      <ErrorMessage style={{ color: "red" }} name={name} component="span" />
    </div>
  );
};

export default Input;
