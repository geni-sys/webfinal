import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-columns: auto;
  grid-template-rows: 6rem auto;

  grid-template-areas:
    "HEADER"
    "MAIN";

  height: 100vh;
  max-height: 100vh;
  background: ${(props) =>
    props.mode === `dark` ? "#1e1e1f" : `var(--force)`};
  color: ${(props) => (props.mode === `dark` ? "#FFF" : `inherit`)};
  overflow: hidden;
`;

export const Grid = styled.div`
  background: ${(props) => (props.mode === `dark` ? "#1e1e1f" : `#fff`)};
  grid-area: MAIN;
  height: 100%;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

// MAIN STYLUS
export const Main = styled.main`
  div#what-do {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 20px 0;

    h3 {
      font-size: 2em;
    }

    p {
      font-size: 1.3em;
      color: ${(props) => (props.mode === `dark` ? "#DEDEDE" : `inherit`)};
    }
  }

  @media (max-width: 883px) {
    padding: 20px;
  }

  @media (max-width: 600px) {
    div#card {
      flex-direction: column;
    }
  }
`;

export const Card = styled.div`
  display: flex;

  margin-top: 30px;

  div.large {
    flex: 2;
  }
  div {
    margin-right: 30px;
  }

  div strong {
    font-size: 1.2em;
  }
`;

export const Input = styled.input`
  flex: 1;

  width: 100%;
  height: 30px;
  margin-top: 3px;
  padding: 7px;

  display: block;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  font-size: 1.4em;

  color: ${(props) => (props.mode === `dark` ? "#999" : `#333`)};
  background: ${(props) => (props.mode === `dark` ? "inherit" : `inherit`)};
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  outline-color: #7159c1;
`;

export const Create = styled.button`
  height: 30px;
  margin-top: 5px;
  padding: 0 20px;
  border-radius: 3px;

  transition: background-color 0.2s ease-in;

  cursor: pointer;
  color: #000;
  background-color: #7ed376;

  font-weight: 700;
  font-family: Roboto, arial, sans-serif;
  border: 1px solid #aa9696;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    background: #50fa7b;
  }
`;

// TRANSCRIPTION STYLUS
export const Body = styled.div`
  position: relative;
  margin-top: 10px;
  border-bottom: 0.1px solid
    ${(props) => (props.mode === `dark` ? "#d3d3d3" : `rgba(0, 0, 0, 0.2)`)};
  margin-bottom: 25px;

  div#transcription {
    position: relative;
    max-width: 700px;
    background-color: ${(props) =>
      props.mode === `dark` ? "#1f252e" : `var(--dominate)`};
    font-size: 13px;
    border: 1px solid
      ${(props) => (props.mode === `dark` ? "#d3d3d3" : `rgba(0, 0, 0, 0.1)`)};
    padding: 3px 5px;

    img {
      max-width: 600px;
    }
  }
`;
export const Textarea = styled.textarea`
  resize: vertical;
  width: 100%;
  background-color: ${(props) =>
    props.mode === `dark` ? "#D8D8D8" : `inherit`};

  margin-top: 3px;
  padding: 7px;
  /* border-top: 1px solid rgba(0, 0, 0, 0.2); */

  display: block;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  font-size: 1.5em;
`;

export const Preview = styled.button`
  border-radius: 3px;
  padding: 1px 10px;
  margin: 5px;

  transition: background-color 0.2s ease-in;

  cursor: pointer;
  color: #000;
  background-color: (var(--whit));

  font-weight: 700;
  font-family: Roboto, arial, sans-serif;
  border: 1px solid #aa9696;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    background: var(--dominating);
  }
`;
