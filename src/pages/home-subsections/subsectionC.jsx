import React from "react";
import Section from "../../components/normalizers/Section";
import H1 from "../../components/typography/h1";
import teamBack from "../../assets/back-03.svg";
import Avatar from "../../components/Avatar";
import juan from "../../assets/juan.png";
import juli from "../../assets/juli.jpg";
import gero from "../../assets/gero.png";
import SideNav from "../../components/SideNav";

const SubsectionC = ({ background }) => {
  return (
    <Section
      backColor={background}
      background={teamBack}
      css={{
        h1: {
          padding: 30,
        },
        ".heros": {
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-evenly",
          minHeight: "80vh",
        },
      }}
      id="team"
    >
      <H1 size={50} bold>
        Meet the Team.
      </H1>
      <div className="heros">
        <Avatar src={juan} name="Juan" title="React Node developer" />
        <Avatar src={juli} name="Julián Bovone" title="React Node developer" />
        <Avatar src={gero} name="Geronimo Morisot" title="Real Estate Agent" />
      </div>
      <SideNav />
    </Section>
  );
};

export default SubsectionC;
