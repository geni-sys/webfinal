import styled from "styled-components";

export const Input = styled.input`
  border-radius: 6px;
  background: #ffffff;
  border: 1px solid #00000010;
  padding: 0 5px;
  color: #000;
  min-height: 29px;
  max-width: 400px;
`;

export const Update = styled.button`
  height: 30px;
  margin: 5px 0 20px 10px;
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

export const Description = styled.textarea`
  resize: vertical;
  border-radius: 6px;
  background: #ffffff;
  border: 1px solid #00000010;
  padding: 0 5px;
  color: #000;
  height: 140px;
  max-width: 400px;
`;
