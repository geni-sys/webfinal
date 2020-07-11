import React, { useState } from "react";
import { FiArrowDown, FiXOctagon } from "react-icons/fi";
import ReactLoading from "react-loading";
// COMPONENTS
// STYLUS | STATIC
import { Container, Load, Main, Form, Input, Submit, Card } from "./styles";
import "./comprovate.css";
import Stars from "../../../assets/stars.svg";
import Montains from "../../../assets/montains.svg";

const Login = () => {
  const [isLoading, setIsLoading] = useState(2);

  function stateInRun(id) {
    let condition = null;

    switch (id) {
      case 0:
        // ERRADO
        condition = <FiXOctagon color="#F25" size={30} />;
        break;
      // CERTO
      case 1:
        condition = (
          <ReactLoading
            type="spin"
            width="8%"
            height="8%"
            color="#2ea44f"
            className="css-load"
          />
        );
        break;
      // PADRÃO
      default:
        condition = <FiArrowDown color="#2ea44f" size={20} />;
        break;
    }

    return condition;
  }
  function handleSubmit() {
    setIsLoading(0);
  }

  return (
    <Container id="register" Montains={Montains} Stars={Stars}>
      <Main id="session-group">
        <div id="welcome">
          <h3>Registrar-se na plataforma</h3>
        </div>

        <Form className="form-session" onSubmit={handleSubmit}>
          <div id="input-group">
            <div>
              <label htmlFor="senha">Nome</label>
              <Input
                required
                type="text"
                placeholder="Digite seu nome"
                name="name"
                id="name"
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Input
                required
                placeholder="Digite seu email"
                type="email"
                name="email"
                id="email"
              />
            </div>

            <div>
              <label htmlFor="senha">Senha</label>
              <Input
                required
                type="password"
                placeholder="Digite sua senha secreta"
                name="senha"
                id="senha"
              />
            </div>
          </div>

          <Load id="loader-session">{stateInRun(isLoading)}</Load>

          <Submit className="session" id="submit" type="submit">
            Registrar
          </Submit>
        </Form>

        <Card id="terms-services">
          ao se registrar voce aceita nossos
          <a href="/"> termos de serviço.</a>
        </Card>
      </Main>
    </Container>
  );
};

export default Login;
