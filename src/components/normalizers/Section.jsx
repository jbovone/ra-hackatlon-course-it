import styled from "@emotion/styled";

const Section = styled.section(({ backColor, background, css, jcUnset }) => ({
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
  "&>div": {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    p: {
      alignSelf: "center",
      marginLeft: "5%",
      color: "white",
      fontSize: 16,
    },
  },
  ...css,
}));
export default Section;
