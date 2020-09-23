import styled from "styled-components";

// FATHER STYLUS
export const Container = styled.div`
  display: grid;

  grid-template-columns: auto;
  grid-template-rows: auto;

  grid-template-areas: "ASID MAI";

  height: 100vh;
  background: #121212 !important;
  overflow-y: hidden;
  height: 100vh;

  @media (max-width: 880px) {
    overflow-y: auto;

    grid-template-columns: auto;
    grid-template-rows: auto auto;

    grid-template-areas:
      "ASID"
      "MAI";

    aside#Login-aside {
      img {
        display: none;
      }
    }
  }

  /* @media (max-width: 768px) {
    grid-template-rows: 4.9rem auto;
  } */

  @media (max-width: 600px) {
    grid-template-rows: 160px auto;

    height: 100%;
    overflow-y: auto;

    aside#Login-aside {
      div#anuncios {
        p#text-limited {
          display: none;
        }
      }
    }

    main {
      align-items: baseline;

      div#secret {
        display: block;
        margin: 0 auto;

        h4 {
          font-size: 16px;
        }
      }

      form {
        margin: 30px auto;
      }
    }
  }

  @media (max-width: 320px) {
    main {
      width: 100%;

      form {
        width: 100%;
      }
    }
  }
`;

// ASIDE STYLUS
export const Aside = styled.aside`
  &#Login-aside {
    background: #121212;
    grid-area: ASID;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
      font-size: 6rem;
      color: #ffffff;
    }
    p#text-limited {
      max-width: 400px;
      color: #999;
      font-size: 30px;
      margin-left: 10px;
    }

    div#ilustry img {
      width: 500px;
    }
  }
`;

// MAIN STYLUS
export const Main = styled.main`
  background: #1f252e;
  grid-area: MAI;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  div#secret {
    display: block;
    font-size: 1.3em;
    color: #777;
    margin-top: 30px;
  }
`;

export const Form = styled.form`
  display: block;
  position: relative;
  width: 300px;
  height: 220px;

  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  background-color: #121212;
  color: var(--primary);
  margin: auto;

  padding: 10px;

  &:hover {
    box-shadow: 1px 0.5px #1f252e;
  }

  div#input-group label {
    font-family: "Ubuntu", Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #fff;
  }

  div#input-group + label {
    margin-top: 5px;
  }

  div#loading-form {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 30px;
    width: 100%;
    padding: 10px 0;

    div.css-load {
      margin-top: -19px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  margin-top: 3px;
  padding: 7px;

  display: block;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  font-size: 1.4em;

  color: #999;
  background: #1f252e !important;
  border-radius: 3px;
  border: 0.1px solid #999;
  outline-color: #7159c1;
`;

export const Submit = styled.button`
  width: 100%;
  height: 30px;
  margin-top: 5px;
  border-radius: 3px;

  cursor: pointer;
  color: #000;
  background-color: #7ed376;

  font-weight: 700;
  font-family: Roboto, arial, sans-serif;
  /* border: 1px solid #aa9696; */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    background: #50fa7b;
    color: #000;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  border-radius: 3px;

  background-color: #121212;
  color: #999;

  width: 100%;
  padding: 5px;
  margin: 10px auto;
  font-size: 1.2em;
`;
