import React from "react";
// components | STATIC
import { FiStar } from "react-icons/fi";
import {
  Main,
  Points,
  Access,
  Feed,
  Give,
  Input,
  MessageBody,
  Star,
} from "./styles";

function OurAPI() {
  return (
    <main>
      <h2>Como a API da plataforma funciona</h2>
      <Points>
        <li>
          <span>
            An application programming interface is a computing interface
            defines interactions between multiple software intermediaries. It
            defines the kinds of calls or requests that can be made, how to make
            them, the data formats that should be used, the conventions to
            follow, etc.{" "}
          </span>
        </li>
      </Points>

      <h3>Pontos de acesso</h3>
      <Access>
        <li>
          <p>Pegar dados de um determinado usuário</p>
          <code>api.get('/users/:user_email')</code>
        </li>

        <li>
          <p>Pegar dados de um determinado usuário</p>
          <code>api.get('/users/:user_email')</code>
        </li>

        <li>
          <p>Pegar dados de um determinado usuário</p>
          <code>api.get('/users/:user_email')</code>
        </li>

        <li>
          <p>Pegar dados de um determinado usuário</p>
          <code>api.get('/users/:user_email')</code>
        </li>

        <li>
          <p>Pegar dados de um determinado usuário</p>
          <code>api.get('/users/:user_email')</code>
        </li>

        <li>
          <p>Pegar dados de um determinado usuário</p>
          <code>api.get('/users/:user_email')</code>
        </li>

        <li>
          <p>Pegar dados de um determinado usuário</p>
          <code>api.get('/users/:user_email')</code>
        </li>
      </Access>
    </main>
  );
}

export const Extention = () => {
  return (
    <Main>
      <h2>Como o chat de compartilhamento de lista funciona?</h2>
      <Points>
        <li>
          <span>
            An application programming interface is a computing interface
            defines interactions between multiple software intermediaries. It
            defines the kinds of calls or requests that can be made, how to make
            them, the data formats that should be used, the conventions to
            follow, etc.
          </span>
        </li>
      </Points>

      <h3 id="unk">Pontos das contribuições</h3>
      <span id="points">
        Os pontos são calculados a cada criação e recriados a cada 7 dias.
      </span>
      <Access>
        <li>
          <p>1ª Vermelho / top</p>
          <code>Aumenta ao decorrer de novos artigos</code>
        </li>

        <li>
          <p>2ª Amarelo / middle</p>
          <code>Aumenta no compartilhamento de lista</code>
        </li>

        <li>
          <p>3ª azul / bottom</p>
          <code>Aumenta na criação de novas listas</code>
        </li>
      </Access>
    </Main>
  );
};

export const Feedback = () => {
  async function handleFeedback(event) {
    event.preventDefault();
  }

  return (
    <Main>
      <p>
        Feedback nos ajuda a saber sobre a sua experiência na plataforma e como
        nós podemos melhorar a forma como o nosso conteúdo é entrege aos
        usuários.
      </p>

      <h4>Deixe seu comentário sobre oque você achou da plataforma!</h4>

      <Feed onSubmit={(event) => handleFeedback(event)}>
        <div style={{ marginTop: "20px" }}>
          <label htmlFor="title">TÍtulo da mensagem</label>
          <Input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="body">Corpo da mensagem</label>
          <MessageBody type="text" name="body" id="body" />
        </div>

        <Star>
          <FiStar fill="#bd93f9" />
          <input type="number" max="10" min="1" />
        </Star>

        <Give type="Submit">Enviar</Give>
      </Feed>
    </Main>
  );
};

export default OurAPI;
