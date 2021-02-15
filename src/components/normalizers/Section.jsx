import styled from "@emotion/styled";

const Section = styled.section(({ backColor, css }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "stretch",
  "&>*": {
    width: "50%",
  },
  backgroundColor: backColor,
  ...css,
}));
export default Section;
