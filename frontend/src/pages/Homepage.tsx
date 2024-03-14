import { Text, VFlow } from "bold-ui";
import { Link } from "react-router-dom";
import React from "react";

const Homepage = () => {
  return (
    <VFlow>
      <Text>Bem-vindos ao dashboard!</Text>
      <Link to="/login">Login</Link>
    </VFlow>
  );
};

export default Homepage;
