import React, { useState, useEffect, useCallback } from "react";
import { useCookies } from "react-cookie";
import api from "../../services/api";
// COMPONENTS
import ReactMarkdown from "react-markdown";
import { FiFileText, FiFolder } from "react-icons/fi";
import Header from "../../components/Header";
import CodeBlock from "../../components/CodeBlock";
// STYLES | STATIC
import {
  Container,
  Aside,
  Main,
  Article,
  Transcription,
  Sender,
} from "./styles";

const lesson = `
A simple markdown editor with preview, implemented with React.js and TypeScript. This React Component aims to provide a simple Markdown editor with syntax highlighting support. This is based on textarea encapsulation, so it does not depend on any modern code editors such as Acs, CodeMirror, Monaco etc.

### Features

- 📑 Indent line or selected text by pressing tab key, with customizable indentation.
- ♻️ Based on textarea encapsulation, does not depend on any modern code editors.
- 🚧 Does not depend on the [uiw](https://github.com/uiwjs/uiw) component library.
- 🚘 Automatic list on new lines.

### Quick Start

bash
npm i @uiw/react-md-editor


### Using

jsx
import React from "react";
import ReactDOM from "react-dom";
import MDEditor from '@uiw/react-md-editor';

export default function App() {
  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <div className="container">
      <MDEditor
        value={value}
        onChange={setValue}
      />
      <MDEditor.Markdown source={value} />
    </div>
  );
}

- [Demo preview for CodeSandbox](https://codesandbox.io/s/markdown-editor-for-react-izdd6)  
- [Demo preview for Github gh-pages](https://uiwjs.github.io/react-md-editor/)  
- [Demo preview for Gitee gh-pages](https://uiw.gitee.io/react-md-editor/)  

### Custom Toolbars

tsx
import React from "react";
import ReactDOM from "react-dom";
import MDEditor, { commands, ICommand, TextState, TextApi } from '@uiw/react-md-editor';
`;

function LearningPlaylist({ match }) {
  const [data, setData] = useState([]);
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [isSelected, setIsSelected] = useState(1);

  const [cookies] = useCookies();

  const { list_id } = match.params;
  const { token } = cookies;
  const getLessonsData = useCallback(async () => {
    try {
      const response = await api
        .get(`/playlist/${list_id}`, {
          headers: { Authorization: String(token) },
        })
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            alert(error.response.data.error);
            console.log(error.response.status);
            return;
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });

      setData(response.data);
      setTitle(response.data[0].lists.name);
    } catch (err) {
      console.log(err.message);
      return alert("Erro no conexão");
    }
  }, [list_id, token]);

  useEffect(() => {
    getLessonsData();
  }, [getLessonsData]);

  return (
    <Container>
      <Header />

      <Aside>
        <div id="learn-theme-group">
          <FiFolder />
          <h3 id="desaper">DotNet Orientation</h3>
        </div>
        <div id="learning-lessons">
          <ul>
            <li className="isLearning">
              <span>
                <FiFileText />
              </span>
              <span id="desaper">how to create Array</span>
            </li>

            <li>
              <span>
                <FiFileText />
              </span>
              <span id="desaper">how to add numbers</span>
            </li>

            <li>
              <span>
                <FiFileText />
              </span>
              <span id="desaper">build games</span>
            </li>

            <li>
              <span>
                <FiFileText />
              </span>
              <span id="desaper">changing tag names</span>
            </li>

            <li>
              <span>
                <FiFileText />
              </span>
              <span id="desaper">Build a search bar</span>
            </li>
          </ul>
        </div>
      </Aside>

      <Main>
        <Transcription id="transcription">
          <ReactMarkdown renderers={{ code: CodeBlock }} source={lesson} />
        </Transcription>
      </Main>

      <Article>
        <ul id="messages">
          <li id="receptor">
            <span>#34321</span>
            <p>No primeiro parágravo acrescentado uma matriz</p>
          </li>

          <li id="owner">
            <span>#34321</span>
            <p>No primeiro parágravo acrescentado uma matriz</p>
          </li>
          <li id="owner">
            <span>#34321</span>
            <p>Inspiração ao longo do percurso!</p>
          </li>
          <li id="owner">
            <span>#34321</span>
            <p>getting all.</p>
          </li>

          <li id="receptor">
            <span>#34321</span>
            <p>Nos primeiros acima dos parâgrafos</p>
          </li>
        </ul>

        <Sender>
          <input
            placeholder="Type here"
            type="text"
            name="message"
            id="message"
          />
        </Sender>
      </Article>
    </Container>
  );
}

export default LearningPlaylist;
