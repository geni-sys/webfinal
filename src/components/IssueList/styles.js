import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  overflow-y: auto;

  padding: 30px 25px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  max-height: 600px;

  margin-bottom: 30px;
  padding: 2px;
  font-size: 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);

  header {
    display: flex;

    span {
      margin-right: 10px;
    }

    strong {
      color: var(--grey-dark);
    }
  }

  div#tags {
    font-size: 12px;
    display: flex;
    flex-direction: row;

    margin-left: 20px;
    span {
      background: var(--discord);
      margin: 5px;
      padding: 0 5px;
      border-radius: 6px;
      cursor: pointer;
    }
  }
`;

export const Transcription = styled.div`
  margin-left: 20px;
  padding: 10px;
  border-radius: 6px;

  position: relative !important;
  max-height: 300px;
  overflow: hidden;

  background: var(--dominate);
`;

export const Link = styled.a`
  margin: 0 auto;
  margin-bottom: 0;
  margin-top: 10px;

  font-size: 12px;
`;
