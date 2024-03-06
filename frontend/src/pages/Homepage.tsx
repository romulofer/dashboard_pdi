import { Text } from "bold-ui";
import { Link } from "react-router-dom";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <Text>Bem-vindos ao dashboard!</Text>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Homepage;
