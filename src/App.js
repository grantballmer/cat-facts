import React from "react";
import "./scss/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
