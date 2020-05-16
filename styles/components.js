import React from "react";
import styled from "styled-components";
import theme from "./theme";
import wiggle from "../assets/images/wiggly.svg";
const { spacing, colors, gradients } = theme;

const Container = styled.div`
  height: ${spacing.fullHeight};
  width: ${spacing.fullWidth};
  padding: ${spacing.large} ${spacing.extraExtraLarge};
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  margin: 0;
`;

const Title = styled.p`
  margin: 0;
  font-size: 72px;
  font-weight: bold;
  line-height: 1.5;
`;

const Quote = styled.p`
  padding: ${spacing.small};
  font-size: 48px;
  line-height: 1.2;
  border-left: 8px solid black;
  padding-left: ${spacing.large};
  background-color: ${colors.silver};
`;

const Button = styled.button`
  background: ${gradients.blue};
  padding: ${spacing.small};
  font-size: 36px;
  cursor: pointer;
  font-family: "Work Sans";
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  padding: ${spacing.medium};
  width: 30vw;
  font-size: 16px;
  font-family: "Work Sans";
  margin-bottom: ${spacing.small};
`;

const TeamContainer = styled.div`
  display: grid;
  max-width: 900px;
  margin-top: ${spacing.small};
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: ${spacing.small};
`;

const TeamCard = ({ name, role }) => (
  <div
    style={{
      border: `2px solid black`,
      fontSize: "24px",
      padding: `${spacing.small}`,
    }}
  >
    <Text
      style={{
        fontWeight: "bold",
        fontSize: "32px",
        marginBottom: `${spacing.small}`,
      }}
    >
      {name}
    </Text>
    <img
      alt="Zigzag"
      style={{ marginBottom: `${spacing.small}` }}
      src={wiggle}
    />
    <p>{role}</p>
  </div>
);

const TimeText = styled.p`
  font-size: 24px;
  position: absolute;
  top: 0;
  left: 0;
  margin: 48px 0 0 80px;
  background: ${gradients.blue};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SendButton = () => {
  const [status, setStatus] = React.useState("");

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  const allCards =
    window.localStorage.getItem("1") &&
    window.localStorage
      .getItem("1")
      .concat(window.localStorage.getItem("2"))
      .concat(window.localStorage.getItem("3"))
      .concat(window.localStorage.getItem("4"));

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={submitForm}
      action="https://formspree.io/xlepgevk"
      method="POST"
    >
      <input
        style={{ display: "none" }}
        name="scopeCards"
        value={allCards}
        readOnly
      />
      <Input
        name="name"
        type="text"
        placeholder="Enter your name here"
        required
        style={{
          display: `${
            status === "ERROR" || status === "SUCCESS" ? "none" : "inline"
          }`,
        }}
      ></Input>
      {status === "SUCCESS" ? (
        <p style={{ fontSize: "24px" }}>Thanks!</p>
      ) : (
        <Button
          style={{ display: `${status === "ERROR" ? "none" : "inline"}` }}
        >
          Submit
        </Button>
      )}
      {status === "ERROR" && (
        <p style={{ fontSize: "24px" }}>Ooops! Something went wrong</p>
      )}
    </form>
  );
};

export {
  Container,
  Text,
  Title,
  SendButton,
  Quote,
  TeamCard,
  TeamContainer,
  TimeText,
};
