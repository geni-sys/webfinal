import styled from "styled-components";
import { FiCheck } from "react-icons/fi";

export const Container = styled.div`
  display: grid;

  grid-template-columns: auto;
  grid-template-rows: 6rem auto;

  grid-template-areas:
    "HEADER"
    "BOX";

  height: 100vh;
  max-height: 100vh;
  background: var(--mention-detail);
  overflow: hidden;
`;

export const Header = styled.header`
  grid-area: HEADER;

  div {
    display: flex;
    flex-direction: row;

    width: 234px;
    margin: 3px;
    padding: 2px 4px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

export const Box = styled.div`
  grid-area: BOX;

  display: flex;
`;

export const Aside = styled.aside`
  flex: 1;
  padding-left: 48px;

  > h1 {
    font-size: 128px;
  }

  div.last-group {
    margin-top: 20px;

    span {
      font-size: 12px;
      font-weight: bold;
    }

    p {
      font-size: 13px;
      color: var(--chat-input);
    }
  }

  div#buttons {
    display: flex;
    flex-direction: column;

    max-width: 220px;
    margin-left: 150px;
    margin-top: 100px;
    border-radius: 11px;
    height: 88px;

    a#login {
      display: flex;
      align-items: center;
      justify-content: center;

      background: var(--Notify);
      color: var(--ENTER);

      border-radius: 10px;
      height: 28px;
      font-size: 20px;
    }

    a#new {
      display: flex;
      align-items: center;
      justify-content: center;

      color: #000;
      margin-top: 30px;
      font-weight: 600;
      text-decoration: underline;
      font-size: 13px;
    }
  }
`;

export const Checklist = styled.div`
  width: fit-content;
  margin-left: 20px;
  font-size: 14px;
  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CheckIcon = styled(FiCheck)`
  margin-right: 3px;
  border-radius: 50%;
  color: var(--witer);
  background: var(--secondary);
`;

export const MobileBox = styled.div`
  max-width: 600px;
  /* border: 1px solid rgba(0, 0, 0, 0.1); */
`;

export const Main = styled.main`
  flex: 1;
`;
