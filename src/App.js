import React, { Fragment, useEffect, useState } from "react";
import Footer from "./components/Footer";

import Navigation from "./components/bulma-components/nav";
import "../node_modules/bulma/bulma.sass";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import AdoptionsPage from "./pages/adoptionsPage";
import Form from "./components/Form/Form";
import Aside from "./components/bulma-components/aside";
import PurposePage from "./pages/PurposePage";
import Cms from "./pages/cms";
import UserPetList from "./pages/userPetList";
/*
  https://bulma.io/documentation/components/card/
  ojo que los tags img hr estan sin cerrar!
  https://material-ui.com/components/button-group/

  cmd en admin taskkill /F /IM node.exe 
  >> si se atasca un puerto error: listen EADDRINUSE: address already in use :::3001 
*/

const pets = [
  {
    name: "Coty",
    description: "necesito un duenño yaaa. Tengo dos años",
    type: "gato",
    images: "",
    age: "3",
    status: "active",
  },
  {
    name: "Simmy",
    description: "necesito un duenño yaaa. Tengo dos años",
    type: "gato",
    images: "",
    age: "3",
    status: "active",
  },

  {
    name: "Bandit",
    description: "necesito un duenño yaaa. Tengo dos años",
    type: "gato",
    images: "",
    age: "3",
    status: "active",
  },

  {
    name: "Coty",
    description: "necesito un duenño yaaa. Tengo dos años",
    type: "gato",
    images: "",
    age: "3",
    status: "active",
  },
  {
    name: "Yo",
    description: "necesito un duenño yaaa. Tengo dos años",
    type: "gato",
    images: "",
    age: "3",
    status: "active",
  },
  {
    name: "Coty",
    description: "necesito un duenño yaaa. Tengo dos años",
    type: "gato",
    images: "",
    age: "3",
    status: "active",
  },
  {
    name: "Coty",
    description: "necesito un duenño yaaa. Tengo dos años",
    type: "gato",
    images: "",
    age: "3",
    status: "active",
  },
  {
    name: "Coty",
    description: "necesito un duenño yaaa. Tengo dos años",
    type: "gato",
    images: "",
    age: "3",
    status: "active",
  },
];

function App() {
  const [formState, setFormState] = useState({
    show: false,
    route: "",
  });
  useEffect(() => {
    const UUID = localStorage.getItem("MyBelovedPetsUUID");
  }, []);
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
          </Route>{" "}
          <Route path="/user-pet-list" exact>
            <UserPetList pets={pets} />
          </Route>
          <Route path="/adoptions" exact>
            <AdoptionsPage pets={pets} />
          </Route>
          <Route path="/purpose" exact>
            <PurposePage />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
