import React from "react";
import { css } from "@emotion/css";
import Section from "../../components/normalizers/Section";
import H1 from "../../components/typography/h1";
import herosPhotos from "../../assets/heros-min.png";
import heros from "../../assets/back-02.svg";

const style = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "stretch",
  flexWrap: "wrap",
  justifyItems: "center",
  alignContent: "space-evenly",
});

const SubsectionB = ({ background }) => {
  return (
    <Section
      backColor={background}
      background={heros}
      className={style}
      css={{
        justifyContent: "space-evenly",
      }}
    >
      <div className={style}>
        <H1 size={80} bold>
          We connect..
        </H1>
        <p>Beloved caretakers to give a second chance to those left behind</p>
      </div>
      <img src={herosPhotos} alt="" />
    </Section>
  );
};

export default SubsectionB;
