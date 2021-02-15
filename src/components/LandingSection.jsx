import React from "react";
import { css } from "@emotion/css";
import Section from "./normalizers/Section";
import H1 from "./typography/h1";

const style = css({
  display: "flex",
  minHeight: "100vh",
  justifyContent: "space-between",
  alignItems: "stretch",
  backgroundColor: "#767AF9",
  ".subsection-a": {
    minWidth: "644px",
    padding: 30,
    margin: 60,
  },
  img: {
    width: "100%",
  },
});

const LandingSection = ({ src }) => {
  return (
    <Section className={style}>
      <div className="subsection-a">
        <H1 bold>Care for your</H1>
        <H1 bold>Pets</H1>
      </div>
      <img src={src} alt="" />
    </Section>
  );
};

export default LandingSection;
