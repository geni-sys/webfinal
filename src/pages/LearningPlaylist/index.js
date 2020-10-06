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
  SendIcon,
} from "./styles";

const firstLesson = `
  # O FOCO
`;

const LearningPlaylist = ({ match, location }) => {
  const [message, setMessage] = useState("");
  const [theme] = useState(() => localStorage.getItem("theme") || "light");
  const [data, setData] = useState([]);
  const [elements] = useState([
    {
      id: 1,
      message:
        "Os elemento servem para separar os components das *uls* e *lis*",
      type: "owner",
    },
    {
      id: 2,
      message: "No primeiro parágravo acrescentado uma matriz",
      type: "receptor",
    },
  ]);
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [isSelected, setIsSelected] = useState(1);
  const [watch] = useState(() => {
    const params = new URLSearchParams(location.search);
    const searcher = Number(params.get("watch"));

    return searcher || Number(1);
  });
  const [box] = useState(() => {
    const params = new URLSearchParams(location.search);
    const searcher = Number(params.get("box"));

    return searcher || Number(1);
  });

  const [cookies] = useCookies();

  const { token } = cookies;
  const getLessonsData = useCallback(async () => {
    try {
      if (!watch) {
        return alert("Lista não encontrada!");
      }

      const response = await api
        .get(`/playlist/${watch}?box=${box}`, {
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
  }, [box, token, watch]);

  const loadTitle = useCallback(
    () =>
      (document.title = title + " (Playlist)" || "Aprendendo nova playlist"),
    [title]
  );

  useEffect(() => {
    setBody(String(firstLesson));

    loadTitle();
    getLessonsData();
  }, [getLessonsData, loadTitle]);

  function alterateBody(id) {
    const view = data.map((item) => {
      if (id === item.id) {
        return item.issues.body;
      }
      return null;
    });

    setBody(String(view));
  }

  const createMessageElement = (msg, id) => {
    const ulElement = document.querySelector("ul#messages");

    const element = document.createElement("li");
    const span = document.createElement("span");
    const p = document.createElement("p");

    span.textContent = `#${id}`;
    p.textContent = `${msg}`;

    element.appendChild(span);
    element.appendChild(p);

    element.setAttribute("id", "owner");
    ulElement.appendChild(element);

    return 0;
  };

  const sendeAnotations = (event) => {
    event.preventDefault();

    if (!message) return;

    createMessageElement(message, 234);
    setMessage("");
  };

  return (
    <Container mode={theme}>
      <Header />

      <Aside mode={theme}>
        <div id="learn-theme-group">
          <FiFolder />
          <h3 id="desaper">{title}</h3>
        </div>
        <div id="learning-lessons">
          <ul>
            {data.map((item) => (
              <li
                key={item.id}
                className={isSelected === item.id ? "isLearning" : ""}
                onClick={() => {
                  setIsSelected(item.id);
                  alterateBody(item.id);
                }}
              >
                <span>
                  <FiFileText />
                </span>
                <span id="desaper">{item.issues.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </Aside>

      <Main mode={theme}>
        <Transcription id="transcription">
          <ReactMarkdown renderers={{ code: CodeBlock }} source={body} />
        </Transcription>
      </Main>

      <Article mode={theme}>
        <ul id="messages">
          {elements.map((element) => (
            <li key={element.id} id={element.type}>
              <span>#{element.id}</span>
              <p>{element.message}</p>
            </li>
          ))}
        </ul>

        <Sender mode={theme} onSubmit={sendeAnotations}>
          <button type="submit">
            <SendIcon />
            Enviar
          </button>
          <textarea
            placeholder="Criar anotações..."
            type="text"
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Sender>
      </Article>
    </Container>
  );
};

export default LearningPlaylist;
