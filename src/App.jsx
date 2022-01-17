import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RouterURL from "./routerURL/RouterURL";
import React from "react";
import Login from "./pages/Login";
import { Route, Switch } from "react-router";

function App() {
  return (
    <Router>
       <RouterURL></RouterURL>
     
    </Router>
  );
}

export default App;
