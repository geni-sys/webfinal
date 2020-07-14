import React, { useState } from "react";
// import {} from "react-icons/fi";
// COMPONENTS
import Header from "../../components/Header";
// STYLUS | STATIC
import { Container, Grid, Main, Create, Card, Welcome, GotIt } from "./styles";

const NewIssue = () => {
  const [selectedWork, setSelectedWork] = useState(0);
  const [selectedXP, setSelectedXP] = useState(0);
  const [interest, setInterest] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(0);

  function handleSelectWork(id) {
    setSelectedWork(id);
  }
  function handleSelectXP(id) {
    setSelectedXP(id);
  }
  function handleSelectPlan(id) {
    setSelectedPlan(id);
  }
  function responsesOfQuestions() {
    let work = "";
    let xp = "";
    let plan = "";
    switch (selectedWork) {
      case 1:
        work = "Software Engineer";
        break;
      case 2:
        work = "UX & Design";
        break;
      case 3:
        work = "Técnico de rede";
        break;
      case 4:
        work = "Segurança da informação";
        break;

      default:
        work = "Engineer";
        break;
    }
    switch (selectedXP) {
      case 1:
        xp = "Nenhuma";
        break;
      case 2:
        xp = "Um pouco";
        break;
      case 3:
        xp = "Quantidade moderada";
        break;
      case 4:
        xp = "Muita";
        break;

      default:
        xp = "Nnehuma";
        break;
    }
    switch (selectedPlan) {
      case 1:
        plan = "Aprender";
        break;
      case 2:
        plan = "(+) Ensinar";
        break;

      default:
        plan = "Engineer";
        break;
    }

    return { work, xp, plan };
  }

  async function handleSetUp() {
    if (!interest || !selectedWork || !selectedXP || !selectedPlan) {
      alert("Preencha todos os campos");
      return;
    }

    const { plan, work, xp } = responsesOfQuestions();

    return { plan, work, xp };
  }

  return (
    <Container id="new-issue">
      <Header />

      <Grid id="grid" style={{ gridArea: "MAIN" }}>
        <Main id="create-issue">
          <Welcome>
            <h2>Bem vindo a plataforma</h2>
            <p>
              Woohoo! Você está se juntando a milhares de desenvolvedores que
              estão fazendo o seu melhor trabalo na plataforma. Conte nos sobre
              o seu interesse. Vamos ajudar voçê a começar.
            </p>
          </Welcome>

          <Card id="card">
            <h3>Qual tipo de trabalho voçê faz, principalmente</h3>
            <ul id="questions">
              <li
                onClick={() => handleSelectWork(1)}
                className={selectedWork === 1 ? "selected" : ""}
              >
                <strong>Software Enginner</strong>
                <p>Eu codifico</p>
              </li>

              <li
                onClick={() => handleSelectWork(2)}
                className={selectedWork === 2 ? "selected" : ""}
              >
                <strong>UX & Design</strong>
                <p>Eu desenho interfaces</p>
              </li>

              <li
                onClick={() => handleSelectWork(3)}
                className={selectedWork === 3 ? "selected" : ""}
              >
                <strong>Técnico de rede</strong>
                <p>Eu gerencio rede</p>
              </li>

              <li
                onClick={() => handleSelectWork(4)}
                className={selectedWork === 4 ? "selected" : ""}
              >
                <strong>Segurança da informação</strong>
                <p>Mantenho a infra segura</p>
              </li>
            </ul>
          </Card>

          <Card id="card">
            <h3>Quanta experiência voçê tem?</h3>
            <ul id="questions">
              <li
                onClick={() => handleSelectXP(1)}
                className={selectedXP === 1 ? "selected" : ""}
              >
                <strong>Nenhuma</strong>
                <p>Eu nunca programei</p>
              </li>

              <li
                onClick={() => handleSelectXP(2)}
                className={selectedXP === 2 ? "selected" : ""}
              >
                <strong>Um pouco</strong>
                <p>Eu desenho interfaces</p>
              </li>

              <li
                onClick={() => handleSelectXP(3)}
                className={selectedXP === 3 ? "selected" : ""}
              >
                <strong>Quantidade moderada</strong>
                <p>Tenho alguma experiência</p>
              </li>

              <li
                onClick={() => handleSelectXP(4)}
                className={selectedXP === 4 ? "selected" : ""}
              >
                <strong>Muita</strong>
                <p>Sou muito experiênte</p>
              </li>
            </ul>
          </Card>

          <Card id="card">
            <h3>Qual o seu plano ao usar a plataforma?</h3>
            <ul id="questions">
              <li
                onClick={() => handleSelectPlan(1)}
                className={selectedPlan === 1 ? "selected" : ""}
              >
                <strong>Aprender</strong>
                <p>Pronto pra decolar</p>
              </li>

              <li
                onClick={() => handleSelectPlan(2)}
                className={selectedPlan === 2 ? "selected" : ""}
              >
                <strong>(+) Ensinar</strong>
                <p>Quero passar oque já sei,...</p>
              </li>
            </ul>
          </Card>

          <GotIt>
            <h3>Estrou + Interesado em:</h3>
            <div id="interests-group">
              <input
                required
                placeholder="JavaScript, NodeJS, PHP"
                type="text"
                name="interests"
                id="interest"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
              />
              <p>
                Vamos conectar voçê com comcomunidades e projetos do seu
                interesse.
              </p>
            </div>
          </GotIt>

          <Create onClick={handleSetUp} id="setup">
            Completar setup
          </Create>
        </Main>
      </Grid>
    </Container>
  );
};

export default NewIssue;
