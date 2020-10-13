import styled from "styled-components";
import { FiAlertTriangle } from "react-icons/fi";

// FATHER STYLUS
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
    props.mode === "dark" ? `#1f252e` : `var(--dominate);`};
  overflow-y: auto;
  overflow-x: hidden;
`;

// STYLUS MAIN
export const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 70px;

  @media (max-width: 700px) {
    flex-direction: column;
    padding-top: 20px;
  }
`;

// STYLUS ASIDE INNER
export const Aside = styled.aside`
  width: 300px;
  font-size: 1.4em;

  @media (max-width: 700px) {
    margin: 10px auto;
  }

  @media (max-width: 440px) {
    width: 100%;

    ul {
      width: 100%;
      li {
        margin: 0;
      }
    }
  }
`;
export const List = styled.ul`
  width: 100%;

  li {
    color: ${(props) => (props.mode === "dark" ? `#999` : `var(--Notify);`)};
    background: ${(props) => (props.mode === "dark" ? `#121212` : `initial`)};

    margin-right: 30px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2px 5px;

    display: flex;
    flex-direction: row;
    align-items: center;

    &#clicked {
      background: ${(props) =>
        props.mode === "dark" ? `var(--reports)` : `var(--white);`};
      color: ${(props) => (props.mode === "dark" ? `var(--witer)` : `initial`)};
    }

    a {
      color: inherit;
      margin-left: 10px;
    }
  }
`;

// STYLUS MAIN INNER
export const Content = styled.div`
  margin-right: 100px;
  width: 400px;

  @media (max-width: 700px) {
    margin: 0 20px;

    ul a {
      justify-content: center;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    margin: 0 10px;

    ul a {
      width: 100%;
    }
  }

  h1 {
    color: ${(props) => (props.mode === "dark" ? `#dedede` : `initial`)};
  }

  ul {
    min-width: 400px;

    div {
      p {
        font-size: 13px;
      }
    }
  }
`;

export const Triangle = styled(FiAlertTriangle)`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  color: var(--gray);
`;

export const Notificate = styled.li`
  position: relative;
  display: flex;
  flex-direction: row;
  min-height: 60px;

  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0;
  margin-bottom: 10px;
  color: ${(props) => (props.mode === "dark" ? `#999` : ` var(--Notify);`)};
  background: ${(props) => (props.mode === "dark" ? `#121212` : `initial`)};

  div#header {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 5px;
    /* background: var(--chat-input); */
    margin-right: 5px;
  }

  div#nlw {
    padding: 5px;
    position: relative;
    width: calc(100% - 60px);

    span {
      margin: 0 5px;
    }

    > a {
      font-size: 14px;
      color: ${(props) =>
        props.mode === "dark" ? `var(--reports)` : `var(--reports)`};
    }

    p {
      border-radius: 4px;
      background: ${(props) =>
        props.mode === "dark" ? `#122112` : `var(--white);`};
      margin: 0 5px;
      color: ${(props) =>
        props.mode === "dark" ? `#dedede` : `var(--grey-dark);`};
    }
  }
`;

export const Clicked = styled.a`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 10px;

  border: 0;
  border-radius: 1px;
  text-decoration: none;
  /* var(--force) */
  font-size: 12px;
  margin-top: 50px;
  padding: 3px 10px;

  color: ${(props) =>
    props.mode === "dark" ? `var(--discord);` : `var(--UNANTER);`};
  background: ${(props) =>
    props.mode === "dark" ? `var(--Notify);` : `var(--mention-message);`};
`;

export const New = styled.button`
  /* background-color: var(--new); */
  color: var(--white);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-content: center;

  width: 70px;
  background: #121212;

  align-items: center;
  transition: opacity 0.1s;
  padding: 2px;
  margin: 10px 0;

  &:hover {
    opacity: 0.9;
    background: var(--reports);
  }
`;
