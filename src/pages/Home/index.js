import React from "react";
import { FiActivity, FiPlus, FiUser } from "react-icons/fi";
// COMPONENTS
import IssueList from "../../components/IssueList";
import Header from "../../components/Header";
import Article from "../../components/Article";
// STYLUS
import {
  Container,
  Aside,
  Main,
  TopInformation,
  Entrada,
  List,
  Footer,
} from "./styles";

const Home = () => {
  return (
    <Container id="App">
      <Header />

      <Aside>
        <TopInformation id="top-aside">
          <div id="user-aside">
            <FiUser />
            <strong>eliasallex</strong>
          </div>

          <div id="aside-repo">
            <div>
              <p>Activits</p>
              <button>
                <FiPlus /> New
              </button>
            </div>

            <div>
              <Entrada
                placeholder="Encontrar uma atividade"
                type="search"
                name="search-repo"
                id="search-repo"
              />
            </div>
          </div>
        </TopInformation>

        <div id="navigation-aside">
          <List id="aside-items-group">
            <li>
              <a href="/" rel="noopener noreferrer" target="_BLANK">
                <span className="items-icon">
                  <FiActivity color="#555" />
                </span>
                <span>eliasallex/fetures</span>
              </a>
            </li>

            <li>
              <a href="/" rel="noopener noreferrer" target="_BLANK">
                <span className="items-icon">
                  <FiActivity color="#555" />
                </span>
                <span>eliasallex/nodeJS</span>
              </a>
            </li>

            <li>
              <a href="/" rel="noopener noreferrer" target="_BLANK">
                <span className="items-icon">
                  <FiActivity color="#555" />
                </span>
                <span>create/genesis</span>
              </a>
            </li>

            <li>
              <a href="/" rel="noopener noreferrer" target="_BLANK">
                <span className="items-icon">
                  <FiActivity color="#555" />
                </span>
                <span>@genesis-sys/new</span>
              </a>
            </li>

            <li>
              <a href="/" rel="noopener noreferrer" target="_BLANK">
                <span className="items-icon">
                  <FiActivity color="#555" />
                </span>
                <span>github/marketplace</span>
              </a>
            </li>

            <li>
              <a href="/" rel="noopener noreferrer" target="_BLANK">
                <span className="items-icon">
                  <FiActivity color="#555" />
                </span>
                <span>linkedin/elias-alexandre</span>
              </a>
            </li>
          </List>
        </div>

        <Footer id="footer">
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.github.com/eliasallex"
            >
              Creator: Elias garcia Alexandre
            </a>
          </p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.github.com/geni-sys"
            >
              &copy;GENESIS SYSTEMS
            </a>
          </p>
        </Footer>
      </Aside>

      <Main>
        <IssueList />
      </Main>
      <Article />
    </Container>
  );
};

export default Home;
