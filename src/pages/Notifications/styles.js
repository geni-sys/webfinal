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
  background: var(--dominate);
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
    color: var(--Notify);
    margin-right: 30px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2px 5px;

    display: flex;
    flex-direction: row;
    align-items: center;

    &#clicked {
      background: var(--white);
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
  flex-direction: column;
  min-height: 100px;
  padding: 0;
  font-size: 2rem;

  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  background: var(--dominating);
  color: var(--witer);

  div#header {
    display: flex;
    justify-content: space-between;
    align-content: center;
    background: var(--chat-input);
  }

  div#nlw {
    padding: 7px;
    /* border: 0.5px solid rgba(0, 0, 0, 0.2); */

    p {
      font-size: 13px;
      color: var(--grey-dark);
    }
  }
`;

export const Clicked = styled.a`
  position: absolute;
  bottom: 0;
  left: 0;

  border: 0;
  border-radius: 1px;
  background: var(--link);
  text-decoration: none;
  /* var(--force) */
  font-size: 12px;
  color: var(--white);
  margin-top: 5px;
  padding: 3px 10px;
`;

export const New = styled.button`
  /* background-color: var(--new); */
  color: var(--white);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-content: center;

  width: 70px;
  background: var(--Notify);

  align-items: center;
  transition: opacity 0.1s;
  padding: 2px;
  margin: 10px 0;

  &:hover {
    opacity: 0.9;
  }
`;
