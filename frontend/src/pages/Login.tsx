import { css } from "@emotion/core";

import { Button, Cell, Grid, TextInput } from "bold-ui";
import React from "react";

const Login = () => {
  return (
    <React.Fragment>
      <div>
        <Grid direction="column">
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
      </div>
    </React.Fragment>
  );
};

export default Login;
