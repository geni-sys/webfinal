import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-columns: auto auto;
  grid-template-rows: 6rem auto;

  grid-template-areas:
    "HEADER HEADER"
    "ASIDE ARTICLE";

  height: 100vh;
  max-height: 100vh;
  background: var(--witer);
  overflow: hidden;

  @media (max-width: 1024px) {
    grid-template-rows: 5rem auto;
    background: red;
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

export const Aside = styled.aside`
  grid-area: ASIDE;

  background: var(--dominating);
`;

export const Article = styled.article`
  grid-area: ARTICLE;

  background: var(--white);
`;
