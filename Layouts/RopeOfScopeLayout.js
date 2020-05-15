import React, { useState, useEffect } from "react";
import theme from "../styles/theme";
import styled from "styled-components";

import { Container } from "../styles/components";

const Card = styled.div`
  text-align: center;
  border: 2px solid black;
  padding: ${theme.spacing.small};
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ scope }) => {
    if (scope === "can't") {
      return theme.colors.red;
    } else if (scope === "must") {
      return theme.colors.green;
    } else if (scope === "could") {
      return theme.colors.silver;
    } else if (scope === "default") {
      return theme.colors.white;
    }
  }};
`;

export default ({ scopeCards, pageIndex }) => {
  const [cards, setCards] = useState(scopeCards);

  useEffect(() => {
    const existingCards = window.localStorage.getItem(pageIndex);
    if (existingCards) {
      setCards(JSON.parse(existingCards));
    }
  }, [pageIndex]);

  useEffect(() => {
    window.localStorage.setItem(pageIndex, JSON.stringify(cards));
  }, [cards, pageIndex]);

  const getScope = (scope) => {
    let newScope;

    if (scope === "default") {
      newScope = "must";
    } else if (scope === "must") {
      newScope = "could";
    } else if (scope === "could") {
      newScope = "can't";
    } else if (scope === "can't") {
      newScope = "default";
    }

    return newScope;
  };

  return (
    <Container>
      <div
        style={{
          height: "100%",
          width: "100%",
          margin: `${theme.spacing.large} 0 0 0`,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          gridGap: "20px",
        }}
      >
        {scopeCards.map((card, index) => (
          <Card
            key={index}
            scope={cards[index].scope}
            onClick={() =>
              setCards((prevCards) =>
                prevCards.map((prevCard) =>
                  prevCard.statement === card.statement
                    ? {
                        ...prevCard,
                        scope: getScope(prevCard.scope),
                      }
                    : prevCard
                )
              )
            }
          >
            {card.statement}
          </Card>
        ))}
      </div>
    </Container>
  );
};
