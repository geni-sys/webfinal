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
  background: ${(props) =>
    props.mode === "dark" ? `#1f252e` : `var(--force)`};
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
  /* background: ${(props) =>
    props.mode === "dark" ? `#121212` : `initial`}; */

  li {
    color: ${(props) => (props.mode === "dark" ? `#999` : `var(--Notify);`)};
    background: ${(props) => (props.mode === "dark" ? `#121212` : `initial`)};
    margin-right: 30px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2px 5px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

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

  @media (max-width: 700px) {
    margin: 0 20px;

    ul#concret li {
      justify-content: center !important;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    margin: 0 10px;

    ul#concret li {
      width: 100%;
    }
  }

  ul#concret {
    width: 450px;

    li {
      display: flex;
      /* justify-content: space-between; */
      border: 1px solid rgba(0, 0, 0, 0.1);
      padding: 10px;
      margin-bottom: 10px;
      color: ${(props) => (props.mode === "dark" ? `#999` : ` var(--Notify);`)};
      background: ${(props) => (props.mode === "dark" ? `#121212` : `initial`)};

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

      div#nlw {
        a {
          color: ${(props) =>
            props.mode === "dark" ? `var(--reports)` : `initial`};
        }

        p#lighs {
          display: flex;

          span {
            a {
              margin: 0 auto;
              font-size: 11px;
              color: ${(props) =>
                props.mode === "dark" ? `#999` : `var(--reports);`};
            }

            border-radius: 4px;
            background: ${(props) =>
              props.mode === "dark" ? `#122112` : `var(--white);`};
            margin: 0 3px;
            color: ${(props) =>
              props.mode === "dark" ? `#999` : `var(--grey-dark);`};
          }
        }
      }
    }

    div {
      a {
        font-size: 1.2em;
        margin-right: 10px;
      }

      p {
        font-size: 13px;
        margin: 5px 0;
      }
    }
  }
`;

// BUTTONS STYLUS
export const Button = styled.button`
  background: var(--dominate);
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1px 5px;
  margin-top: 7px;
  border: 0.1px solid rgba(0, 0, 0, 0.1);

  &:hover {
    background: var(--discord);
  }
`;
