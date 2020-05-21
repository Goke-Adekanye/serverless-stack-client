import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NotFound from "./containers/NotFound";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Note";
import Settings from "./containers/Settings";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnAuthenticatedRoute from "./components/UnAuthenticatedRoute";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <UnAuthenticatedRoute exact path="/login">
        <Login />
      </UnAuthenticatedRoute>

      <UnAuthenticatedRoute exact path="/signup">
        <Signup />
      </UnAuthenticatedRoute>

      <AuthenticatedRoute exact path="/settings">
        <Settings />
      </AuthenticatedRoute>

      <AuthenticatedRoute exact path="/notes/new">
        <NewNote />
      </AuthenticatedRoute>

      <AuthenticatedRoute exact path="/notes/:id">
        <Notes />
      </AuthenticatedRoute>

      {/* Finally, catch all unmatched routes */}
    <Route>
        <NotFound />
    </Route>
    </Switch>
  );
}