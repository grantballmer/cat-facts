import React, { useEffect } from "react";
import "./scss/main.scss";
import { HashRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

function App() {
  useEffect(() => {
    const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

    if (isIE11) {
      document.body.classList.add("ie11");
    }
  }, []);

  return (
    <HashRouter basename="/">
      <Navbar />
      <Switch>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
