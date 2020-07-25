import React, { useState } from "react";
// COMPONENTS
import { FiUser } from "react-icons/fi";
import Header from "../../components/Header";
import { Default, Lists, Markeds } from "./components";
// STYLUS | STATIC
import { Container, Main, Aside, Article, Top, Bottom, Points } from "./styles";
import ProfileImage from "../../assets/github-icon.png";

const Profile = () => {
  const [isSelected, setIsSelected] = useState(0);

  function HandleComponents({ id }) {
    if (parseInt(id) === 1) {
      return <Lists />;
    }
    if (parseInt(id) === 2) {
      return <Markeds />;
    }

    return <Default />;
  }

  return (
    <Container className="profile">
      <Header />

      <Main>
        <Aside>
          <span id="badge-overview">#LEARNING</span>

          <img id="user-img-over" src={ProfileImage} alt="Foto de perfil" />
          <div id="user-over">
            <span>
              <FiUser />
            </span>
            <strong>Elias alexandre</strong>
          </div>
          <button>Editar Usuário</button>

          <div id="about-user-overview">
            <div id="about-over">
              <h5>Sobre</h5>
              <p>Programador das tecnologias em volta da linguagem JS</p>
            </div>

            <div id="about-over">
              <h5>Descrição</h5>
              <p>Programador</p>
              <p>Inicinate</p>
            </div>
          </div>
        </Aside>

        <Article>
          <Top>
            <li
              onClick={() => setIsSelected(0)}
              className={isSelected === 0 ? "selected" : ""}
            >
              Overview
            </li>
            <li
              onClick={() => setIsSelected(1)}
              className={isSelected === 1 ? "selected" : ""}
            >
              Listas
            </li>
            <li
              onClick={() => setIsSelected(2)}
              className={isSelected === 2 ? "selected" : ""}
            >
              Marcados
            </li>
          </Top>

          <Bottom id="let">
            <span>Fixado</span>

            <ul id="listeds">
              <HandleComponents id={isSelected} />
            </ul>

            <Points>
              <h5>Suas contribuições</h5>
              <ul id="burbble">
                <li id="first">
                  <p></p>
                </li>
                <li id="second">
                  <p></p>
                </li>
                <li id="three">
                  <p></p>
                </li>
              </ul>
            </Points>
          </Bottom>
        </Article>
      </Main>
    </Container>
  );
};

export default Profile;
