import React from "react";
import { css } from "@emotion/css";

const style = css({
  background: "linear-gradient(90deg, #CCFFFF, #FFCCCC)",
  padding: "12px 50px",
  borderRadius: "50px",
  border: "none",
  fontFamily: "Roboto",
  color: "grey",
  margin: "auto",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "ease-in-out 0.3s",
  fontSize: 16,
  zIndex: 1000,
  ":hover": {
    padding: "13px 55px",
  },
});

const MainButton = ({ disabled, children, onClick, value }) => {
  return (
    <button type="button" className={style} onClick={(e) => onClick(value)}>
      {children}
    </button>
  );
};

export default MainButton;
