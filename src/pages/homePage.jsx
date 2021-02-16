import React from "react";
import Main from "../components/normalizers/Main";
import { colors } from "../theme/colors";
import SubsectionC from "./home-subsections/subsectionC";
import SubsectionB from "./home-subsections/subsectionB";
import SubsectionA from "./home-subsections/subsectionA";

const HomePage = ({ formShow }) => {
  const {
    landingBackgrounds: [back0, back1, back2],
  } = colors;

  return (
    <Main>
      <SubsectionA background={back0} formShow={formShow} />
      <SubsectionB background={back1} />
      <SubsectionC background={back2} />
    </Main>
  );
};

export default HomePage;
