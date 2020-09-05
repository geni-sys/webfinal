import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { FiUser, FiBell, FiMinimize2 } from "react-icons/fi";
// STYLUS | STATICS
import {
  Container,
  Screen,
  Navegation,
  Session,
  InputSearch,
  Search,
  List,
  OverClick,
  LogOut,
  Close,
} from "./styles";

const Header = () => {
  const [userName] = useState(() => {
    return localStorage.getItem("name") || "reload";
  });
  const [query, setQuery] = useState("");
  const [modal, setModal] = useState(true);

  const history = useHistory();
  const [, , removeCookie] = useCookies();

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
  function handleSearch(query_search) {
    if (!query_search) {
      alert("Insira uma pesquisa válida");
      return history.goBack();
    }
    return history.push(`/search/${query_search}`);
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
            <InputSearch
              placeholder="Search or jump to"
              type="text"
              name="search"
              id="search-bar"
              autocapitalize="none"
              autocomplete="off"
              autocorrect="off"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Search onClick={() => handleSearch(query)}>GO</Search>
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
        <a id="top-level" href="/notifications" className="desactived-header">
          <FiBell />
        </a>

        <div id="fi-usr" onClick={() => setModal(!modal)}>
          <FiUser />
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
