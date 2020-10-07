import React, { useState, useEffect, useCallback } from "react";
import { useCookies } from "react-cookie";
import api from "../../services/api";
// COMPONENTS
import ReactMarkdown from "react-markdown";
import { FiFileText, FiFolder } from "react-icons/fi";
import Miniature from "../../components/Miniature";
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
  CreateAnotations,
  GoMessages,
  UserMarkeds,
} from "./styles";

const firstLesson = `
  # Como aprender uma nova Skill?

  ### A Regra das 10,000 horas
    - Voçê precisa 10,000 horas de práticas deliberadas para ser um metre das skill.

  ### Esto é real?
`;

const LearningPlaylist = ({ match, location }) => {
  const [initAnimation, setInitAnimation] = useState(true);
  const [loadAnotations, setLoadAnotations] = useState(false);
  const [userSelected, setUserSelected] = useState(0);
  const [message, setMessage] = useState("");
  const [theme] = useState(() => localStorage.getItem("theme") || "light");
  const [data, setData] = useState([]);
  const [boxs, setBoxs] = useState([]);
  useState([
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

    return searcher;
  });

  const [cookies] = useCookies();

  const { token, user_id } = cookies;
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

  const getBoxsMessages = useCallback(async () => {
    try {
      if (!box) {
        console.log(box);
        return alert("SEM Anotações!");
      }

      const response = await api
        .get(`/boxs?playlist=3&guest=2&sender=3`, {
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

      setBoxs(response.data);
    } catch (err) {
      console.log(err.message);
      return alert("Erro ao carregar as Anotações!");
    }
  }, [box, token]);

  const loadTitle = useCallback(
    () =>
      (document.title = title + " (Playlist)" || "Aprendendo nova playlist"),
    [title]
  );

  useEffect(() => {
    // setBody(String(firstLesson));

    loadTitle();
    getLessonsData();
    getBoxsMessages();
  }, [getBoxsMessages, getLessonsData, loadTitle]);

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

  function selectUser(user) {
    setUserSelected(user);
  }

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
        {!initAnimation && (
          <UserMarkeds>
            <ul>
              <h1>Iniciar anotações com:</h1>
              <li
                onClick={() => selectUser(1)}
                className={userSelected === 1 ? "selected" : null}
              >
                <Miniature width={"30px"} height={"30px"} /> Elias alexandre
              </li>
              <li
                className={userSelected === 2 ? "selected" : null}
                onClick={() => selectUser(2)}
              >
                <Miniature width={"30px"} height={"30px"} /> Barraba serencovich
              </li>
              <li
                className={userSelected === 3 ? "selected" : null}
                onClick={() => selectUser(3)}
              >
                <Miniature width={"30px"} height={"30px"} /> Luis Garcia
              </li>
              <button disabled={userSelected === 0 && true} type="button">
                OK
              </button>
            </ul>
          </UserMarkeds>
        )}

        <Transcription id="transcription">
          <ReactMarkdown renderers={{ code: CodeBlock }} source={body} />
        </Transcription>
      </Main>

      <Article mode={theme}>
        {box && (
          <CreateAnotations onClick={() => setInitAnimation(!initAnimation)}>
            <GoMessages />
            Iniciar anotações
          </CreateAnotations>
        )}

        {loadAnotations && (
          <ul id="messages">
            {boxs.map((bxs) => (
              <li
                key={bxs.id}
                id={bxs.sender === user_id ? "owner" : "receptor"}
              >
                <span>#{bxs.sender}</span>
                <p>{bxs.message}</p>
              </li>
            ))}
          </ul>
        )}

        <Sender mode={theme} onSubmit={sendeAnotations}>
          <button disabled={true} type="submit">
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
