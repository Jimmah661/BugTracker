import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logon from "./components/logon";
import Homepage from "./components/homepage"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/logon">
            <Logon />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

console.log("App.js API Key " + process.env.REACT_APP_API_KEY)

export default App;
