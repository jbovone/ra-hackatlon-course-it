import React, { useState, useEffect } from "react";
import Main from "./components/normalizers/Main";
import Footer from "./components/Footer";
import BulmaNav from "./components/bulma-components/nav";
import "../node_modules/bulma/bulma.sass";
import Button from "@material-ui/core/Button";
import Section from "./components/normalizers/Section";
import axios from "axios";
import H1 from "./components/typography/h1";
/*
  https://bulma.io/documentation/components/card/
  ojo que los tags img hr estan sin cerrar!
  https://material-ui.com/components/button-group/
*/

function App() {
  const [extra, setExtra] = useState("");
  useEffect(() => {
    axios.get("/encourage").then((res) => setExtra(res.data));
  }, []);
  return (
    <Main>
      <BulmaNav />
      <Section variant="primary">
        <H1>Vamos a hacer Esto!! {extra}</H1>
        <Button variant="contained" color="primary" disableElevation>
          BUY NOW
        </Button>
      </Section>
      <Footer>My Beloved Pets.com</Footer>
    </Main>
  );
}

export default App;
