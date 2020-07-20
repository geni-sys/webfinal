import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import api from "../../../services/api";
// COMPONENTS
import { FiArrowDown, FiXOctagon } from "react-icons/fi";
import ReactLoading from "react-loading";
// STYLUS | STATIC
import { Container, Load, Main, Form, Input, Submit, Card } from "./styles";
import "./comprovate.css";
import Stars from "../../../assets/stars.svg";
import Montains from "../../../assets/montains.svg";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(2);

  const [cookies, setCookie] = useCookies(["token"]);
  const history = useHistory();

  useEffect(() => {
    if (!cookies.token && !cookies.user_id) {
      console.log("Usuário sem log " + JSON.stringify(cookies));
      return;
    }

    history.push("/");
  }, [cookies, history]);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!email && !password && !name) {
      alert("Informações incorretas");
      setIsLoading(0);
      return false;
    }

    setIsLoading(1);

    let psw = String(password).trim();
    let eml = String(email).trim();
    let nm = String(name).trim();

    try {
      const response = await api
        .post("/register", {
          name: nm,
          email: eml,
          password: psw,
          canny: false,
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

      const token = response.data.token;
      const user_id = response.data.user.id;

      setCookie("token", `Bearer ${token}`.trim());
      setCookie("user_id", String(user_id).trim());
      localStorage.setItem("email", String(email));
      localStorage.setItem("name", String(name));

      setIsLoading(2);

      setTimeout(() => history.push("/"), 1000);
    } catch (err) {
      setIsLoading(0);
      alert(err.message);
      console.log(err.message);
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
