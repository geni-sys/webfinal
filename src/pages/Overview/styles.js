import styled from "styled-components";
import { FiCheck } from "react-icons/fi";

export const Container = styled.div`
  display: grid;

  grid-template-columns: auto;
  grid-template-rows: 70px auto;

  grid-template-areas:
    "HEADER"
    "MAIN";

  height: 100%;
  background: var(--white);
`;

export const Main = styled.main`
  grid-area: MAIN;

  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Center = styled.div`
  position: relative;

  max-width: 1000px;
  width: 100%;
  margin-bottom: 50px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Playlist = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: 500px;

  &.active {
    display: none;
  }

  li {
    display: flex;
    flex-direction: column;
    background-color: var(--witer);

    font-size: 1.4em;
    margin-top: 20px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 1.4px;

    div {
      display: flex;
    }

    div#starred {
      margin: 15px 10px;

      svg {
        margin-right: 3px;
      }

      span {
        font-size: 13px;
      }
    }

    div#list {
      margin: 15px 10px;
      justify-content: space-between;
      svg {
        margin-right: 3px;
      }

      div#unik {
        color: var(--reports);
      }

      div#side {
        border: 1px solid rgba(0, 0, 0, 0.2);

        button {
          padding: 0 5px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        span {
          padding: 0 5px;
        }
      }
    }

    div#stamps {
      background: var(--white);
      padding: 7px;
      font-size: 10px;
    }
  }

  @media (max-width: 600px) {
    min-width: 100%;
  }
`;

export const CreateList = styled.button`
  position: absolute;
  right: 0;
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 0 5px;
  border-radius: 0;
  color: var(--reports);
`;

// MODAL STYLUS
export const Modals = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 230px;
  width: 410px;
  background: transparent;

  font-size: 1.2em;
  margin-top: 20px;
  padding: 10px 0;

  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Lists = styled.ul`
  padding: 5px 20px;
  width: 400px;
  max-height: 220px;
  height: auto;

  background: var(--witer);
  overflow-y: auto;

  border: 1px solid black;
  border-radius: 3px;
  margin-top: 13px;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 400px;
  height: 33px;
  border: 1px solid black;
  border-radius: 4px;
  position: relative;

  input {
    width: calc(100% - 99px);
    border: 0;
    padding: 5px 7px;
    height: 100%;
  }
`;

export const Checker = styled(FiCheck)``;

export const ListElement = styled.li`
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  max-height: 20px;
  width: 100%;

  position: relative;
  margin-bottom: 5px;

  min-height: 23px;
  display: flex;
  align-items: center;
`;

export const AddIn = styled.button`
  display: flex;
  align-items: center;

  height: 20px;
  padding: 0 20px;
  border-radius: 3px;

  margin: 0;
  position: absolute;
  right: 0;

  transition: background-color 0.2s ease-in;

  cursor: pointer;
  color: #000;
  background-color: #d3d3d3;

  font-weight: 700;
  font-family: Roboto, arial, sans-serif;
  border: 0 solid #aa9696;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    background: #50fa7b;
  }
`;

export const CreateTitle = styled.button`
  display: flex;
  align-items: center;

  padding: 0 20px;
  border-radius: 3px;

  position: absolute;
  right: 0;

  height: 25px;
  margin: auto 0;
  text-align: center;
  margin-right: 5px;

  transition: background-color 0.2s ease-in;

  cursor: pointer;
  color: #000;
  background-color: #7ed376;

  font-weight: 700;
  font-family: Roboto, arial, sans-serif;
  border: 1px solid #aa9696;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    background: #50fa7b;
  }
`;
