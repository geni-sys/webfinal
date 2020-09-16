import React, { memo, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
// COMPONENTS
import { FiArrowDown, FiXOctagon } from "react-icons/fi";
import ReactLoading from "react-loading";
import Header from "../../components/Header";
// STYLUS | STATIC
import { Container, Aside, Main, Form, Input, Submit, Card } from "./styles";
import Friends from "../../assets/friends-negesys.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(2);

  const history = useHistory();
  const [cookies, setCookie] = useCookies(["token"]);

  useEffect(() => {
    if (!cookies.token && !cookies.user_id) {
      console.log("Usuário sem log " + JSON.stringify(cookies));
      return;
    }

    history.push("/");
  }, [cookies, history]);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!email && !password) {
      setIsLoading(0);
      alert("Informações incorretas");
      return false;
    }

    let eml = email.trim();

    setIsLoading(1);

    try {
      const response = await api
        .post("/authenticate", {
          email: eml,
          password,
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
          setIsLoading(0);
        });

      setIsLoading(2);

      const { id, name, email, github, completed } = response.data.user;
      const token = response.data.token;

      setCookie("token", String(`Bearer ${token}`));
      setCookie("user_id", String(id));
      localStorage.setItem("email", String(email));
      localStorage.setItem("name", String(name));
      localStorage.setItem("questions_status", String(completed));
      localStorage.setItem("github_avatar", String(github + ".png"));

      window.location.reload(true);
      return history.push("/");
    } catch (err) {
      console.log(err.message);
      alert("Erro ao fazer o login!");
      setIsLoading(0);
    }
  }

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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div id="loading-form">{stateInRun(isLoading)}</div>

          <Submit onClick={handleSubmit} id="submit" type="submit">
            Entrar
          </Submit>

          <Card id="card-account">
            <h4>New to Genesys?</h4>
            <a href="/register">create an account</a>
          </Card>
        </Form>
      </Main>
    </Container>
  );
};

export default memo(Login);
