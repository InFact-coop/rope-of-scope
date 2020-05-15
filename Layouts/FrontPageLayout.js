import React from "react";
import { Text, Title } from "../styles/components";

import infactLogo from "../assets/images/infact_logo_gradient.svg";

import theme from "../styles/theme";

import { Container } from "../styles/components";

export default ({ children, client, date }) => {
  React.useEffect(() => {
    client && window.localStorage.clear();
  }, []);

  return (
    <Container style={{ justifyContent: "space-between" }}>
      <div style={{ marginTop: `${theme.spacing.huge}` }}>
        {<Title>{client}</Title>}
        {date && <Text>{date}</Text>}
        {children}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <a target="_blank" href="https://infactcoop.com">
          <img alt="InFact Logo" src={infactLogo} style={{ width: "12rem" }} />
        </a>
        <p
          style={{
            fontSize: "24px",
            background: `${theme.gradients.blue}`,
            margin: "0",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Building products in service of humans and nature
        </p>
      </div>
    </Container>
  );
};
