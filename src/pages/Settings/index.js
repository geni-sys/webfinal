import React, { useState, useEffect,useCallback } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
// COMPONENTS
import Header from "../../components/Header";
import Miniature from "../../components/Miniature";
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
  TokenBox,
} from "./styles";
import ProfileImage from "../../assets/github-icon.png";

const Settings = () => {
  const [boxsReports, setBoxsReports] = useState([]);
  const [newToken, setNewToken] = useState("");
  const [desactived, setDesactived] = useState(false);
  const [githubAvatar] = useState(
    () => localStorage.getItem("github_avatar") || null
  );
  const [user_name] = useState(
    () => localStorage.getItem("name") || "Recarregue a página"
  );
  const [isSelected, setIsSelected] = useState(1);
  const [theme] = useState(() => localStorage.getItem("theme") || "light");

  const [cookies] = useCookies();
  const { user_id, token } = cookies;
  const history = useHistory();

  function copyToClipboard() {
    var copyText = document.querySelector("input#clipboard");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }
  function generateToken() {
    try {
      api
        .get(`newToken/${user_id}`, {
          headers: { Authorization: String(token) },
        })
        .then((response) => {
          setNewToken(String(response.data.token));
          copyToClipboard();
          setDesactived(true);
          setTimeout(() => {
            setDesactived(false);
          }, 5000);
        });
    } catch (err) {
      console.log(err.message);
      alert(err.message);
    }
  }
  function goToOverviewPage() {
    history.push("/overview");
  }
  const getboxsReports = useCallback(async () => {
    try {
      const reports = await api.get(`/boxs_reports/${user_id}`,{
        headers: { Authorization: String(token)}
      })

      setBoxsReports(reports.data)
    } catch (err) {
      alert(err.message)
    }
  }, [token, user_id])

  function HandleComponents({ id }) {
    if (parseInt(id) === 1) {
      return <Default mode={theme} />;
    }
    if (parseInt(id) === 4) {
      return (
        <>
          <MoreInfo mode={theme}>
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
      return <Security mode={theme} username={user_name} />;
    }
    if (parseInt(id) === 5) {
      return (
        <>
          <MoreInfo mode={theme}>
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
    if (parseInt(id) === 6) {
      return (
        <>
          <MoreInfo mode={theme}>
            <strong>Listas compartilhadas recentemente</strong>
            <ul id="reports">
              {boxsReports.map(report => (
                <a key={report.id} target="_blank" href={report.report} rel="noopener noreferrer">
                  <span>{report.playlist}</span> {" / "}
                  <span id="guest">{report.guest}</span>
                </a>))}
            </ul>

            <strong>!!!</strong>
            <p>
              Em notificações voçÊ encontrara as listas que estão compartilhando com você.
            </p>
          </MoreInfo>
        </>
      );
    }
  }
  function Buttons({ id }) {
    if (id === 4) {
      return <a href="/wheezy">HOME</a>;
    }
    if (id === 5) {
      return <Update onClick={goToOverviewPage}>Começar</Update>;
    }

    return <></>;
  }

  useEffect(() => {
    document.title = "Definições | " + user_name;
    getboxsReports()
  }, [getboxsReports, user_name]);

  return (
    <Container mode={theme}>
      <Header />

      <Main mode={theme}>
        <Aside mode={theme}>
          <div id="personal">
            <span id="plus">
              <Miniature width={"30px"} height={"30px"} />
            </span>
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
              Perfil
            </li>
            <li
              onClick={() => setIsSelected(3)}
              className={isSelected === 3 ? "selected" : ""}
            >
              Segurança da conta
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
            <li
              onClick={() => setIsSelected(6)}
              className={isSelected === 6 ? "selected" : ""}
            >
              Atividades
            </li>
          </ul>
        </Aside>

        <Body mode={theme}>
          <div>
            <h5>Perfil Público</h5>

            <ul id="configurate">
              <HandleComponents id={isSelected} />
            </ul>
          </div>

          <Buttons id={isSelected} />
        </Body>
        <Overview>
          <img src={githubAvatar || ProfileImage} alt="ELIASALLEX - PROFILE" />
        </Overview>

        <TokenBox className={!desactived && "desactived"}>
          <input
            type="text"
            name="clipboard"
            id="clipboard"
            defaultValue={newToken}
            readOnly
          />
        </TokenBox>
      </Main>
    </Container>
  );
};

export default Settings;
