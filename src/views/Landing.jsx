import React from "react";
import { css } from "@emotion/css";
import Main from "../components/normalizers/Main";
import Section from "../components/normalizers/Section";
import theGuardian from "../assets/de-guardian.png";
import heros from "../assets/the-heros.svg";
import team from "../assets/back-03.svg";
import H1 from "../components/typography/h1";
import { colors } from "../theme/colors";
//import mainBackground from "../assets/allLanding";

const style = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
  p: {
    alignSelf: "flex-end",
    marginLeft: "15%",
    color: "white",
  },
});

const Landing = () => {
  const {
    landingBackgrounds: [back0, back1, back2],
  } = colors;
  return (
    <Main>
      <Section backColor={back0}>
        <div className={style}>
          <H1 bold size={50}>
            My Beloved Pets
            <div>pets</div>
          </H1>
          <p>
            The place to care for our
            <div>pets</div>
          </p>
        </div>
        <img src={theGuardian} alt="" />
      </Section>
      <Section backColor={back1}>
        <div className={style}>
          <H1 size={80} bold>
            We connect..
          </H1>
          <p>Beloved caretakers to give a second chance to those left behind</p>
        </div>
        <img src={heros} alt="" />
      </Section>
      <Section backColor={back2} css={{ minHeight: "20vh" }}>
        <div className={style}>
          <H1 size={50} bold>
            Meet the Team.
          </H1>
          <p>Beloved caretakers to give a second chance to those left behind</p>
        </div>
        <img src={team} alt="" />
      </Section>
    </Main>
  );
};
//background="rgb(226, 75, 75, 0.2);"
export default Landing;

/* 
import React from "react";
import { css } from "@emotion/css";
import Main from "../components/normalizers/Main";
import Section from "../components/normalizers/Section";
import theGuardian from "../assets/de-guardian.png";
import heros from "../assets/the-heros.svg";
import guardian from "../assets/the-guardian.svg";
import mainBackground from "../assets/main-background.svg";
import H1 from "../components/typography/h1";
import mainBackground from "../assets/allLanding";

const style = css({});

const Landing = () => {
  const sec1 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#767AF9",
    ".subsection-a": {
      minWidth: "644px",
      padding: 30,
      margin: 60,
    },
    img: {
      height: "100%",
    },
  };
  return (
    <Main>
      <Section css={sec1}>
        <div className="subsection-a">
          <H1 bold>Care for your</H1>
          <H1 bold>pets</H1>
        </div>
        <img src={theGuardian} alt="" />
      </Section>
      <Section css={sec1}>
        <div className="subsection-a">
          <H1 bold>We Care</H1>
          <H1 bold>pets</H1>
        </div>
        <img src={theGuardian} alt="" />
      </Section>
      <Section></Section>
    </Main>
  );
};

*/
