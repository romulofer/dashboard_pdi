/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Button, Cell, Grid, TextField } from "bold-ui";

import React from "react";

const Login = () => {
  const styles = createStyles();

  return (
    <React.Fragment>
      <div css={styles.pageWrapper}>
        <Grid>
          <Cell size={12}>
            <h1>Página de login</h1>
          </Cell>
          <Cell size={12}>
            <TextField label="Login" required alt="login" />
          </Cell>
          <Cell size={12}>
            <TextField label="Senha" type="password" required alt="senha" />
          </Cell>
          <Cell size={12}>
            <Button>Entrar</Button>
          </Cell>
        </Grid>
      </div>
    </React.Fragment>
  );
};

const createStyles = () => ({
  pageWrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `,
});

export default Login;
