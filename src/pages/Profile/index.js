import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// COMPONENTS
import { FiUser } from "react-icons/fi";
import Header from "../../components/Header";
import { Default, Lists, Markeds } from "./components";
// STYLUS | STATIC
import { Container, Main, Aside, Article, Top, Bottom, Points } from "./styles";
import ProfileImage from "../../assets/github-icon.png";

const Profile = () => {
  const [userData] = useState(
    () => JSON.parse(localStorage.getItem("user_description")) || {}
  );
  const [githubAvatar] = useState(
    () => localStorage.getItem("github_avatar") || null
  );
  const [isSelected, setIsSelected] = useState(0);

  const history = useHistory();

  function HandleComponents({ id }) {
    if (parseInt(id) === 1) {
      return <Lists />;
    }
    if (parseInt(id) === 2) {
      return <Markeds />;
    }

    return <Default />;
  }
  function handleNavigateToSetting() {
    history.push("/settings");
  }
  // "https://github.com/eliasallex" + ".png"

  return (
    <Container className="profile">
      <Header />
      <Main>
        <Aside>
          <span id="badge-overview">#{userData[0].use_case}</span>

          <img
            id="user-img-over"
            src={githubAvatar || ProfileImage}
            alt="Foto de perfil"
            draggable={false}
          />
          <div id="user-over">
            <span>
              <FiUser />
            </span>
            <strong>{userData[0].name}</strong>
          </div>
          <button onClick={handleNavigateToSetting}>Editar Usuário</button>

          <div id="about-user-overview">
            <div id="about-over">
              <h5>Sobre</h5>
              <p>{userData[0].interests}</p>
            </div>

            <div id="about-over">
              <h5>Descrição</h5>
              <p>{userData[0].tool}</p>
              <p>Experiência: {userData[0].experience}</p>
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
              Marcados
            </li>
            <li
              onClick={() => setIsSelected(2)}
              className={isSelected === 2 ? "selected" : ""}
            >
              Usuários
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
