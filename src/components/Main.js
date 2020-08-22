import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from './../pages/Home';
import CreateProject from './../pages/CreateProject';
import EditProject from './../pages/EditProject';

function Main() {
  return (
    <main className="border p-3 m-2 flex-grow">
      <Switch>
          <Route path="/crear-proyecto">
            <CreateProject />
          </Route>
          <Route path="/editar-proyecto/:id">
            <EditProject />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
    </main>
  )
}

export default Main