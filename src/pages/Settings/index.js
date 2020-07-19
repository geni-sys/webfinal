import React, { useState } from "react";
// COMPONENTS
import Header from "../../components/Header";
// STYLUS | STATIC
import {
  Container,
  Main,
  Aside,
  Body,
  Input,
  Description,
  Update,
  Overview,
  MoreInfo,
} from "./styles";
import ProfileImage from "../../assets/github-icon.png";

const Settings = () => {
  const [isSelected, setIsSelected] = useState(1);

  function HandleComponents({ id }) {
    if (parseInt(id) === 1) {
      return (
        <>
          <li>
            <label htmlFor="input">Nome</label>
            <Input id="input" placeholder="Eliasallex" />
            <label htmlFor="input" id="description">
              Seu nome pode aparecer em torno do GitHub onde você contribui ou é
              mencionado.
            </label>
          </li>

          <li>
            <label htmlFor="input">Bio</label>
            <Description
              id="input"
              placeholder="Programmer. Focused on technologies around the JS language."
            />
            <label htmlFor="input" id="description">
              como voce se descreve em torno da sua carreira?.
            </label>
          </li>

          <li>
            <label htmlFor="input">Github</label>
            <Input id="input" placeholder="seu Github URL" />
            <label htmlFor="input" id="description">
              Todos os campos nesta página são opcionais e podem ser excluídos a
              qualquer momento.
            </label>
          </li>
        </>
      );
    }
    if (parseInt(id) === 4) {
      return (
        <>
          <MoreInfo>
            <strong>Como as notificações funcionam</strong>
            <p>
              Por padrão, a GS alerta você sempre que um artigo, um usuário ou
              uma extensão quer enviar notificações. Essa configuração pode ser
              modificada a qualquer momento. Se você estiver no modo de
              navegação desabilitada, não receberá notificações.
            </p>

            <strong>Seu E-mail</strong>
            <p>
              O teu email é um ID único que identifica o seu perfil, com ele
              voçê faz login na GS (WEB | MOBILE), é muito importante manter ele
              e a senha sempre atualizados.
            </p>
          </MoreInfo>
        </>
      );
    }
    if (parseInt(id) === 3) {
      return (
        <>
          <li>
            <label htmlFor="input">Senha antiga</label>
            <Input type="password" id="input" />
          </li>

          <li>
            <label htmlFor="input">Nova senha</label>
            <Input type="password" id="input" />
          </li>

          <li>
            <label htmlFor="input">Confirmar nova senha</label>
            <Input type="password" id="input" />

            <label htmlFor="input" id="description">
              Senhas fortes ajudam a manter o seu perfil seguro!
            </label>
          </li>
        </>
      );
    }
    if (parseInt(id) === 5) {
      return (
        <>
          <MoreInfo>
            <strong>Artigos</strong>
            <p>
              Os artigos são a base do aplicativo, com eles são passados
              conhecimento através de marcações de texto como *Markdown* que é
              uma formatação de código que é processada e traduzida para HTML.
              Conhecendo MARKDOWN você pode escrever artigos completos e úteis.
            </p>

            <strong>Playlists</strong>
            <p>
              Listas são conjuntos de artigos que você salva. Você só pode criar
              listas com os artigos que tenha salvo. você pode criar uma lista e
              compartilhar com um amigo para que ambos possam aprender juntos.
            </p>
          </MoreInfo>
        </>
      );
    }
  }
  function Buttons({ id, handleClick }) {
    if (id === 1) {
      return <Update onClick={handleClick}>Update profile</Update>;
    }
    if (id === 3) {
      return <Update onClick={handleClick}>Update password</Update>;
    }
    if (id === 4) {
      return <a href="/">HOME</a>;
    }
    if (id === 5) {
      return <Update>Começar</Update>;
    }
  }

  return (
    <Container>
      <Header />

      <Main>
        <Aside>
          <div id="personal">
            <span>+</span>
            <div>
              <span>eliasallex</span>
              <p>Configurações pessoal</p>
            </div>
          </div>

          <ul>
            <li
              onClick={() => setIsSelected(1)}
              className={isSelected === 1 ? "selected" : ""}
            >
              Profile
            </li>
            <li
              onClick={() => setIsSelected(3)}
              className={isSelected === 3 ? "selected" : ""}
            >
              Account security
            </li>
            <li
              onClick={() => setIsSelected(4)}
              className={isSelected === 4 ? "selected" : ""}
            >
              Mais informações
            </li>
            <li
              onClick={() => setIsSelected(5)}
              className={isSelected === 5 ? "selected" : ""}
            >
              Repositories
            </li>
          </ul>
        </Aside>

        <Body>
          <div>
            <h5>Public profile</h5>

            <ul id="configurate">
              <HandleComponents id={isSelected} />
            </ul>
          </div>

          <Buttons id={isSelected} />
        </Body>
        <Overview>
          <img src={ProfileImage} alt="ELIASALLEX - PROFILE" />
        </Overview>
      </Main>
    </Container>
  );
};

export default Settings;
