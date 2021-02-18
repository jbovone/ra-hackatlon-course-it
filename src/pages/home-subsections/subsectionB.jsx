import React from "react";
import { css } from "@emotion/css";
import Section from "../../components/normalizers/Section";
import H1 from "../../components/typography/h1";
import herosPhotos from "../../assets/heros-min.png";
import heros from "../../assets/back-02.svg";
import SideNav from "../../components/SideNav";

const style = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "stretch",
  flexWrap: "wrap",
  justifyItems: "center",
  alignContent: "space-evenly",
  "&>*": {
    padding: 20,
  },
  img: {
    maxHeight: 700,
  },
});

const SubsectionB = ({ background }) => {
  return (
    <Section
      id="purpose"
      backColor={background}
      background={heros}
      className={style}
      css={{
        justifyContent: "space-evenly",
      }}
    >
      <SideNav />
      <div className={style}>
        <H1 size={80} bold>
          We connect..
        </H1>
        <div>
          <p>Beloved caretakers to give a second chance to those left behind</p>
          <p>
            Everyone deserves a second chance. Our goal is to get everyone to
            get it.
          </p>
          <p>
            Here you will have the opportunity to Adopt a life partner, willing
            to give you all his love.
          </p>
          <p>Apadrinate one offering him a chance to get adopted.</p>
        </div>
      </div>
      <img src={herosPhotos} alt="" />
    </Section>
  );
};

export default SubsectionB;
