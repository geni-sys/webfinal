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
  background: ${(props) =>
    props.mode === "dark" ? `#1f252e` : `var(--force)`};
  overflow: hidden;
`;

// MAIN STYLUS
export const Main = styled.main`
  grid-area: MAIN;
  display: flex;
  overflow-y: auto;

  @media (max-width: 748px) {
    aside {
      padding: 30px 10px;
    }
  }

  @media (max-width: 650px) {
    position: relative;
    justify-content: center;

    aside {
      display: none;
    }
    div#learn-app {
      width: 100%;

      div#transcription {
        margin: 5px 3px;
      }
    }
  }
`;

// ASIDE STYLUS
export const Card = styled.aside`
  display: flex;
  flex: 1;
  flex-direction: column;

  padding: 30px 50px;
  max-width: 330px;
  font-size: 1.3em;

  strong {
    color: ${(props) => props.mode === "dark" && `#fff`};
  }

  div#tags {
    font-size: 1em;
    display: flex;
    flex-direction: row;
    padding: 5px 0;

    span {
      background: ${(props) =>
        props.mode === "dark" ? `#121212` : `var(--white);`};
      color: ${(props) =>
        props.mode === "dark" ? `var(--reports);` : `var(--tertiary);`};
      margin: 5px 0;
      margin-right: 2px;
      padding: 0 5px;
      border-radius: 3px;
      cursor: pointer;
    }
  }

  div#featureds {
    display: flex;
    flex-direction: row;
    padding: 5px 0;

    div {
      display: flex;
      flex-direction: row;
      margin-right: 30px;

      color: ${(props) => props.mode === "dark" && `#fff`};
    }
  }

  small {
    color: ${(props) => (props.mode === "dark" ? `#999` : `var(--primary);`)};
    font-size: 12px;
    margin-bottom: 5px;
    padding: 5px 0;

    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

// BUTTON STAR STYLUS
export const Great = styled.button`
  height: 25px;
  margin-top: 5px;
  border-radius: 3px;

  display: flex;
  justify-content: center;
  align-items: center;
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
  flex: 3;

  height: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 25px;

  display: flex;
  flex-direction: column;
  font-size: 1.5em;

  div#transcription {
    overflow: auto;

    background: var(--dominate);
    border-radius: 4px;

    margin: 20px 50px;
    padding: 0 10px;
  }
`;

export const GoBack = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;

  position: absolute;
  right: 52px;

  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 650px) {
    width: 100%;
    right: 0;
    position: relative;
  }

  &:hover {
    color: var(--primary);
  }
`;

export const Transcription = styled.div`
  padding: 7px;
  position: relative;

  display: block;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  font-size: 1.5em;
`;
