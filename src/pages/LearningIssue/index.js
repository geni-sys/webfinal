import React, { useCallback, useState, useEffect, useMemo } from "react";
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
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [link, setLink] = useState("");
  const [cookies] = useCookies();

  const { issue_id } = match.params;
  const { token } = cookies;
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

      setTitle(response.data.title);
      setBody(response.data.body);
      setTags(response.data.tags);
      setLink(response.data.link);
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

  return (
    <Container>
      <Header />

      <Main id="learn-main">
        <Card>
          <strong>{title}</strong>

          <div id="tags">{serializeTags(tags)}</div>

          <div id="featureds">
            <div id="stars">
              <span>
                {" "}
                <FiStar />{" "}
              </span>
              <p>724</p>
            </div>

            <div id="avorage">
              <span>
                {" "}
                <FiHash />{" "}
              </span>
              <p>122</p>
            </div>
          </div>

          <small>Creator: Elias alexandre</small>

          <a href={link ? link : "/"} target="_blank" rel="noopener noreferrer">
            main document
          </a>

          <Great>
            <FiHash />
            Marcar
          </Great>
        </Card>

        <Body id="learn-app">
          <GoBack>
            <FiArrowLeft /> Voltar
          </GoBack>

          <div id="transcription">
            <ReactMarkdown renderers={{ code: CodeBlock }} source={body} />
          </div>
        </Body>
      </Main>
    </Container>
  );
};

export default LearningIssue;
