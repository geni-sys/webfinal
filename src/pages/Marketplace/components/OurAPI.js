import React, { useState } from "react";
import { useCookies } from "react-cookie";
import api from "../../../services/api";
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
            A API da plataforma serve para poder acessar seus dados de autras
            aplicações. A maioria dos pontos de acesso so são permitidos em
            rotas do tipo *.get* pela segurança dos dados. Todos os pontos de
            acesso necessitam de um{" "}
            <a href="/settings" target="_blank" rel="noopener noreferrer">
              Token
            </a>{" "}
            para ser liberado o acesso a API.
          </span>
        </li>
      </Points>

      <h3>Pontos de acesso</h3>
      <Access>
        <li>
          <p>Pegar dados de todos os usuário da plataforma</p>
          <code>api.get('/users')</code>
        </li>

        <li>
          <p>Pegar dados de um determinado usuário</p>
          <code>api.get('/users_/:user_email')</code>
        </li>

        <li>
          <p>Alterar a senha (apenas com token e TwoFactor definidos)</p>
          <code>api.put('/users/:user_id/password/update')</code>
        </li>

        <li>
          <p>Pegar todas as suas descrições</p>
          <code>api.get('/users/:user_logado/questions')</code>
        </li>

        <li>
          <p>Pegar todos os seus artigos</p>
          <code>api.get('/user/:owner_id/issues')</code>
        </li>

        <li>
          <p>Pegar todos os artigos destaques</p>
          <code>api.get('/issues_/featureds')</code>
        </li>

        <li>
          <p>Pega um único artigo</p>
          <code>api.get('/issues/:issue_id')</code>
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
            Em cada issue ao compartilhar é possível criar anotações que vão ser
            passadas para todos os usuários que receberem o compartilhamento.
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
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [stars, setStars] = useState(0);

  const [cookies] = useCookies();
  const { token, user_id } = cookies;

  async function handleFeedback(event) {
    event.preventDefault();

    try {
      const response = await api
        .post(
          `/feedbacks/${user_id}`,
          {
            title,
            message,
            stars,
          },
          {
            headers: {
              Authorization: String(token),
            },
          }
        )
        .catch((err) => {
          console.log(err.message);
          return;
        });

      if (response.data) {
        alert("Feedback enviado!");
      }
    } catch (err) {
      alert(err.message);
    }
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
          <Input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="body">Corpo da mensagem</label>
          <MessageBody
            type="text"
            name="body"
            id="body"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <Star>
          <FiStar fill="#bd93f9" />
          <input
            type="number"
            max="10"
            min="1"
            value={stars}
            onChange={(e) => setStars(e.target.value)}
          />
        </Star>

        <Give type="Submit">Enviar</Give>
      </Feed>
    </Main>
  );
};

export default OurAPI;
