import React, { useState } from "react";
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
  const [modal, setModal] = useState(true);

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
            />
            <Search>GO</Search>
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
            <a href="/">Seu perfil</a>
            <a href="/">Atividades</a>
            <a href="/">Artigos</a>
            <a href="/">Desafios</a>
          </div>
          <LogOut>Sign out</LogOut>
        </OverClick>
      </Session>
    </Container>
  );
};

export default Header;
