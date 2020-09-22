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

function LearningPlaylist({ match, location }) {
  const [data, setData] = useState([]);
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

  useEffect(() => {
    getLessonsData();
  }, [getLessonsData]);

  function alterateBody(id) {
    const view = data.map((item) => {
      if (id === item.id) {
        return item.issues.body;
      }
      return "";
    });

    setBody(String(view));
  }

  return (
    <Container>
      <Header />

      <Aside>
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

      <Main>
        <Transcription id="transcription">
          <ReactMarkdown renderers={{ code: CodeBlock }} source={body} />
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
