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
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Main = styled.main`
  grid-area: MAIN;

  display: flex;
  flex-direction: column;
  /* overflow-y: auto; */

  @media (max-width: 1000px) {
    background: var(--white);

    justify-content: center;
    align-items: center;

    aside#aside-primary {
      justify-content: space-evenly;
    }

    article#main-primary {
      justify-content: center;
      align-items: center;

      h4 {
        padding-left: 20px;
      }

      ul {
        justify-content: center;
      }
    }
  }

  @media (max-width: 748px) {
    aside#aside-primary {
      padding: 0 20px;
    }
  }

  @media (max-width: 600px) {
    aside#aside-primary {
      flex-direction: column;
    }

    article#main-primary ul {
      width: 100%;
    }
  }

  @media (max-width: 440px) {
    article#main-primary {
      ul {
        justify-content: flex-start;
      }

      h4 {
        padding-left: 2px;
      }
    }
  }
`;

export const Aside = styled.aside`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1.4em;
  width: 100%;

  h2 {
    font-size: 55px;
  }

  div img {
    width: 300px;
  }
`;

export const Article = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  overflow-y: auto;
  margin-top: 30px;

  h4 {
    margin-top: 30px;
  }

  aside#aside-secondary {
    h4 {
      font-size: 16px;
    }

    ul {
      margin-left: 10px;
      margin-top: 30px;
    }

    li {
      font-size: 12px;
      margin-top: 25px;
    }

    @media (max-width: 1000px) {
      display: none;
    }
  }

  main {
    font-size: 14px;
    max-width: 800px;

    h4 {
      font-weight: 600;
      font-family: "Ubuntu", Arial, sans-serif;
    }
  }
`;

export const Recommended = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin-top: 15px;

  li {
    position: relative;
    min-width: 200px;
    width: 300px;
    height: 150px;
    margin: 5px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: var(--discord);
    border-radius: 3px;

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;

      span#middle {
        color: white;
      }
    }
  }
`;

export const Trending = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;

  li {
    display: flex;
    flex-direction: row;
    margin: 20px;
    cursor: pointer;

    div#top {
      margin-right: 10px;

      svg {
        width: 50px;
        height: 50px;
        color: var(--mention-detail);
      }
    }

    div#bottom {
      p {
        color: var(--support);
        font-size: 14px;
        max-width: 240px;
        max-height: 200px;
      }
    }
  }
`;
