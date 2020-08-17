import React, { useState } from "react";
import { useCookies } from "react-cookie";
import api from "../../services/api";
// COMPONENTS
import Header from "../../components/Header";
import Security from "./components/security";
import Default from "./components/default";
// STYLUS | STATIC
import {
  Container,
  Main,
  Aside,
  Body,
  Update,
  Overview,
  MoreInfo,
  Token,
  Demarker,
} from "./styles";
import ProfileImage from "../../assets/github-icon.png";

const Settings = () => {
  const [githubAvatar] = useState(
    () => localStorage.getItem("github_avatar") || null
  );
  const [user_name] = useState(
    () => localStorage.getItem("name") || "Recarregue a página"
  );
  const [isSelected, setIsSelected] = useState(1);

  const [cookies] = useCookies();
  const { user_id, token } = cookies;

  async function generateToken() {
    try {
      const response = await api.get(`newToken/${user_id}`, {
        headers: { Authorization: String(token) },
      });

      alert("AUTORIZAÇÃO: " + response.data.token);
    } catch (err) {
      console.log(err.message);
      alert(err.message);
    }
  }

  function HandleComponents({ id }) {
    if (parseInt(id) === 1) {
      return <Default />;
    }
    if (parseInt(id) === 4) {
      return (
        <>
          <MoreInfo>
            <strong>Como as notificações funcionam</strong>
            <p>
              Por padrão, a GS alerta você sempre que um artigo, um usuário ou
              uma extensão quer enviar notificações. Essa configuração pode ser
              modificada a qualquer momento. Se você estiver no modo de
              navegação desabilitada, não receberá notificações.
            </p>

            <strong>Seu E-mail</strong>
            <p>
              O teu email é um ID único que identifica o seu perfil, com ele
              voçê faz login na GS (WEB | MOBILE), é muito importante manter ele
              e a senha sempre atualizados.
            </p>

            <Demarker>
              <strong>Obter token</strong>
              <p id="non">
                O token gerado serve para abilitar acesso as requisições na API
                da plataforma
              </p>
              <span id="tips">expira em 234234 seg | 1 dia</span>

              <Token onClick={generateToken}>Gerar token</Token>
            </Demarker>
          </MoreInfo>
        </>
      );
    }
    if (parseInt(id) === 3) {
      return <Security />;
    }
    if (parseInt(id) === 5) {
      return (
        <>
          <MoreInfo>
            <strong>Artigos</strong>
            <p>
              Os artigos são a base do aplicativo, com eles são passados
              conhecimento através de marcações de texto como *Markdown* que é
              uma formatação de código que é processada e traduzida para HTML.
              Conhecendo MARKDOWN você pode escrever artigos completos e úteis.
            </p>

            <strong>Playlists</strong>
            <p>
              Listas são conjuntos de artigos que você salva. Você só pode criar
              listas com os artigos que tenha salvo. você pode criar uma lista e
              compartilhar com um amigo para que ambos possam aprender juntos.
            </p>
          </MoreInfo>
        </>
      );
    }
  }
  function Buttons({ id }) {
    if (id === 4) {
      return <a href="/">HOME</a>;
    }
    if (id === 5) {
      return <Update>Começar</Update>;
    }

    return <></>;
  }

  return (
    <Container>
      <Header />

      <Main>
        <Aside>
          <div id="personal">
            <span id="plus">+</span>
            <div>
              <a href="/profile">{user_name}</a>
              <p style={{ fontSize: "9px" }}>Painel de configurações.</p>
            </div>
          </div>

          <ul>
            <li
              onClick={() => setIsSelected(1)}
              className={isSelected === 1 ? "selected" : ""}
            >
              Profile
            </li>
            <li
              onClick={() => setIsSelected(3)}
              className={isSelected === 3 ? "selected" : ""}
            >
              Account security
            </li>
            <li
              onClick={() => setIsSelected(4)}
              className={isSelected === 4 ? "selected" : ""}
            >
              Mais informações
            </li>
            <li
              onClick={() => setIsSelected(5)}
              className={isSelected === 5 ? "selected" : ""}
            >
              Repositories
            </li>
          </ul>
        </Aside>

        <Body>
          <div>
            <h5>Public profile</h5>

            <ul id="configurate">
              <HandleComponents id={isSelected} />
            </ul>
          </div>

          <Buttons id={isSelected} />
        </Body>
        <Overview>
          <img src={githubAvatar || ProfileImage} alt="ELIASALLEX - PROFILE" />
        </Overview>
      </Main>
    </Container>
  );
};

export default Settings;
