import React from "react";
// import {} from "react-icons/fi";
// COMPONENTS
import Header from "../../components/Header";
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
} from "./styles";
import "./styles.css";

const NewIssue = () => {
  return (
    <Container id="new-issue">
      <Header />

      <Grid id="grid" style={{ gridArea: "MAIN" }}>
        <Main id="create-issue">
          <div id="what-do">
            <h3>Create a new repository</h3>
            <p>
              A repository contains all project files, including the revision
              history. Already have a project repository elsewhere?
            </p>
          </div>

          <Card id="card">
            <div class="large">
              <strong>Titulo da issue *</strong>
              <Input
                required
                placeholder="Nome que vai ser idetificado"
                type="text"
                name="title"
                id="title"
              />
            </div>

            <div>
              <strong>Idioma *</strong>
              <Input
                required
                placeholder="Ex: Português"
                type="text"
                name="tags"
                id="tags"
              />
            </div>
          </Card>

          <Card id="card">
            <div>
              <strong>Tags *</strong>
              <Input
                required
                placeholder="Ex: NodeJS, PHP, Iniciante"
                type="text"
                name="title"
                id="title"
              />
            </div>

            <div>
              <strong>Link ?</strong>
              <Input
                required
                placeholder="Do artigo completo"
                type="text"
                name="tags"
                id="tags"
              />
            </div>
          </Card>

          <Body>
            <Textarea
              required
              name="corpo"
              id="issue-body"
              cols="30"
              rows="10"
            />
          </Body>

          <Create>Create repository</Create>
        </Main>
      </Grid>
    </Container>
  );
};

export default NewIssue;
