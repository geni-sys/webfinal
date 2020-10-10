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

const LearningPlaylist = ({ location }) => {
  const [initAnimation, setInitAnimation] = useState(true);
  const [userSelected, setUserSelected] = useState(0);
  const [userSelectedName, setUserSelectedName] = useState("");
  const [usersMarkeds, setUsersMarkeds] = useState(0);
  const [message, setMessage] = useState("");

  const [theme] = useState(() => localStorage.getItem("theme") || "light");

  const [data, setData] = useState([]);
  const [boxs, setBoxs] = useState([]);
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

    if (searcher === 1) {
      const pr = Number(params.get("principal"));
      const co = Number(params.get("guest"));

      return {
        isDefined: true,
        principal: pr,
        co_principal: co,
      };
    }

    return {
      isDefined: false,
      principal: 0,
      co_principal: 0,
    };
  });

  const [cookies] = useCookies();

  const { token, user_id } = cookies;
  const getLessonsData = useCallback(async () => {
    try {
      if (!watch) {
        return alert("Lista não encontrada!");
      }

      const response = await api
        .get(`/playlist/${watch}`, {
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
  }, [token, watch]);
  const getBoxsMessages = useCallback(async () => {
    try {
      const response = await api
        .get(
          `/boxs?playlist=${watch}&guest=${box.co_principal}&sender=${box.principal}`,
          {
            headers: { Authorization: String(token) },
          }
        )
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
  }, [box.co_principal, box.principal, token, watch]);
  const getUsersMarkeds = useCallback(async () => {
    try {
      const response = await api
        .get(`/user/${user_id}/marked/users`, {
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

      setUsersMarkeds(response.data);
    } catch (err) {
      alert(err.message);
    }
  }, [token, user_id]);

  const loadTitle = useCallback(
    () =>
      (document.title = title + " (Playlist)" || "Aprendendo nova playlist"),
    [title]
  );

  useEffect(() => {
    setBody(String(firstLesson));

    loadTitle();
    getLessonsData();
    if (box.isDefined) {
      getBoxsMessages();
    }
    getUsersMarkeds();
  }, [
    box.isDefined,
    getBoxsMessages,
    getLessonsData,
    getUsersMarkeds,
    loadTitle,
  ]);

  const registBoxReports = async (guest) => {
    try {
      const link = `http://localhost:3337/playlists?watch=${watch}&principal=${user_id}&guest=${guest}&box=1`;

      await api.post(
        `/boxs_reports/${Number(user_id)}`,
        {
          report: link,
          playlist: title,
          guest: userSelectedName,},
        {
          Headers: { Authorization: `${String(token)}` },
        }
      ).catch((error) => {
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

    } catch (err) {
      alert(err.message)
    }
  }
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
  const sendAnotations = async (event) => {
    event.preventDefault();

    if (!message) return;

    const response = await api.post(
      `/boxs/${watch}/${box.principal}/to/${box.co_principal}`,
      {
        message: message,
        now: cookies.user_id
      },
      {
        headers: { Authorization: String(token) },
      }
    );

    if (!response.data.id) {
      return alert("Anotação não enviada");
    }

    createMessageElement(message, user_id);
    setMessage("");
  };
  function selectUser(user, username) {
    setUserSelected(user);
    setUserSelectedName(username)
  }
  async function initAnotations(guest) {
    try {
      const response = await api.post(
        `/boxs/${watch}/${user_id}/to/${guest}`,
        { message: "..." },
        { headers: { Authorization: String(token) } }
      );

      await api.put(
        `/scores/anotation/${cookies.user_id}`,
        {
          anotation: true,
        },
        {
          headers: { Authorization: String(cookies.token) },
        }
      );
      await api.post(
        `/notifications/${user_id}/to/${guest}`,
        {
          transcription: `http://localhost:3337/playlists?watch=${watch}&principal=${user_id}&guest=${guest}&box=1`,
          state: "pendente",
          type: "mention",
        },
        {
          Headers: { Authorization: String(token) },
        }
      );

      await registBoxReports(guest)

      window.location.href = `http://localhost:3337/playlists?watch=${watch}&principal=${user_id}&guest=${guest}&box=1`;
    } catch (err) {
      alert(err.message);
      // alert("Não pode completar a solicitação");
    }
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

              {usersMarkeds.map((userMarked) => (
                <li
                  key={userMarked.id}
                  onClick={() => selectUser(userMarked.user_mark, userMarked.marked.name)}
                  className={
                    userSelected === userMarked.user_mark ? "selected" : null
                  }
                >
                  <Miniature
                    source={userMarked.marked.github + ".png"}
                    width={"30px"}
                    height={"30px"}
                  />{" "}
                  {userMarked.marked.name}
                </li>
              ))}
              <button
                disabled={userSelected === 0 && true}
                onClick={() => {
                  initAnotations(userSelected);
                }}
                type="button"
              >
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
        {!box.isDefined && (
          <CreateAnotations onClick={() => setInitAnimation(!initAnimation)}>
            <GoMessages />
            Iniciar anotações
          </CreateAnotations>
        )}

        {box.isDefined && (
          <ul id="messages">
            {boxs.map((bxs) => (
              <li
                key={bxs.id}
                guest={bxs.convidado.id}
                sender={bxs.enviar.id}
                id={Number(bxs.now) === Number(cookies.user_id) ? "owner" : "receptor"}
              >
                <span>#{bxs.now}</span>
                <p>{bxs.message}</p>
              </li>
            ))}
          </ul>
        )}

        <Sender mode={theme} onSubmit={sendAnotations}>
          <button disabled={!box.isDefined} type="submit">
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
