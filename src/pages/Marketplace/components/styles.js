import styled from "styled-components";

// API MANEGEMENT
export const Main = styled.main`
  h3#unk {
    margin: 10px 0;
  }

  p#child,
  h4#child {
    color: ${(props) => (props.mode === `dark` ? `#FFF` : `initial`)};
  }

  span#points {
    border-left: 2px solid var(--new);
    margin-left: 5px;
    padding: 5px;
    background: var(--unpurple);
    color: ${(props) => (props.mode === `dark` ? `#999` : `initial`)};
  }
`;

export const Points = styled.ul`
  margin-left: 30px;
  margin-bottom: 30px;

  li {
    span {
      color: ${(props) => (props.mode === `dark` ? `#dedede` : `initial`)};
    }
  }
`;

export const Access = styled.ul`
  margin-top: 5px;

  li {
    list-style: hebrew;
    margin-left: 30px;
    margin-bottom: 20px;
    p {
      color: ${(props) => (props.mode === `dark` ? `var(--force)` : `initial`)};
    }

    code {
      color: ${(props) =>
        props.mode === `dark` ? `var(--UNANTER)` : `maroon`};
      margin-left: 10px;
    }
  }
`;

// FEEDBACK
export const Feed = styled.form`
  margin-left: 30px;
  div {
    label {
      display: block;
      color: ${(props) => (props.mode === `dark` ? `#999` : `initial`)};
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: 300px;
  height: 25px;
  margin-top: 3px;
  margin-bottom: 3px;
  margin-left: 20px;
  padding: 7px;

  display: block;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  font-size: 13px;

  color: ${(props) => (props.mode === `dark` ? `#ededed` : `#333;`)};
  background: ${(props) => (props.mode === `dark` ? `#121212` : `initial`)};
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  outline-color: #7159c1;
`;

export const MessageBody = styled.textarea`
  resize: vertical;
  width: 100%;
  max-width: 300px;
  margin-left: 20px;
  font-size: 13px;

  color: ${(props) => (props.mode === `dark` ? `#ededed` : `#333;`)};
  background: ${(props) => (props.mode === `dark` ? `#121212` : `initial`)};

  border: 1px solid rgba(0, 0, 0, 0.3);
  outline-color: #7159c1;
`;

export const Star = styled.article`
  max-width: 60px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  input {
    border: 1px solid var(--purple);
    background: ${(props) => (props.mode === `dark` ? `#121212` : `initial`)};
    color: ${(props) => (props.mode === `dark` ? `#FFF` : `initial`)};
    font-weight: bold;
    max-width: 30px;
    height: 30px;
    padding: 0;
    margin: 0 auto;
    border-radius: 50%;
  }
`;

export const Give = styled.button`
  width: 100px;
  height: 20px;
  margin-top: 5px;
  border-radius: 3px;

  cursor: pointer;
  color: #000;
  background-color: #7ed376;

  font-weight: 700;
  font-family: Roboto, arial, sans-serif;
  border: 1px solid #aa9696;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    background: #50fa7b;
    color: #000;
  }
`;
