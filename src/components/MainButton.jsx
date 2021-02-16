import React from "react";
import { css } from "@emotion/css";

const style = css({
  background: "linear-gradient(90deg, #CCFFFF, #FFCCCC)",
  padding: "12px 50px",
  borderRadius: "50px",
  border: "none",
  fontFamily: "Roboto",
  color: "grey",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "ease-in-out 0.3s",
  fontSize: 16,
  zIndex: 1000,
  outline: "none",
});

const MainButton = ({ disabled, children, onClick }) => {
  return (
    <button disabled={disabled} onClick={onClick} className={style}>
      {children}
    </button>
  );
};

export default MainButton;
