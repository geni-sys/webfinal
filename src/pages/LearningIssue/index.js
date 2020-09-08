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

  const [cookies] = useCookies();
  const { issue_id } = match.params;
  const { token, user_id } = cookies;

  const getLessonsData = useCallback(async () => {
    try {
      const response = await api
        .get(`/issues/${issue_id}`, {
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

      setData([response.data]);
    } catch (err) {
      console.log(err.message);
      return alert("Erro na conexão");
    }
  }, [issue_id, token]);

  useEffect(() => {
    getLessonsData();
  }, [getLessonsData]);

  function serializeTags(tags) {
    const separete = String(tags).split(",");
    const serials = separete.map((tag) => tag.trim());

    return (
      <>
        {serials.map((serial) => (
          <span key={serial}>
            <a style={{ color: "#4764f1" }} href={`/search/${serial}`}>
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
    <Container>
      <Header />

      <Main id="learn-main">
        {data.map((issue) => (
          <>
            <Card>
              <strong>{issue.title}</strong>

              <div id="tags">{serializeTags(issue.tags)}</div>

              <div id="featureds">
                <div id="stars">
                  <span>
                    <FiStar />
                  </span>
                  <p>724</p>
                </div>

                <div id="avorage">
                  <span>
                    <FiHash />
                  </span>
                  <p>122</p>
                </div>
              </div>

              <small>Creador: {issue.user.name}</small>

              <a
                href={issue.link ? issue.link : "/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                main document
              </a>

              <Great
                onClick={() => handleMarkIssue(issue.starry)}
                disabled={issue.istarry}
              >
                <FiHash />
                {issue.istarry ? "Artigo arcado" : "Marcar artigo"}
              </Great>
            </Card>

            <Body id="learn-app">
              <GoBack>
                <FiArrowLeft /> Voltar
              </GoBack>

              <div id="transcription">
                <ReactMarkdown
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
