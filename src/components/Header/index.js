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
        <h1>GENESIS</h1>

        <Navegation className="desactived-header">
          <div style={{ position: "relative" }}>
            <InputSearch
              placeholder="Search or jump to"
              type="search"
              name="search"
              id="search-bar"
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
            Logado como <strong>eliasallex</strong>
          </span>
          <div>
            <a href="/profile">Seu perfil</a>
            <a href="/activity">Atividades</a>
            <a href="/marketplace">Artigos</a>
            <a href="/">Desafios</a>
          </div>
          <LogOut onClick={handleSignOut}>Sign out</LogOut>
        </OverClick>
      </Session>
    </Container>
  );
};

export default Header;
