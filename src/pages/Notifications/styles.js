import styled from "styled-components";

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
  background: var(--force);
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
  width: 200px;
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

    a {
      display: flex;
      justify-content: space-between;
      border: 1px solid rgba(0, 0, 0, 0.1);
      padding: 10px;
      margin-bottom: 10px;
      color: var(--Notify);

      span#ilustry {
        display: flex;
        margin-right: 3px;
        padding: 0 10px 0 0;
        border-right: 1px solid rgba(0, 0, 0, 0.1);

        svg {
          width: 50px;
          height: 20px;
        }
      }
    }

    div {
      p {
        font-size: 13px;
      }
    }
  }
`;
