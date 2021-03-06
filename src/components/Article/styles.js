import styled from "styled-components";

export const Conatiner = styled.article`
  grid-area: ARTICLE;

  display: flex;
  flex-direction: column;
  color: var(--tertiary);

  background: ${(props) =>
    props.mode === `dark` ? "#1f2122" : `var(--dominate);`};
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 20px;
  padding-left: 10px;
  font-size: 12px;

  h3 {
    font-size: 1.7em;
    font-weight: 600;
    color: ${(props) => (props.mode === `dark` ? "#999" : `auto`)};
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
    color: var(--reports);
    font-size: 1.2em;
  }

  p {
    color: #777;
    font-size: 1.1em;
    padding-left: 5px;
  }

  div#resouces {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 5px;
    font-weight: 400;
    font-size: 1.3em;

    span {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;

      padding: 2px;
      margin-right: 20px;
      color: ${(props) =>
        props.mode === "dark" ? `#999` : `var(--tertiary);`};
      font-size: 13px;
    }
  }
`;
