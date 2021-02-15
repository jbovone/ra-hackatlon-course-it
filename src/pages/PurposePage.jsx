import React from "react";
import { css } from "@emotion/css";

const infoContainer = css({
  background: "#767AF9",
  display: "flex",
  minHeight: "100vh",
  margin: "auto",
  flexDirection: "column",
  minWidth: "auto",
  padding: "10px",
  justifyContent: "flex-start",
});

const title = css({
  fontSize: "5em",
  marginLeft: "30px",
});

const subtitle = css({
  fontSize: "3em",
  marginLeft: "30px",
});

const info = css({
  fontSize: "1.5em",
  marginLeft: "30px",
  marginTop: "60px",
});

const Strong = css({
  color: "white",
});

export default function PurposePage() {
  return (
    <div className={infoContainer}>
      <div className={title}>
        <p>
          <strong className={Strong}>
            Everyone deserves <br /> a second chance...
          </strong>
        </p>
      </div>
      <div className={subtitle}>
        <p>
          <strong className={Strong}>
            ...and our goal is to get everyone to get it
          </strong>
        </p>
      </div>
      <div className={info}>
        <strong className={Strong}>
          Here you will have the opportunity to find a life partner, willing to
          give you all his love
        </strong>
      </div>
    </div>
  );
}
