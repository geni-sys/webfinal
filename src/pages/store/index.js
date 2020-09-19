import React, { useState } from "react";
import { FiActivity, FiAirplay, FiStar, FiCheck } from "react-icons/fi";

import Header from "../../components/Header";
import IssueList from "../../components/IssueList";

// STYLES STATIC
import { Container, Aside, Article, Main, Playlist } from "./styles";

const Explore = () => {
  const [theme] = useState(() => localStorage.getItem("theme") || "light");

  return (
    <Container mode={theme}>
      <Header />

      <Main mode={theme}>
        <Aside mode={theme}>
          <h1>Artigos da plataforma sem filtro, mescla todas as categorias</h1>

          <IssueList mode={theme} withoutFilter={true} />
        </Aside>

        <Article mode={theme}>
          <h1>Listas da plataforma sem filtro, mescla todas as categorias</h1>

          <Playlist mode={theme}>
            <li>
              <div id="starred">
                <FiActivity />
                <span>Baseado nas tags mais buscadas.</span>
              </div>

              <div id="list">
                <div id="unik">
                  <FiAirplay />
                  <p>
                    <a href="{`/users/${String(list.id).trim()}`}">
                      3lias-allex
                    </a>{" "}
                    /{" "}
                    <strong>
                      <a href="{`/share/${list.id}`}">NodeJS with Crypto</a>
                    </strong>
                  </p>
                </div>

                <div id="side">
                  <button>
                    {true ? <FiCheck /> : <FiStar />}
                    {true ? "Estrelas" : "Marcar"}
                  </button>
                  <span>2435</span>
                </div>
              </div>

              <div id="stamps">
                <span>Última atualização 3 min ago</span>
                <br />
                <span>* CSS</span>
              </div>
            </li>

            <li>
              <div id="starred">
                <FiActivity />
                <span>Baseado nas tags mais buscadas.</span>
              </div>

              <div id="list">
                <div id="unik">
                  <FiAirplay />
                  <p>
                    <a href="{`/users/${String(list.id).trim()}`}">
                      3lias-allex
                    </a>{" "}
                    /{" "}
                    <strong>
                      <a href="{`/share/${list.id}`}">NodeJS with Crypto</a>
                    </strong>
                  </p>
                </div>

                <div id="side">
                  <button>
                    {true ? <FiCheck /> : <FiStar />}
                    {true ? "Marcado" : "Marcar"}
                  </button>
                  <span>2435</span>
                </div>
              </div>

              <div id="stamps">
                <span>Última atualização 3 min ago</span>
                <br />
                <span>* CSS</span>
              </div>
            </li>
          </Playlist>
        </Article>
      </Main>
    </Container>
  );
};

export default Explore;
