import React, { Fragment, useEffect, useState } from "react";
import Navigation from "./components/bulma-components/nav";
import "../node_modules/bulma/bulma.sass";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import AdoptionsPage from "./pages/adoptionsPage";
import Form from "./components/Form/Form";
import PurposePage from "./pages/PurposePage";
import UserPetList from "./pages/userPetList";
import { pets } from "./mockdata";

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
