import styled from "@emotion/styled";

const Section = styled.section(({ background, hv = 100, position, size }) => ({
  height: `${hv}vh`,
  width: "100vw",
  backgroundColor: background,
}));
export default Section;
