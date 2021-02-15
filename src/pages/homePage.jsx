import React from "react";
import { css } from "@emotion/css";

import Main from "../components/normalizers/Main";
import Section from "../components/normalizers/Section";
import H1 from "../components/typography/h1";
import MainButton from "../components/MainButton";
import { colors } from "../theme/colors";

import theGuardian from "../assets/the-guardian.png";
import heros from "../assets/back-02.svg";
import teamBack from "../assets/back-03.svg";
import herosPhotos from "../assets/heros-min.png";

const HomePage = ({ formShow }) => {
  const style = css({
    display: "flex",
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 10,
    p: {
      alignSelf: "center",
      marginLeft: "5%",
      color: "white",
    },
  });
  const section1 = css({
    display: "flex",
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
  });
  const setion2 = css({
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    flexWrap: "wrap",
  });

  const {
    landingBackgrounds: [back0, back1, back2],
  } = colors;

  return (
    <Main>
      <Section backColor={back0} background={theGuardian} className={section1}>
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
      <Section
        backColor={back1}
        background={heros}
        className={setion2}
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
      <Section backColor={back2} background={teamBack}>
        <div className={style}>
          <H1 size={50} bold>
            Meet the Team.
          </H1>
          <p>Beloved caretakers to give a second chance to those left behind</p>
        </div>
      </Section>
    </Main>
  );
};

export default HomePage;
