import React from "react";
import Header from "../../components/Header";

// STYLES STATIC
import { Container, Main, Aside, Article } from "./styles";

function store() {
  return (
    <Container>
      <Header />

      <Aside>
        <h1>Artigos da plataforma sem filtro, mescla todas as categorias</h1>

        <ul>
          <li></li>
        </ul>
      </Aside>

      <Article>
        <h1>Listas da plataforma sem filtro, mescla todas as categorias</h1>

        <ul>
          <li></li>
        </ul>
      </Article>
    </Container>
  );
}

export default store;
