import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/MainApp/Main";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/main-app">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
