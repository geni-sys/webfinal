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
  width: 250px;
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
      span {
        font-size: 13px;
      }
      p {
        font-size: 10px;
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

      &:hover {
        background-color: var(--white);
      }
    }

    li.selected {
      background-color: var(--white);
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
      }

      label#description {
        font-size: 10px;
        margin-left: 5px;
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

    &#non {
      margin: 0;

      font-size: 12px;
      padding-left: 3px;
      margin-left: 5px;
      border-left: 1px solid rgba(0, 0, 0, 0.5);
      background: azure;
    }
  }

  strong {
    margin-top: 10px;
  }

  span#tips {
    font-size: 9px;
    color: green;
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
