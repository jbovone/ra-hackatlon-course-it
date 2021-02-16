import React from "react";
import { css } from "@emotion/css";
import Section from "../../components/normalizers/Section";
import H1 from "../../components/typography/h1";
import teamBack from "../../assets/back-03.svg";

const style = css({
  h1: {
    margin: 10,
  },
});

const SubsectionC = ({ background }) => {
  return (
    <Section backColor={background} background={teamBack}>
      <div className={style}>
        <H1 size={50} bold>
          Meet the Team.
        </H1>
        <p>Beloved caretakers to give a second chance to those left behind</p>
      </div>
    </Section>
  );
};

export default SubsectionC;
