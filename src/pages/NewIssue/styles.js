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
  background: var(--force);
  overflow: hidden;
`;

export const Grid = styled.div`
  background: #fff;
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

  color: #333;
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
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 25px;
`;
export const Textarea = styled.textarea`
  resize: vertical;
  width: 100%;

  margin-top: 3px;
  padding: 7px;
  /* border-top: 1px solid rgba(0, 0, 0, 0.2); */

  display: block;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  font-size: 1.5em;
`;
