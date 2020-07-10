import styled from "styled-components";

export const Conatiner = styled.article`
  grid-area: ARTICLE;

  display: flex;
  flex-direction: column;
  color: var(--tertiary);

  background: inherit;
  padding-top: 20px;

  h3 {
    font-size: 17px;
    font-weight: 600;
  }

  &#insights {
    overflow-y: auto;
  }
`;

export const InsightGroup = styled.div`
  margin-top: 20px;
  padding-bottom: 10px;
  width: 100%;
`;

export const List = styled.ul`
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Inseight = styled.li`
  border-bottom: 1px solid rgba(131, 127, 127, 0.3);
  margin-right: 10px;
  margin-bottom: 25px;
  font-weight: 600;

  span a {
    color: var(--tertiary);
    font-size: 12px;
  }

  p {
    color: #777;
    font-size: 11px;
    padding-left: 5px;
  }

  div#resouces {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 5px;
    font-weight: 400;
    font-size: 13px;

    span {
      display: flex;
      flex-wrap: nowrap;

      padding: 2px;
      margin-right: 20px;
      color: var(--tertiary);
    }
  }
`;
