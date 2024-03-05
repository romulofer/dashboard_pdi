import React from "react";
import { Text } from "bold-ui";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login";

const Homepage = () => {
  return (
    <div>
      <Text>Bem-vindos ao dashboard!</Text>
      <Router>
        <Link to="/login">Login</Link>
        <Route path="/login" Component={Login}></Route>
      </Router>
    </div>
  );
};

export default Homepage;
