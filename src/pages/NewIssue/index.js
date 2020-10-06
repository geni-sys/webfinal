import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
// SERVICES
import api from "../../services/api";
// COMPONENTS
import ReactMarkdown from "react-markdown";
import Header from "../../components/Header";
import CodeBlock from "../../components/CodeBlock";
// STYLUS | STATIC
import {
  Container,
  Grid,
  Main,
  Input,
  Create,
  Card,
  Body,
  Textarea,
  Preview,
} from "./styles";
import "./styles.css";

const NewIssue = () => {
  useEffect(() => {
    document.title = "Criar novo artigo";
  }, []);

  const [isPreview, setIsPreview] = useState(true);
  const [titulo, setTitulo] = useState("");
  const [tags, setTags] = useState("");
  const [linguagem, setLinguagem] = useState("");
  const [link, setLink] = useState("");
  const [body, setBody] = useState("");
  const [theme] = useState(() => localStorage.getItem("theme") || "light");

  const history = useHistory();

  const [cookies] = useCookies(["token"]);
  if (!cookies.token && !cookies.user_id) {
    console.log("Usuário sem log " + JSON.stringify(cookies));
    return;
  }

  async function createNewIssue() {
    if (!titulo || !tags || !body || !linguagem) {
      return alert("Preenche todos os campos necessários!");
    }

    try {
      const response = await api
        .post(
          `/user/${cookies.user_id}/new/issue`,
          {
            title: titulo,
            body,
            language: linguagem,
            link,
            tags,
          },
          { headers: { Authorization: cookies.token } }
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

      if (response.data.owner || response.data.issue) {
        alert("Issue criada!");
        await api.put(
          `/scores/issue/${cookies.user_id}`,
          {
            issue: true,
          },
          {
            headers: { Authorization: String(cookies.token) },
          }
        );

        history.push("/");
      }
      return;
    } catch (err) {
      console.log("Erro desconhecido");
    }
  }

  return (
    <Container mode={theme} id="new-issue">
      <Header />

      <Grid mode={theme} id="grid" style={{ gridArea: "MAIN" }}>
        <Main mode={theme} id="create-issue">
          <div id="what-do">
            <h3>Crie um novo artigo</h3>
            <p>
              Artigos são a base do aplicativo. Um artigo deve conter seus
              conteúdos bem definidos, incluindo o proprietário.
            </p>
          </div>

          <Card id="card">
            <div class="large">
              <strong>Titulo do artigo *</strong>
              <Input
                mode={theme}
                required
                placeholder="Nome que vai ser idetificado"
                type="text"
                name="title"
                id="title"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>

            <div>
              <strong>Linguagem / Tecnologia *</strong>
              <Input
                mode={theme}
                required
                placeholder="Ex: Javascript / UX-UI"
                type="text"
                name="tags"
                id="tags"
                value={linguagem}
                onChange={(e) => setLinguagem(e.target.value)}
              />
            </div>
          </Card>

          <Card id="card">
            <div>
              <strong>Tags *</strong>
              <Input
                mode={theme}
                required
                placeholder="Ex: NodeJS, PHP, Iniciante"
                type="text"
                name="title"
                id="title"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </div>

            <div>
              <strong>Link ?</strong>
              <Input
                mode={theme}
                required
                placeholder="Do artigo completo"
                type="text"
                name="tags"
                id="tags"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
          </Card>

          <Body mode={theme}>
            {isPreview ? (
              <Textarea
                mode={theme}
                required
                name="corpo"
                id="issue-body"
                cols="30"
                rows="10"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            ) : (
              <div id="transcription">
                <ReactMarkdown renderers={{ code: CodeBlock }} source={body} />
              </div>
            )}

            <Preview onClick={() => setIsPreview(!isPreview)}>Preview</Preview>
          </Body>

          <Create onClick={createNewIssue}>Criar novo artigo</Create>
        </Main>
      </Grid>
    </Container>
  );
};

export default NewIssue;
