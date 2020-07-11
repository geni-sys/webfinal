import React, { useState } from "react";
import { FiArrowDown, FiXOctagon } from "react-icons/fi";
import ReactLoading from "react-loading";
// COMPONENTS
import Header from "../../components/Header";
// STYLUS | STATIC
import { Container, Aside, Main, Form, Input, Submit, Card } from "./styles";
import Friends from "../../assets/friends-negesys.svg";

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
    <Container id="Login">
      <Header />

      <Aside id="Login-aside">
        <div id="anuncios">
          <h3>Build for Engineers</h3>
          <p id="text-limited">
            Elias é uma plataforma para te ajudar a levar a sua carreira pro
            outro nível, da melhor forma e sem custo!
          </p>
        </div>
        <div id="ilustry">
          <img src={Friends} alt="WELCOME FROM FRIENDS IN GENESIS" />
        </div>
      </Aside>

      <Main id="login-main">
        <div id="secret">
          <h4>Digite as suas credenciais</h4>
        </div>
        <Form id="form-comprovate">
          <div id="input-group">
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

          <div id="loading-form">{stateInRun(isLoading)}</div>

          <Submit onClick={handleSubmit} id="submit" type="submit">
            Entrar
          </Submit>

          <Card id="card-account">
            <h4>New to Genesys?</h4>
            <a href="/">create an account</a>
          </Card>
        </Form>
      </Main>
    </Container>
  );
};

export default Login;
