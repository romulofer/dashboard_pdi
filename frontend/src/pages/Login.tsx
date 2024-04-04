import { css } from "@emotion/core";

import { Button, Cell, Grid, TextInput } from "bold-ui";
import React from "react";

const Login = () => {
  return (
    <Grid
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={css`
        height: 100%;
      `}
    >
      <Cell>
        <TextInput placeholder="Username" />
      </Cell>
      <Cell>
        <TextInput placeholder="Password" type="password" />
      </Cell>
      <Cell>
        <Button kind="primary">Login</Button>
      </Cell>
    </Grid>
  );
};

export default Login;
