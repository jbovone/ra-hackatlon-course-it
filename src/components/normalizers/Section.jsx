import styled from "@emotion/styled";

const Section = styled.section(({ backColor, background, css }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "stretch",
  minHeight: "100vh",
  position: "relative",
  backgroundImage: `url('${background}')`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right top",
  backgroundSize: "contain",
  backgroundColor: backColor,
  "@media(max-width: 1240px)": {
    backgroundSize: "cover",
  },
  ...css,
}));
export default Section;
