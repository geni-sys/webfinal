import styled from "styled-components";

// FATHER STYLYS
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

// MAIN STYLUS
export const Main = styled.main`
  grid-area: MAIN;

  overflow-y: auto;

  display: flex;
`;

// ASIDE STYLUS
export const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

// BUTTON STAR STYLUS
export const Great = styled.button`
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

// CONTENT STYLUS
export const Body = styled.div`
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 25px;
`;

export const Transcription = styled.div`
  padding: 7px;

  display: block;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  font-size: 1.5em;
`;
