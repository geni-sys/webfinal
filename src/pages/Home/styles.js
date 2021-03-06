import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-columns: 27rem auto 34rem;
  grid-template-rows: 6rem auto;

  grid-template-areas:
    "HEADER HEADER HEADER"
    "ASIDE MAIN ARTICLE";

  height: 100vh;
  max-height: 100vh;
  background: var(--witer);
  overflow: hidden;

  @media (max-width: 1024px) {
    grid-template-rows: 5rem auto;
    background: red;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 24rem auto 0;
    grid-template-rows: 5rem auto;

    grid-template-areas:
      "HEADER HEADER HEADER"
      "ASIDE MAIN MAIN";

    article {
      display: none;
    }
  }

  @media (max-width: 600px) {
    grid-template-areas:
      "HEADER"
      "MAIN";

    grid-template-columns: auto;
    grid-template-rows: 5rem auto;

    aside,
    article {
      display: none;
    }
  }
`;

// ASIDE STYLUS
export const Aside = styled.aside`
  grid-area: ASIDE;

  background: var(--white);
  background: ${(props) =>
    props.mode === `dark` ? "#121212" : `var(--white)`};

  display: flex;
  flex-direction: column;
  color: ${(props) => (props.mode === `dark` ? "#FFF" : `#999`)};

  border-right: 1px solid rgba(0, 0, 0, 0.1);

  padding: 30px 10px;
  font-size: 1.4rem;
`;

export const TopInformation = styled.div`
  div#user-aside {
    display: flex;
    align-items: center;

    border-bottom: 1px solid rgba(0, 0, 0, 0.3);

    a {
      max-width: 125px;
      overflow: hidden;

      text-overflow: ellipsis;
      white-space: nowrap;
      margin-left: 4px !important;
      /* color: #fff; */

      color: ${(props) =>
        props.mode === `dark` ? "#FFF" : `var(--grey-dark)`};
    }
  }

  div#aside-repo {
    margin-top: 25px;
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;

      p {
        font-weight: 400;
        font-size: 15px;

        color: ${(props) =>
          props.mode === `dark` ? "#999" : `var(--grey-dark)`};
      }

      button {
        background-color: var(--new);
        color: var(--white);

        display: flex;
        flex-direction: row;
        justify-content: space-between;

        align-items: center;
        transition: opacity 0.1s;
        padding: 2px;

        &:hover {
          opacity: 0.9;
        }
      }
    }
  }
`;

export const Entrada = styled.input`
  height: 28px;
  width: 100%;
  color: #888;
  margin: 10px 0;

  background: inherit;
  padding: 0 10px;
  box-shadow: 1px 0.2px 0.2px black;
  font-family: "Roboto mono", Arial, Helvetica, sans-serif;

  border: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  border-radius: 6px;

  &:hover {
    outline: 0.5px solid rgba(148, 145, 145, 0.3);
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  li {
    font-size: 1em;
    font-family: "Ubuntu", Arial, Helvetica, sans-serif;
    position: relative;
    margin-bottom: 3px;

    a {
      display: flex;
      flex-wrap: nowrap;
      color: #0366d6;
      text-decoration: none;
      width: fit-content;

      &:hover {
        text-decoration: underline;
      }

      span {
        margin-right: 5px;
        position: relative;
        max-width: 300px;
        overflow: hidden;
        max-height: 15px;
      }
    }
  }
`;

export const Footer = styled.footer`
  margin: 50px 0 0 0;

  p {
    font-size: 10px;
    font-family: "Ubuntu", Arial, Helvetica, sans-serif;
    a {
      color: ${(props) =>
        props.mode === `dark` ? "#555" : `var(--grey-dark)`};
    }
  }
`;

// MAIN STYLUS
export const Main = styled.main`
  background: ${(props) =>
    props.mode === `dark` ? "#1e1e1f" : `var(--witer)`};
  grid-area: MAIN;

  overflow-y: auto;
`;
