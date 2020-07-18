import React from "react";
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
} from "./styles";
import ProfileImage from "../../assets/github-icon.png";

const Settings = () => {
  function handleComponents() {
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
      </>
    );
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
            <li>Profile</li>
            <li>Account</li>
            <li>Account security</li>
            <li>Emails</li>
            <li>Repositories</li>
            <li>Salved reply</li>
          </ul>
        </Aside>

        <Body>
          <div>
            <h5>Public profile</h5>

            <ul id="configurate">
              <li>
                <label htmlFor="input">Nome</label>
                <Input id="input" placeholder="Eliasallex" />
                <label htmlFor="input" id="description">
                  Seu nome pode aparecer em torno do GitHub onde você contribui
                  ou é mencionado.
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
                  Todos os campos nesta página são opcionais e podem ser
                  excluídos a qualquer momento.
                </label>
              </li>
            </ul>
          </div>

          <Update>Update profile</Update>
        </Body>
        <Overview>
          <img src={ProfileImage} alt="ELIASALLEX - PROFILE" />
        </Overview>
      </Main>
    </Container>
  );
};

export default Settings;
