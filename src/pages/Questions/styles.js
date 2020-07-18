import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-columns: auto;
  grid-template-rows: 6rem auto;

  grid-template-areas:
    "HEADER"
    "MAIN";

  height: 100vh;
  max-height: 100vh;
  background: var(--force);
  overflow-x: hidden;
`;

export const Grid = styled.div`
  background: #fff;
  grid-area: MAIN;
  height: 100%;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

// MAIN STYLUS
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 883px) {
    padding: 20px;
  }

  @media (max-width: 600px) {
    div#card {
      flex-direction: column;
    }
  }
`;

export const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  margin-bottom: 60px;
  border-radius: 6px;
  background-color: var(--force);

  h2 {
    margin: 0 auto;
    color: var(--Notify);
    font-size: 30px;
    font-family: "Ubuntu", Arial, Helvetica, sans-serif;
  }

  p {
    color: var(--Notify);
    font-size: 18px;
    max-width: 900px;
    text-align: center;
    font-family: "Roboto mono", Arial, Helvetica, sans-serif;
    margin-top: 30px;
    line-height: 20px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  /* border: 1px solid rgba(0, 0, 0, 0.5); */
  height: auto;
  width: 500px;
  margin: 30px 0;

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
    margin-left: -30px;
    color: var(--quinary);

    @media (max-width: 600px) {
      margin-left: 0;
    }
  }

  ul {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10px;

      height: 100px;
      /* height: 70px; */
      border: 1px solid rgba(0, 0, 0, 0.4);
      border-radius: 6px;
      cursor: grab;

      strong {
        font-family: "Roboto", Arial, Helvetica, sans-serif;
        color: #335493;
        text-align: center;
        font-size: 1.3em;
      }

      p {
        font-family: "Roboto", Arial, Helvetica, sans-serif;
        color: #333;
        text-align: center;
      }

      &.selected {
        background: #bd93f919;
        border: 1px solid #ffffa518;
        box-sizing: border-box;

        p {
          color: #dadacc;
          font-size: 1.1em;
        }
      }

      &:hover {
        border-color: #f8f8f209;
      }
    }
  }

  @media (max-width: 515px) {
    width: auto;

    ul {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const GotIt = styled.div`
  display: flex;
  flex-direction: column;
  color: #6a6767;
  font-family: "Roboto mono", Arial, Helvetica, sans-serif;
  font-size: 1.5em;

  input {
    border-radius: 6px;
    background: #ffffff;
    border: 1px solid #00000010;
    padding: 0 5px;
    color: #000;
  }
`;

export const Create = styled.button`
  height: 30px;
  margin-top: 5px;
  margin-bottom: 20px;
  padding: 0 20px;
  border-radius: 3px;

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
