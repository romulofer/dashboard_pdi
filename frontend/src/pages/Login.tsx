import { css } from "@emotion/core";

import { VFlow, TextInput, Button } from "bold-ui";
import React from "react";

const Login = () => {
  return (
    <React.Fragment>
      <div
        css={css`
          display: flex;
        `}
      >
        <VFlow vSpacing={0.5}>
          <TextInput placeholder="Username" />
          <TextInput placeholder="Password" type="password" />
          <Button kind="primary">Login</Button>
        </VFlow>
      </div>
    </React.Fragment>
  );
};

export default Login;
