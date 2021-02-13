import styled from "@emotion/styled";
import { colors } from "../../theme/colors";

const Main = styled.section(({ variant }) => ({
  height: "20vh",
  background: colors[variant],
}));

export default Main;
