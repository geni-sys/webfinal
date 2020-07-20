import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-columns: 280px auto 300px;
  grid-template-rows: 70px auto;

  grid-template-areas:
    "HEADER HEADER HEADER"
    "ASIDE MAIN ARTICLE";

  height: 100vh;
  max-height: 100vh;
  background: var(--force);
  overflow: hidden;

  @media (max-width: 1024px) {
    grid-template-columns: 250px auto 240px;
    grid-template-rows: 5rem auto;
    background: red;
  }

  @media (max-width: 768px) {
    grid-template-columns: 60px auto 240px;
    grid-template-rows: 5rem auto;
  }

  @media (max-width: 600px) {
    grid-template-areas:
      "HEADER HEADER"
      "MAIN MAIN"
      "ARTICLE ARTICLE";

    grid-template-columns: auto 140px;
    grid-template-rows: 5rem auto 5rem;

    aside {
      display: none;
    }

    article {
      background: #f25;
    }
  }
`;

export const Aside = styled.aside`
  grid-area: ASIDE;

  background: var(--white);

  display: flex;
  flex-direction: column;
  color: #999;
  border-right: 1px solid rgba(0, 0, 0, 0.1);

  padding: 30px 10px;
  font-size: 1.4rem;
`;

export const Main = styled.main`
  background: #ebf3ff;
  grid-area: MAIN;
  overflow-y: auto;
`;

export const Article = styled.article`
  position: relative;
  background: inherit;
  grid-area: ARTICLE;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  font-size: 1.4rem;

  ul#messages {
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
`;

export const Transcription = styled.div`
  padding: 10px;

  font-size: 1.4em;
`;

export const Sender = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  border-radius: 0;

  input {
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);

    padding: 0 5px;
    font-size: 15px;
    color: var(--grey-dark);
  }
`;
