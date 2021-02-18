import React from "react";
import { css } from "@emotion/css";

const style = css({
  background: "linear-gradient(90deg, #CCFFFF, #FFCCCC)",
  padding: "23px 30px",
  borderRadius: "50px",
  border: "none",
  color: "grey",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "ease-in-out 0.3s",
  fontSize: 16,
  zIndex: 1000,
  outline: "none",
  ":hover": {
    transform: "scale(1.2)",
  },
});

const MainButton = ({ disabled, children, onClick }) => {
  return (
    <button disabled={disabled} onClick={onClick} className={style}>
      {children}
    </button>
  );
};

export default MainButton;
