import styled from "@emotion/styled";
import { sizes } from "../../theme/sizing";

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
      color: "beige",
      fontSize: sizes.fonts.p,
    },
  },
  ...css,
}));
export default Section;
