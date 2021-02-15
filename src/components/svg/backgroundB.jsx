import { css } from "@emotion/css";
import React from "react";

const style = css({
  position: "absolute",
  right: -190,
});
const BackgroundB = () => {
  return (
    <svg
      width={1126}
      height="100%"
      className={style}
      viewBox="0 0 1334 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1333.5 0H761.094C790.083 424.802 107.959 552.746 0 1080H1333.5L1333.5 0Z"
        fill="#B28AC6"
        fill-opacity="0.49"
      />
    </svg>
  );
};

export default BackgroundB;
