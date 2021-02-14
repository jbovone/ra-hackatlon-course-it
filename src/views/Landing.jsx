import React from "react";
import { css } from "@emotion/css";
import Main from "../components/normalizers/Main";
import Section from "../components/normalizers/Section";

import heros from "../assets/the-heros.svg";
import guardian from "../assets/the-guardian.svg";
import mainBackground from "../assets/main-background.svg";

const style = css({});

const Landing = () => {
  return (
    <Main background={mainBackground}>
      <Section></Section>
      <Section vh={56}></Section>
      <Section vh={100}></Section>
    </Main>
  );
};
//background="rgb(226, 75, 75, 0.2);"
export default Landing;
