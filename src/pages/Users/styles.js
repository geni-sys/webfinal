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
    props.mode === `dark` ? "#121212" : `var(--white);`};
  color: ${(props) => (props.mode === `dark` ? "#FFF" : `initial`)};
  overflow-x: hidden;
`;

export const Main = styled.main`
  grid-area: MAIN;

  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100%;

  @media (max-width: 705px) {
    flex-direction: column;
    /* justify-content: center; */
    width: auto;
  }
`;

export const Aside = styled.aside`
  padding: 10px;
  display: flex;
  flex-direction: column;
  max-width: 330px;

  box-sizing: border-box;

  div#user-over {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    font-size: 14px;
    margin-top: 15px;

    span {
      margin-right: 5px;
    }

    strong {
      font-size: 2em;
    }
  }

  img {
    border-radius: 50%;
    width: 300px;
    height: 300px;
  }

  span#badge-overview {
    position: relative;
    top: 60px;
    color: ${(props) => (props.mode === `dark` ? "#999" : `#222;`)};
    border: 0;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    line-height: 12px;
    font-size: 13px;
    font-family: "Roboto mono", Arial, Helvetica, sans-serif;
  }

  button {
    background-color: var(--force);
    height: 30px;

    &:hover {
      background-color: #8da1be;
    }
  }

  div#about-user-overview {
    div#about-over {
      h5 {
        font-size: 16px;
        font-weight: 600;
        color: ${(props) =>
          props.mode === `dark` ? "var(--support)" : `#333;`};
        margin-top: 10px;
      }

      p {
        font-size: 14px;
        margin-left: 3px;
        padding: 0 10px;
      }
    }
  }

  @media (max-width: 890px) {
    display: none;
  }
`;

export const Article = styled.article`
  margin-top: 30px;
  margin-left: 50px;

  @media (max-width: 890px) {
    margin: 20px auto;
  }
  @media (max-width: 600px) {
    margin: 20px;
  }
`;

export const Top = styled.ul`
  display: flex;
  justify-content: space-between;
  font-size: 1.3em;
  max-width: 300px;
  min-width: 300px;
  margin-bottom: 10px;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;

    cursor: pointer;
    color: ${(props) => (props.mode === `dark` ? "var(--link);" : `initial;`)};
    position: relative;
    width: 100px;

    /* &:hover {  #fd951f
      border-bottom: 1px solid
        ${(props) =>
      props.mode === `dark` ? "var(--link);" : `rgba(0, 0, 0, 0.3);`};
    } */
    &::after {
      position: absolute;
      bottom: 0;
      left: 0;

      content: "";
      height: 4px;
      width: 0%;

      background-color: var(--link);

      transition: 0.4s;
    }
    &:hover::after,
    &.selected::after {
      width: 100%;
    }

    &.selected::after {
      background-color: var(--link);
    }
    &:hover::after {
      background-color: #1f252e;
    }
  }
`;

export const Bottom = styled.div`
  margin-top: 10px;

  ul#listeds {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    margin-top: 10px;

    li#pinned {
      display: flex;
      flex-direction: column;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 3px;
      padding: 10px;
      background: ${(props) =>
        props.mode === `dark` ? "#1f252e;" : `initial;`};

      div#tper {
        font-size: 1.4em;
        span {
          margin-right: 5px;
        }
      }

      p {
        font-size: 11px;
        padding: 5px 0;
      }

      div#btom {
        font-size: 1.2em;

        span#language {
          width: 10px;
          height: 10px;
          background: var(--mention-detail);
          border-radius: 50%;
        }
      }

      @media (max-width: 578px) {
        width: 100%;
      }
    }
    @media (max-width: 578px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

export const Points = styled.div`
  margin-top: 40px;

  h5 {
    font-size: 1.2em;
  }

  ul#burbble {
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    margin: 0;

    li {
      height: 15px;
      max-width: 300px;
      min-width: 200px;
      margin-top: 5px;
      border-radius: 1.4px;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }

    li#first {
      width: 100%;
      background-color: var(--force);

      p {
        background: #f25;
        width: ${(props) =>
          props.one >= 0 ? String(props.one) + `%;` : `0%;`};
        height: 100%;
      }
    }
    li#second {
      width: 100%;
      background-color: var(--force);

      p {
        background: #bd93f9;
        width: ${(props) =>
          props.two >= 0 ? String(props.two) + `%;` : `0%;`};
        height: 100%;
      }
    }
    li#three {
      width: 100%;
      background-color: var(--force);

      p {
        background: #8be9fd;
        width: ${(props) =>
          props.three >= 0 ? String(props.three) + `%;` : `0%;`};
        height: 100%;
      }
    }
  }
`;
