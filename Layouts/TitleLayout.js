import React from "react";
import theme from "../styles/theme";

import { Container } from "../styles/components";

export default ({ children }) => (
  <Container>
    <div style={{ paddingTop: `${theme.spacing.huge}` }}>{children}</div>
  </Container>
);
