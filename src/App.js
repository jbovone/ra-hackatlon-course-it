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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/homePage"
import PetList from "./components/PetList"
import AdoptionsPage from "./pages/adoptionsPage"
/*
  https://bulma.io/documentation/components/card/
  ojo que los tags img hr estan sin cerrar!
  https://material-ui.com/components/button-group/

  cmd en admin taskkill /F /IM node.exe 
  >> si se atasca un puerto error: listen EADDRINUSE: address already in use :::3001 
*/
const pets = [ { name: "Perro1"}, {name: "Perro1"}, {name: "Perro1"}, {name: "Perro1"}, {name: "Perro1"}, {name: "Perro1"}, {name: "Perro1"}]
function App() {
  return (
    <Fragment>
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/" exact>
            <HomePage/>
          </Route>
          <Route path="/adoptions" exact>
            <AdoptionsPage pets={pets}/>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
