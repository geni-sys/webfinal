import styled from "styled-components";

export const Container = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  position: relative;

  transition: display 0s, opacity 0.3s ease-in-out;

  background: var(--white);
  border-radius: 4px;
  opacity: 0;

  &.monted {
    opacity: 1;
  }
`;

export const Aside = styled.article`
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  min-width: 220px;
  padding: 5px;

  strong {
    font-size: 1.5em;
  }

  li {
    &:nth-child(2) {
      margin-top: 10px;
    }

    display: flex;
    justify-content: flex-start;
    min-width: 140px;
    max-width: 220px;
    align-items: center;
    padding: 3px 5px;
    cursor: pointer;
    font-size: 1.5rem;

    img {
      margin-right: 5px;
    }

    &:hover {
      opacity: 0.5;
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  overflow: hidden;
  font-size: 1.5em;

  > div {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    padding: 5px;
    span {
      font-weight: 600;
    }
  }

  ul li {
    padding: 3px 15px;
    color: var(--rocketseat);
  }
`;
