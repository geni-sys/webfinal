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
    props.mode === "dark" ? `#121212` : `var(--witer);`};
  overflow: hidden;

  @media (max-width: 1024px) {
    grid-template-rows: 5rem auto;
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

export const Banner = styled.div`
  grid-area: BANNER;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) =>
    props.mode === "dark" ? `#f9a839` : `var(--dominate);`};

  > h1 {
    color: ${(props) => (props.mode === "dark" ? `#444` : `initial`)};
  }
`;

export const Icone = styled.img`
  /* max-width: 230px; */
  height: auto;
`;

export const Main = styled.main`
  grid-area: MAIN;
  overflow-y: auto;

  div#contents {
    /* overflow: hidden; */
    display: flex;
    flex-direction: row;
  }
`;

export const Aside = styled.aside`
  background: ${(props) =>
    props.mode === "dark" ? `#1e1e1f` : `var(--dominate);`};

  > h1 {
    color: ${(props) => (props.mode === "dark" ? `#dedede` : `initial`)};
  }

  flex: 1;
  padding: 40px;
`;

export const Playlist = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: 300px;
  width: 500px;

  h1 {
    font-size: 50px;
    margin: 100px auto;
    color: ${(props) => (props.mode === "dark" ? "#dedede" : "initial")};
  }

  &.active {
    display: none;
  }

  li {
    display: flex;
    flex-direction: column;
    background-color: ${(props) =>
      props.mode === "dark" ? `#1f252e` : `var(--witer);`};

    font-size: 1.4em;
    margin-top: 20px;
    border: 1px solid
      ${(props) =>
        props.mode === "dark" ? `#FFFFFF11` : `rgba(0, 0, 0, 0.2);`};
    border-radius: 1.4px;

    div {
      display: flex;
    }

    div#starred {
      margin: 15px 10px;

      svg {
        margin-right: 3px;
        color: ${(props) => (props.mode === "dark" ? `#D3D3D3` : `#000`)};
      }

      span {
        font-size: 13px;
        color: ${(props) => (props.mode === "dark" ? `#D3D3D3` : `#000`)};
      }
    }

    div#list {
      margin: 15px 10px;
      justify-content: space-between;
      svg {
        margin-right: 3px;
      }

      div#unik {
        color: ${(props) =>
          props.mode === "dark" ? `var(--mention-detail);` : `var(--reports);`};

        p a {
          color: ${(props) => props.mode === "dark" && `var(--UNANTER);`};
        }
      }

      div#side {
        border: 1px solid rgba(0, 0, 0, 0.2);
        background: ${(props) =>
          props.mode === "dark" ? `#121212` : `initial`};

        button {
          padding: 0 5px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        span {
          padding: 0 5px;
          color: ${(props) => (props.mode === "dark" ? `#FFF` : `initial`)};
        }
      }
    }

    div#stamps {
      span {
        color: ${(props) => props.mode === "dark" && `#FFF`};
      }
      background: ${(props) =>
        props.mode === "dark" ? `var(--tertiary);` : `var(--white);`};
      padding: 7px;
      font-size: 10px;
    }
  }

  @media (max-width: 600px) {
    min-width: 100%;
  }
`;

export const Article = styled.article`
  background: ${(props) =>
    props.mode === "dark" ? `#121212` : `var(--white);`};

  ${(props) =>
    props.mode === "light" && `border-left: 1px solid rgba(0,0,0, .3)`};

  flex: 1;
  padding: 40px;

  overflow-y: auto;

  > h1 {
    color: ${(props) => (props.mode === "dark" ? `#dedede` : `initial`)};
  }
`;
