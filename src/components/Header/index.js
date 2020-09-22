import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { FiBell, FiMinimize2 } from "react-icons/fi";
import Miniature from "../Miniature";
// STYLUS | STATICS
import {
  Container,
  Screen,
  Navegation,
  Session,
  InputSearch,
  List,
  OverClick,
  LogOut,
  Close,
  Themer,
} from "./styles";

const Header = () => {
  const [userName] = useState(() => {
    return localStorage.getItem("name") || "reload";
  });
  const [query, setQuery] = useState("");
  const [modal, setModal] = useState(true);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const history = useHistory();
  const [, , removeCookie] = useCookies();

  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light");
      window.location.reload(true);
      return localStorage.setItem("theme", "light");
    }

    setTheme("dark");
    window.location.reload(true);
    return localStorage.setItem("theme", "dark");
  }

  function handleSignOut() {
    try {
      removeCookie("token");
      removeCookie("user_id");
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.removeItem("github_avatar");
      localStorage.removeItem("questions_status");
      localStorage.removeItem("user_description");

      history.push("/login");
    } catch (err) {
      console.log(err.message);
      alert("Antes de terminar a sessão conclua os campos necessários");
    }
  }
  function handleSearch(e, query_search) {
    e.preventDefault();

    if (!query_search) {
      alert("Insira uma pesquisa válida");
      return history.goBack();
    }
    return history.push(`/search?query_search=${query_search}`);
  }

  return (
    <Container id="header">
      <Screen id="screen">
        <div></div>
        <div></div>
        <div></div>
      </Screen>

      <div id="comun">
        <a href="/">
          <h1>GENESIS</h1>
        </a>

        <Navegation className="desactived-header">
          <div style={{ position: "relative" }}>
            <form
              // action={`/search?query_search=${query}`}
              onSubmit={(e) => handleSearch(e, query)}
            >
              <InputSearch
                placeholder="Pesquisar ou ir para?"
                type="text"
                name="search"
                id="search-bar"
                autocapitalize="none"
                autocomplete="off"
                autocorrect="off"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {/* <Search onClick={() => handleSearch(query)}>GO</Search> */}
            </form>
          </div>

          <List>
            <li>
              <a href="/marketplace">Marketplace</a>
            </li>
            <li>
              <a href="/overview">Overview</a>
            </li>
            <li>
              <a href="/explore">Explore</a>
            </li>
          </List>
        </Navegation>
      </div>

      <Session id="session">
        <Themer
          onChange={toggleTheme}
          checked={theme === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={9}
          width={38}
          handleDiameter={18}
          offColor={"#DEDEDE"}
          onColor={"#121212"}
        />

        <a id="top-level" href="/notifications" className="desactived-header">
          <FiBell />
        </a>

        <div id="fi-usr" onClick={() => setModal(!modal)}>
          <Miniature width={"30px"} height={"30px"} desc="Usuário" />
        </div>

        <OverClick className={modal && "desaper"} id="over-modal">
          <Close id="close" onClick={() => setModal(!modal)}>
            <FiMinimize2 />
          </Close>

          <span>
            Logado como <strong>{userName}</strong>
          </span>

          <div>
            <a href="/new/issue">Criar novo artigo</a>
            <a href="/profile">Ver seu perfil</a>
            <a href="/overview?newList=true">Overview - nova lista</a>
            <a href="/settings">Definições</a>
            <a href="/">Genesis</a>
          </div>

          <LogOut onClick={handleSignOut}>Sair</LogOut>
        </OverClick>
      </Session>
    </Container>
  );
};

export default Header;
