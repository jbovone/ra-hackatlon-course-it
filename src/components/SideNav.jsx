import React from "react";
import { css } from "@emotion/css";
import { keyframes } from "@emotion/react";

const bounce = keyframes`
  50% {
    transform: scale(1.5)
  }
`;

const style = css({
  height: 70,
  width: 20,
  position: "absolute",
  right: 60,
  top: 0,
  margin: 5,
  display: "block",
  zIndex: 1000,
  "a div": {
    position: "relative",
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
    borderRadius: "50%",
    height: 20,
    width: 20,
    background: "white",
    margin: 20,
    zIndex: 0,
    ":hover": {
      "::after": {
        animation: `${bounce} 1s infinite`,
      },
    },
    "::after": {
      content: "''",
      position: "absolute",
      top: -2,
      right: -2,
      bottom: -2,
      left: -2,
      borderRadius: "50%",
      opacity: 0.4,
      background: "white",
      zIndex: 1,
    },
  },
  "@media(max-width: 500px)": {
    height: 15,
    width: 15,
    right: 35,
    "a div": {
      height: 12,
      width: 12,
    },
  },
});

const SideNav = () => {
  return (
    <nav className={style}>
      <a href="/#home">
        <div />
      </a>
      <a href="/#purpose">
        <div />
      </a>
      <a href="/#team">
        <div />
      </a>
    </nav>
  );
};

export default SideNav;
