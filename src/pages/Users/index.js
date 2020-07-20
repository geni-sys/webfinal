import React, { useState } from "react";
import { FiUser, FiBox } from "react-icons/fi";
// COMPONENTS
import Header from "../../components/Header";
// STYLUS | STATIC
import { Container, Main, Aside, Article, Top, Bottom, Points } from "./styles";
import ProfileImage from "../../assets/github-icon.png";

function Users() {
  const [isSelected, setIsSelected] = useState(0);

  const Default = () => {
    return (
      <>
        <li id="pinned">
          <div id="tper">
            <span id="left">
              <FiBox />
            </span>
            <a href="/user/learning/1">Dotnet Orientation</a>
          </div>

          <p>Create a basic contextmenu with html, css and JS</p>

          <div id="btom">
            <span id="language"></span>
            <span>JavaScript</span>
          </div>
        </li>

        <li id="pinned">
          <div id="tper">
            <span id="left">
              <FiBox />
            </span>
            <a href="/user/learning/1">Dotnet Orientation</a>
          </div>

          <p>Create a basic contextmenu with html, css and JS</p>

          <div id="btom">
            <span id="language"></span>
            <span>JavaScript</span>
          </div>
        </li>

        <li id="pinned">
          <div id="tper">
            <span id="left">
              <FiBox />
            </span>
            <a href="/user/learning/1">Dotnet Orientation</a>
          </div>

          <p>Create a basic contextmenu with html, css and JS</p>

          <div id="btom">
            <span id="language"></span>
            <span>JavaScript</span>
          </div>
        </li>

        <li id="pinned">
          <div id="tper">
            <span id="left">
              <FiBox />
            </span>
            <a href="/user/learning/1">Dotnet Orientation</a>
          </div>

          <p>Create a basic contextmenu with html, css and JS</p>

          <div id="btom">
            <span id="language"></span>
            <span>JavaScript</span>
          </div>
        </li>
      </>
    );
  };
  const Lists = () => {
    return (
      <>
        <li id="pinned">
          <div id="tper">
            <span id="left">
              <FiBox />
            </span>
            <a href="/user/learning/1">Dotnet Orientation</a>
          </div>

          <p>Create a basic contextmenu with html, css and JS</p>

          <div id="btom">
            <span id="language"></span>
            <span>JavaScript</span>
          </div>
        </li>
      </>
    );
  };
  const Markeds = () => {
    return (
      <>
        <li id="pinned">
          <div id="tper">
            <span id="left">
              <FiBox />
            </span>
            <a href="/user/learning/1">Dotnet Orientation</a>
          </div>

          <p>Create a basic contextmenu with html, css and JS</p>

          <div id="btom">
            <span id="language"></span>
            <span>JavaScript</span>
          </div>
        </li>

        <li id="pinned">
          <div id="tper">
            <span id="left">
              <FiBox />
            </span>
            <a href="/user/learning/1">Dotnet Orientation</a>
          </div>

          <p>Create a basic contextmenu with html, css and JS</p>

          <div id="btom">
            <span id="language"></span>
            <span>JavaScript</span>
          </div>
        </li>
      </>
    );
  };

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
          <button>Marcar Usuário</button>

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
              <h5>Atividate das contribuições</h5>
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
}

export default Users;
