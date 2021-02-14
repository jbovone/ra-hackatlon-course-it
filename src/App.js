import React, { Fragment } from "react";
import Main from "./components/normalizers/Main";
import Footer from "./components/Footer";
import Navigation from "./components/bulma-components/nav";
import "../node_modules/bulma/bulma.sass";
import Button from "@material-ui/core/Button";
import Section from "./components/normalizers/Section";
import H1 from "./components/typography/h1";
import Form from "./components/form";
import Landing from "./views/Landing";

/*
  https://bulma.io/documentation/components/card/
  ojo que los tags img hr estan sin cerrar!
  https://material-ui.com/components/button-group/

  cmd en admin taskkill /F /IM node.exe 
  >> si se atasca un puerto error: listen EADDRINUSE: address already in use :::3001 
*/

function App() {
  return (
    <Fragment>
      <Navigation />
      <Landing />
    </Fragment>
  );
}

export default App;
