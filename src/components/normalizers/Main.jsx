import styled from "@emotion/styled";

const Main = styled.main(({ background, hv = 100 }) => ({
  width: "100vw",
  background: `url("${background}") no-repeat`,
  backgroundSize: "100%",
  backgroundPosition: "cover",
}));

export default Main;
