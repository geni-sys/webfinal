import React from "react";
import { FiUser, FiBell } from "react-icons/fi";
// STYLUS | STATICS
import {
  Container,
  Screen,
  Navegation,
  Session,
  InputSearch,
  Search,
  List,
} from "./styles";

const Header = () => {
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
        <a href="/" className="desactived-header">
          <FiBell />
        </a>

        <div>
          <FiUser />
        </div>
      </Session>
    </Container>
  );
};

export default Header;
