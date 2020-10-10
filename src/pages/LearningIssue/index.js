/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useCookies } from "react-cookie";
import api from "../../services/api";
// COMPONENTS
import { FiHash, FiStar, FiArrowLeft } from "react-icons/fi";
import CodeBlock from "../../components/CodeBlock";
import Header from "../../components/Header";
// STYLUS | STATIC
import { Container, Main, Card, Great, Body, GoBack } from "./styles";

const LearningIssue = ({ match }) => {
  const [data, setData] = useState([]);
  const [theme] = useState(() => localStorage.getItem("theme") || "light");

  const [cookies] = useCookies();
  const { issue_id } = match.params;
  const { token, user_id } = cookies;

  const getLessonsData = useCallback(async () => {
    try {
      const response = await api
        .get(`/issues/starry/${user_id}/${issue_id}`, {
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
    } catch (err) {
      console.log(err.message);
      return alert("Erro na conexão");
    }
  }, [issue_id, token, user_id]);

  const loadTitle = useCallback(
    () =>
      (document.title =
        data[0]?.title + " (Artigo)" || "Aprendendo novo artigo"),
    [data]
  );

  useEffect(() => {
    loadTitle();

    getLessonsData();
  }, [getLessonsData]);

  function serializeTags(tags) {
    const separete = String(tags).split(",");
    const serials = separete.map((tag) => tag.trim());

    return (
      <>
        {serials.map((serial) => (
          <span key={serial}>
            <a
              style={{ color: "#4764f1" }}
              href={`/search?query_search=${serial}&tab=2`}
            >
              {serial}
            </a>
          </span>
        ))}
      </>
    );
  }
  async function handleMarkIssue(isStarry) {
    if (isStarry) {
      return null;
    }

    try {
      const response = await api
        .post(
          `/user/${user_id}/mark/issues/${issue_id}`,
          {},
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
      if (response.data.id) {
        return;
      }
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <Container mode={theme}>
      <Header />

      <Main id="learn-main" mode={theme}>
        {data.map((issue) => (
          <>
            <Card mode={theme} key={1}>
              <strong>{issue.title}</strong>

              <div id="tags">{serializeTags(issue.tags)}</div>

              <div id="featureds">
                {/* <div id="stars">
                  <span>
                    <FiStar />
                  </span>
                  <p>0</p>
                </div>

                <div id="avorage">
                  <span>
                    <FiHash />
                  </span>
                  <p>0</p>
                </div> */}
              </div>

              <small>Creador: {issue.user.name}</small>

              <a
                href={issue.link ? issue.link : "/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                documento principal
              </a>

              <Great
                onClick={() => handleMarkIssue(issue.starry)}
                disabled={issue.starry}
              >
                <FiHash />
                {issue.starry ? "Artigo marcado" : "Marcar artigo"}
              </Great>
            </Card>

            <Body id="learn-app" mode={theme} key={2}>
              <GoBack>
                <FiArrowLeft /> Voltar
              </GoBack>

              <div id="transcription">
                <ReactMarkdown
                  mode={theme}
                  renderers={{ code: CodeBlock }}
                  source={issue.body}
                />
              </div>
            </Body>
          </>
        ))}
      </Main>
    </Container>
  );
};

export default LearningIssue;
