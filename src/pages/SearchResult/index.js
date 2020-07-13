import React from "react";
import {
  FiAlertTriangle,
  FiTarget,
  FiGitBranch,
  FiShield,
} from "react-icons/fi";
// COMPONENS
import Header from "../../components/Header";
// STYLUS STATIC
import { Container, Aside, List, Main, Content } from "./styles";

const SearchResult = () => {
  return (
    <Container>
      <Header />

      <Main>
        <Aside>
          <List>
            <li id="clicked">
              <FiTarget color="#2ea44f" />
              <a href="/notifications?tab=1">All</a>
            </li>
            <li>
              <FiGitBranch color="#f9a839" />
              <a href="/notifications?tab=2">Mentioned</a>
            </li>
            <li>
              <FiShield color="#f84a4b" />
              <a href="/notifications?tab=3">Our team</a>
            </li>
          </List>
        </Aside>

        <Content>
          <ul>
            <a id="mentioned" href="/playlist">
              <span id="ilustry">
                <FiAlertTriangle />
              </span>
              <div id="nlw">
                <span>eliasallex/aplication-route-tabs</span>
                <p>
                  Potential security vulnerability found in the logkitty
                  dependency
                </p>
              </div>
            </a>

            <a href="/playlist" id="convided">
              <span id="ilustry">
                <FiAlertTriangle />
              </span>
              <div id="nlw">
                <span>eliasallex/aplication-route-tabs</span>
                <p>
                  Potential security vulnerability found in the logkitty
                  dependency
                </p>
              </div>
            </a>

            <a href="/playlist" id="mentioned">
              <span id="ilustry">
                <FiAlertTriangle />
              </span>
              <div id="nlw">
                <span>eliasallex/aplication-route-tabs</span>
                <p>
                  Potential security vulnerability found in the logkitty
                  dependency
                </p>
              </div>
            </a>

            <a href="/playlist" targer="_blannk" id="alert">
              <span id="ilustry">
                <FiAlertTriangle />
              </span>
              <div id="nlw">
                <span>eliasallex/aplication-route-tabs</span>
                <p>
                  Potential security vulnerability found in the logkitty
                  dependency
                </p>
              </div>
            </a>
          </ul>
        </Content>
      </Main>
    </Container>
  );
};

export default SearchResult;
