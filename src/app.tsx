import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
    </Router>
  )
}

export default App;
