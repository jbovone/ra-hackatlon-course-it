import React, { useState, useEffect } from "react";
import Main from "./components/normalizers/Main";
import Footer from "./components/Footer";
import BulmaNav from "./components/bulma-components/nav";
import "../node_modules/bulma/bulma.sass";
import Button from "@material-ui/core/Button";
import Section from "./components/normalizers/Section";
import axios from "axios";
import H1 from "./components/typography/h1";
import Form from "./components/form";
/*
  https://bulma.io/documentation/components/card/
  ojo que los tags img hr estan sin cerrar!
  https://material-ui.com/components/button-group/

  cmd en admin taskkill /F /IM node.exe 
  >> si se atasca un puerto error: listen EADDRINUSE: address already in use :::3001 
*/

function App() {
  const [extra, setExtra] = useState("");

  useEffect(() => {
    axios
      .post("/vamos!!")
      .then((res) => setExtra(() => "vamo!"))
      .catch((res) => console.log(res));
  }, []);
  return (
    <Main>
      <BulmaNav />
      <Section variant="primary">
        <H1>Vamos a hacer Esto!! {extra}</H1>
        <Form />
        <Button variant="contained" color="primary" disableElevation>
          BUY NOW
        </Button>
      </Section>
      <Footer>My Beloved Pets.com</Footer>
    </Main>
  );
}

export default App;
