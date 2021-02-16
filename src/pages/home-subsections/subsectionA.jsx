import React from "react";
import { css } from "@emotion/css";
import Section from "../../components/normalizers/Section";
import MainButton from "../../components/MainButton";
import H1 from "../../components/typography/h1";
import theGuardian from "../../assets/the-guardian.png";
import gato from "../../assets/back-mobile.jpg";

const style = css({
  display: "flex",
  position: "relative",
  justifyContent: "space-between",
  alignItems: "stretch",
  button: {
    padding: 25,
    alignSelf: "flex-start",
    transform: "translateY(50px) translateX(80px)",
  },
  h1: {
    textIndent: 20,
  },
  ".curtrain": {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    right: 0,
    background: "black",
    opacity: "0.4",
  },
});

const SubsectionA = ({ formShow, background }) => {
  return (
    <Section
      backColor={background}
      background={theGuardian}
      className={style}
      css={{
        "@media(max-width: 500px)": {
          backgroundImage: `url('${gato}')`,
          backgroundPosition: "top",
        },
      }}
    >
      <div className="curtrain" />
      <div className={style}>
        <H1 bold size={80}>
          Care for our pets
        </H1>
        <p>The place to care for our pets</p>
        <MainButton
          children="CREATE ACCOUNT"
          onClick={() =>
            formShow((state) => ({ ...state, show: true, route: "/signup" }))
          }
        />
      </div>
    </Section>
  );
};

export default SubsectionA;
