import styled from "styled-components";
import { FiSend, FiActivity } from "react-icons/fi";

export const Container = styled.div`
  display: grid;

  grid-template-columns: 280px auto 300px;
  grid-template-rows: 70px auto;

  grid-template-areas:
    "HEADER HEADER HEADER"
    "ASIDE MAIN ARTICLE";

  height: 100vh;
  max-height: 100vh;
  background: ${(props) =>
    props.mode === "dark" ? `#1f252e` : `var(--force)`};
  overflow: hidden;

  @media (max-width: 1024px) {
    grid-template-columns: 200px auto 240px;
    grid-template-rows: 5rem auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: 60px auto 240px;
    grid-template-rows: 5rem auto;

    aside {
      div#learn-theme-group {
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);

        svg {
          margin: 10px 0;
        }

        h3#desaper {
          display: none;
        }
      }

      div ul {
        li {
          justify-content: center;

          span#desaper {
            display: none;
          }
          span {
            font-size: 1.4em;
            margin: 0;
            svg {
              margin: 0;
            }
          }
        }
      }
    }
  }

  @media (max-width: 620px) {
    grid-template-columns: auto 140px;
    grid-template-rows: 5rem auto 5rem;

    grid-template-areas:
      "HEADER HEADER"
      "MAIN MAIN"
      "ARTICLE ARTICLE";

    aside {
      display: none;
    }
  }
`;

export const Aside = styled.aside`
  grid-area: ASIDE;

  background: ${(props) =>
    props.mode === "dark" ? `#1f252e` : `var(--white)`};

  display: flex;
  flex-direction: column;
  color: #999;
  border-right: 1px solid rgba(0, 0, 0, 0.1);

  padding: 5px 0;
  font-size: 1.4rem;

  div#learn-theme-group {
    display: flex;
    justify-content: center;
    align-items: center;

    h3 {
      padding: 15px 3px;
      color: var(--grey-dark);
      color: ${(props) => props.mode === "dark" && `#dedede`};
    }
  }

  div#learning-lessons {
    ul {
      li {
        color: var(--reports);
        display: flex;
        align-items: center;
        cursor: pointer;

        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        margin: 0;
        width: 100%;
        font-size: 14px;
        background: ${(props) =>
          props.mode === "dark" ? `var(--Notify);` : `var(--white);`};

        span svg {
          margin-right: 3px;
          margin-left: 10px;
        }

        &:hover {
          background: var(--dominating);
          color: ${(props) =>
            props.mode === "dark" ? `var(--white);` : `var(--Notify);`};
        }
        &.isLearning {
          border-left: 5px solid rgba(0, 0, 0, 0.5);
          color: #999;
        }
      }
    }
  }
`;

export const Main = styled.main`
  background: ${(props) => (props.mode === "dark" ? `#121212` : `#ebf3ff;`)};

  grid-area: MAIN;
  overflow-y: auto;

  div#transcription {
    /* overflow: auto; */

    background: ${(props) =>
      props.mode === "dark" ? `#121212` : `var(--dominate);`};
    border-radius: 4px;
  }
`;

export const Article = styled.article`
  position: relative;
  background: inherit;
  grid-area: ARTICLE;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  overflow: hidden;
  font-size: 1.4rem;

  ul#messages {
    max-height: calc(100vh - (70px + 84px));
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;

    li {
      border-radius: 1.4px;
      padding: 2px 10px;
    }

    li#receptor {
      color: var(--dominate);
      background-color: var(--quaternary);
      border-left: 3px solid var(--purple);
      margin-bottom: 3px;
      margin-right: 10px;

      span {
        background: var(--secondary);
      }
    }

    li#owner {
      background-color: var(--purple);
      border-right: 3px solid var(--quaternary);
      margin-bottom: 3px;
      margin-left: 23px;

      span {
        background: var(--unpurple);
      }
    }
  }

  @media (max-width: 620px) {
    ul#messages {
      display: none;
    }
  }
`;

export const UserMarkeds = styled.div`
  transition: display 0.2s ease-in-out;
  height: 250px;

  ul {
    background: #121212;
    border: 1px solid rgba(0, 0, 0, 1);
    box-shadow: 4px 3px black;

    margin: 30px auto;
    border-radius: 6px;
    padding: 5px;

    overflow-x: hidden;
    overflow-y: auto;
    min-height: 200px;
    max-height: 220px;
    max-width: 300px;

    > h1 {
      color: var(--desfoque);
      margin-bottom: 15px;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin: 5px;
      cursor: pointer;

      font-size: 18px;
      color: var(--ENTER);

      img {
        margin-right: 7px;
      }

      &:hover {
        opacity: 0.3;
      }

      &.selected {
        background: var(--discord);
      }
    }
  }

  button {
    width: 100%;
    min-height: 20px;
    margin-top: 23px;
    border-radius: 6px;
    background: var(--dominating);

    :hover {
      background: var(--discord);
    }
  }
`;

export const CreateAnotations = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--rocketseat);
  /* color: var(--notification); */
  width: 100%;
  min-height: 30px;
  font-size: 16px;

  border-radius: 3px;

  &:hover {
    background: var(--dominating);
  }
`;

export const GoMessages = styled(FiActivity)`
  margin-right: 3px;
`;

export const Transcription = styled.div`
  padding: 10px;

  font-size: 1.4em;
`;

export const Sender = styled.form`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-radius: 0;

  textarea {
    width: 100%;
    height: 65px;
    resize: none;
    border: 1px solid rgba(0, 0, 0, 0.1);

    padding: 0 5px;
    font-size: 15px;
    /* color: var(--grey-dark);  */
    color: ${(props) => (props.mode === "dark" ? `#999` : `var(--grey-dark);`)};
    background: ${(props) =>
      props.mode === "dark" ? `var(--Notify);` : `var(--witer)`};
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: var(--ENTER);
    }
  }
`;

export const SendIcon = styled(FiSend)`
  padding-right: 5px;
`;
