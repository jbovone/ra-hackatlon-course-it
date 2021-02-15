import React, { Fragment, useState } from "react";
import Footer from "./components/Footer";
import Navigation from "./components/bulma-components/nav";
import "../node_modules/bulma/bulma.sass";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import AdoptionsPage from "./pages/adoptionsPage";
import Form from "./components/Form/Form";
/*
  https://bulma.io/documentation/components/card/
  ojo que los tags img hr estan sin cerrar!
  https://material-ui.com/components/button-group/

  cmd en admin taskkill /F /IM node.exe 
  >> si se atasca un puerto error: listen EADDRINUSE: address already in use :::3001 
*/
const pets = [
  { name: "Coty",
    description: "nesecito un duenño yaaa. Tengo dos años",
    img: 
 },
  { name: "Perro1" },
  { name: "Perro1" },
  { name: "Perro1" },
  { name: "Perro1" },
  { name: "Perro1" },
  { name: "Perro1" },
];
function App() {
  const [formState, setFormState] = useState({
    show: false,
    route: "",
  });

  return (
    <Fragment>
      <Navigation formShow={setFormState} />
      <Router>
        {formState.show && (
          <Form
            show={formState.show}
            route={formState.route}
            formShow={setFormState}
          />
        )}
        <Switch>
          <Route path="/" exact>
            <HomePage formShow={setFormState} />
          </Route>
          <Route path="/adoptions" exact>
            <AdoptionsPage pets={pets} />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
