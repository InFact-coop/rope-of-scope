import React from "react";
import theme from "../styles/theme";

import { Container } from "../styles/components";

export default ({ children }) => (
  <Container
    style={{
      display: "flex",
    }}
  >
    <div
      style={{
        width: "50vw",
        height: "100vh",
        backgroundImage: theme.gradients.blue,
        border: "10px solid white",
      }}
    />
    <div
      style={{
        width: "50vw",
        height: "100vh",
      }}
    >
      {children}
    </div>
  </Container>
);
