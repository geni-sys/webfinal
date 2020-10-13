import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${(props) => (props.withoutFilter ? `600px` : `100%;`)};
  position: relative;

  overflow-y: auto;

  padding: 30px 25px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  max-height: 700px;
  position: relative;

  margin-bottom: 30px;
  padding: 2px;
  font-size: 14px;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.3); */

  header {
    display: flex;
    align-items: center;

    span {
      margin-right: 10px;
    }

    strong {
      cursor: pointer;
      color: ${(props) =>
        props.mode === `dark` ? "#999" : `var(--grey-dark);`};
    }
  }

  div#tags {
    font-size: 12px;
    display: flex;
    flex-direction: row;

    margin-left: 20px;
    span {
      background: ${(props) =>
        props.mode === `dark` ? "inherit" : `var(--white);`};
      color: ${(props) =>
        props.mode === `dark` ? "var(--tertiary);" : `var(--tertiary);`};
      margin: 5px;
      padding: 0 5px;
      border-radius: 6px;
      cursor: pointer;
    }
  }
`;

export const Transcription = styled.div`
  margin-left: 20px;
  padding: 0 10px;
  border-radius: 1.2px;
  width: auto;

  position: relative !important;
  max-height: 300px;
  overflow-x: auto;
  overflow-y: hidden;

  &.issue-limitaion#transcription {
    /* color: ${(props) => (props.mode === `dark` ? "#FFf" : ``)}; */
  }

  background: ${(props) =>
    props.mode === `dark` ? "#1f252e" : `var(--force)`};
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Link = styled.a`
  margin: 0 auto;
  margin-bottom: 0;
  margin-top: 10px;

  font-size: 12px;
`;
