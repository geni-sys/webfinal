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
    props.mode === `dark` ? "#1f252e" : `var(--force);`};
  color: ${(props) => (props.mode === `dark` ? "#FFF" : `initial`)};
  overflow-x: hidden;
`;

export const Main = styled.main`
  grid-area: MAIN;

  display: flex;
  flex-direction: row;

  padding-top: 30px;
  width: 1000px;
  margin: 0 auto;

  @media (max-width: 705px) {
    flex-direction: column;
    /* justify-content: center; */
    width: auto;
    /* max-width: calc(100vw - 20px); */
  }
  @media (max-width: 620px) {
    min-width: calc(100vw - 20px);
    max-width: calc(100vw - 20px);
  }
`;

export const Aside = styled.aside`
  width: 400px;
  font-size: 1.3em;
  max-width: 300px;
  margin: 0 20px 0 0;
  border-radius: 4px;

  div#personal {
    display: flex;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;

    div {
      padding-left: 10px;
      a {
        font-size: 13px;
        color: ${(props) => (props.mode === `dark` ? "#50fa7b" : `#4764f1`)};
      }
      p {
        font-size: 10px;
        color: ${(props) => (props.mode === `dark` ? "#999" : `initial`)};
      }
    }
  }

  ul {
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;

    li {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      width: 100%;
      padding: 10px;
      cursor: pointer;
      color: ${(props) => (props.mode === `dark` ? "#999" : `initial`)};

      &:hover {
        background-color: ${(props) =>
          props.mode === `dark` ? "#121212" : `var(--white);`};
      }
    }

    li.selected {
      background-color: ${(props) =>
        props.mode === `dark` ? "#121212" : `var(--white);`};
    }
  }

  @media (max-width: 705px) {
    width: 100%;
    max-width: 100%;
    margin-bottom: 30px;
  }

  @media (max-width: 400px) {
    width: auto;
  }
`;

export const Body = styled.div`
  font-size: 1.4em;
  width: 100%;

  h5 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  ul#configurate {
    li {
      display: flex;
      flex-direction: column;
      margin: 10px;
      margin-bottom: 15px;

      label {
        font-size: 1.2em;
      }

      input {
        margin-left: 5px;
        background-color: ${(props) =>
          props.mode === `dark` ? "#121212" : `initial`};
        color: ${(props) => (props.mode === `dark` ? "#999" : `initial`)};
      }

      label#description {
        font-size: 10px;
        margin-left: 5px;
        color: ${(props) => (props.mode === `dark` ? "#999" : `initial`)};
      }
    }
  }

  @media (max-width: 1014px) {
    width: auto;
  }
`;

export const Overview = styled.article`
  @media (max-width: 768px) {
    display: none;
  }

  img {
    max-width: 240px;
    border-radius: 50%;
  }
`;

export const Update = styled.button`
  height: 30px;
  margin: 5px 0 20px 10px;
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

export const Demarker = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);

  padding: 4px;
  max-width: 400px;
`;

export const MoreInfo = styled.div`
  margin-top: 20px;

  p {
    margin: 5px 0 20px 10px;
    max-width: 500px;
    color: ${(props) => (props.mode === `dark` ? "#999" : `initial`)};

    &#non {
      margin: 0;

      font-size: 12px;
      padding-left: 3px;
      margin-left: 5px;
      border-left: 1px solid rgba(0, 0, 0, 0.5);
      background: ${(props) => (props.mode === `dark` ? "#121212" : `azure`)};
    }
  }

  strong {
    margin-top: 10px;
  }

  span#tips {
    font-size: 9px;
    color: green;
  }

  ul#reports {
    display: flex;
    flex-direction: column;
    max-height: 150px;
    overflow-x: hidden;
    overflow-y: auto;

    a {
      color: ${props => props.mode === 'dark' ? `var(--landing);` : `var(--reports)` } ;
      font-size: 17px;
      margin: 5px;
      width: fit-content;

      span#guest {
        color: var(--gray);
      }
    }

    margin-bottom: 40px;
  }
`;

export const Token = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.2px;
  background: #dedede;

  cursor: pointer;
  height: 20px;

  margin-left: 10px;
  padding: 0 5px;

  &:hover {
    background: #fff;
  }
`;

export const TokenBox = styled.div`
  position: absolute;
  background: var(--unpurple);
  right: 0;
  min-width: 400px;
  bottom: 10px;
  padding: 15px 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 1px;
  opacity: 98%;
  transition: display 2s ease-in-out;
  animation-name: fade;
  animation-duration: 400ms;

  &.desactived {
    display: none;
  }

  @keyframes fade {
    from {
      /* vai começãr */
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      /* vai terminar */
      opacity: 1;
      transform: scale(1);
      backgound: var(--new);
    }
  }

  input {
    border: 0;
    border-radius: 0;
    font-size: 16px;
    color: var(--reports);
    background: transparent;
    width: 100%;
  }
`;
