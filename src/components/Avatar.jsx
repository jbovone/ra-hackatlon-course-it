import React from "react";
import { css } from "@emotion/css";
import avatar from "../assets/avatar.svg";

const style = css({
  margin: 20,
  fontSize: 10,
  background: "orange",
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  width: "320px",
  height: "340px",
  padding: 20,

  div: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "240px",
    height: "240px",
    background: `url(${avatar}) no-repeat center`,
    borderRadius: "50%",
    img: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      margin: "auto",
    },
  },
  backgroundSize: "contain",

  ".cap": {
    fontSize: 22,
    color: "white",
  },
  ".c-name": {
    fontWeight: "bold",
  },
});

const Avatar = ({ src, name, title }) => {
  return (
    <figure className={style}>
      <div>
        <img src={src} alt="developer" />
      </div>
      <figcaption className="cap c-name">{name}</figcaption>
      <figcaption className="cap c-title">{title}</figcaption>
    </figure>
  );
};

export default Avatar;
/*
<img src={src} alt="developer" />
*/
