import React from "react";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <h1>Boas-vindas ao Dashboard!</h1>
      <Link to="login">Login</Link>
      <Route path="/login" Component={Login} />
    </Router>
  );
}

export default App;
