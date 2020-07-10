import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-columns: 24rem auto 34rem;
  grid-template-rows: 6rem auto;

  grid-template-areas:
    "HEADER HEADER HEADER"
    "ASIDE MAIN ARTICLE";

  height: 100vh;
  max-height: 100vh;
  background: var(--force);
  overflow: hidden;

  @media (max-width: 1024px) {
    #root {
      grid-template-rows: 5rem auto;
      background: red;
    }
  }

  @media (max-width: 840px) {
    #root {
      grid-template-columns: 24rem auto 0;
      grid-template-rows: 5rem auto;
    }

    article {
      display: none;
    }
  }

  @media (max-width: 600px) {
    #root {
      grid-template-areas:
        "HEADER"
        "MAIN";

      grid-template-columns: auto;
      grid-template-rows: 5rem auto;
    }

    aside,
    article {
      display: none;
    }
  }
`;

export const Aside = styled.aside`
  background: #fff;
  grid-area: ASIDE;
`;

export const Main = styled.main`
  background: #ebf3ff;
  grid-area: MAIN;
`;
