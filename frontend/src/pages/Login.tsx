import { css } from "@emotion/core";

import { Button, Cell, Grid, TextInput } from "bold-ui";
import React, { ChangeEvent, useState } from "react";

const Login = () => {
  const [user, setUser] = useState<string>();
  const [password, setPassword] = useState<string>();

  const onUserChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleButtonClick = () => {
    console.log(`user: ${user}`);
    console.log(`password: ${password}`);
  };
  return (
    <Grid
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={css`
        height: 100vh;
      `}
    >
      <Cell>
        <TextInput placeholder="Username" onChange={onUserChange} />
      </Cell>
      <Cell>
        <TextInput
          placeholder="Password"
          type="password"
          onChange={onPasswordChange}
        />
      </Cell>
      <Cell>
        <Button kind="primary" onClick={handleButtonClick}>
          Login
        </Button>
      </Cell>
    </Grid>
  );
};

export default Login;
