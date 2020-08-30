import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);

  width: 100%;
  background: var(--tertiary);
  border-bottom: 1px solid rgb(40, 42, 54);

  grid-area: HEADER;

  div#comun {
    display: flex;
  }

  @media (max-width: 840px) {
    .desactived-header {
      display: none;
    }

    div#screen {
      display: block;
    }

    div#session {
      width: auto;
    }
  }

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

export const Screen = styled.div`
  display: none;
  cursor: pointer;
  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 0.3;
  }

  div {
    width: 30px;
    height: 5px;
    margin: 3px;

    background: var(--white);
  }
`;

export const Navegation = styled.nav`
  position: relative;
  display: flex;
  margin: 0 30px;
`;

export const InputSearch = styled.input`
  width: 274.7px;
  min-height: 28px;
  line-height: 20px;

  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  color: rgb(191, 191, 191);

  background: var(--secondary);
  padding: 0 10px;
  font-size: 16px;
`;
export const Search = styled.button`
  position: absolute;
  right: 0;

  width: 35px;
  min-height: 28px;
  line-height: 20px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background: var(--primary);
  color: var(--white);

  &:hover {
    background-color: var(--secondary);
    color: #f8f8fa;
  }
`;

export const List = styled.ul`
  display: flex;
  margin: 0 20px;

  li {
    margin: 0 10px;
    padding: 0;
    color: var(--white);
    font-size: 16px;
    font-size: 14px;

    a {
      color: inherit;
      text-decoration: none;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Session = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  width: 200px;

  a#top-level {
    background-color: var(--secondary);
    border-radius: 50%;
    margin-right: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;

    svg {
      width: 20px;
      height: 20px;
      color: #999;
    }
  }

  div#fi-usr {
    border-radius: 50%;
    background-color: var(--secondary);
    cursor: pointer;
    margin-right: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const OverClick = styled.div`
  position: absolute;
  top: 30px;
  max-width: 260px;
  display: block;
  background: var(--Notify);

  max-height: 200px;
  width: 100%;
  height: 100%;
  right: 10px;
  border-radius: 1.5px;

  z-index: 10;

  span {
    color: var(--reports);
    font-size: 12px;
    padding: 5px 5px 0 20px;
  }

  div {
    display: block;
    padding: 5px;
    padding-left: 20px;

    a {
      display: block;
      font-size: 14px;
      padding-top: 3px;
      color: var(--desfoque);
    }
  }

  &.desaper {
    display: none;
  }
`;

export const LogOut = styled.button`
  position: absolute;
  bottom: 0;
  color: var(--ENTER);

  width: 100%;
  margin: 10px 0 0 0;
  padding: 2px;
  font-size: 17px;

  border: 0;
  border-top: 1px solid black;
  border-radius: 0;
  padding-top: 7px;
  background: var(--grey-dark);
  padding-bottom: 7px;

  &:hover {
    background: var(--notification);
    color: white;
  }
`;

export const Close = styled.div`
  &#close {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    cursor: pointer;
    margin-bottom: 10px;

    svg {
      position: relative;
      width: 14px;
      height: 14px;

      margin: 0 auto;
      color: var(--ENTER);

      &:hover {
        transform: rotateX("angle");
        transform: rotate(20deg);
      }
    }
  }
`;
