import React from "react";
import { css } from "@emotion/css";
import { sizes } from "../../theme/sizing";

const H1 = ({ size = sizes.fonts.h1, children }) => {
  const style = css({
    fontSize: size,
  });
  return <h1 className={style}>{children}</h1>;
};

export default H1;
