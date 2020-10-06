import React, { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import api from "../../services/api";
// COMPONENTS
import { FiUser } from "react-icons/fi";
import Header from "../../components/Header";
import { Default, Lists, Markeds } from "./components";
// STYLUS | STATIC
import { Container, Main, Aside, Article, Top, Bottom, Points } from "./styles";
import ProfileImage from "../../assets/github-icon.png";

const Profile = () => {
  const [Scores, setScores] = useState([]);
  const [username] = useState(() => localStorage.getItem("name") || "Perfil");
  const [userData] = useState(
    () => JSON.parse(localStorage.getItem("user_description")) || {}
  );
  const [githubAvatar] = useState(
    () => localStorage.getItem("github_avatar") || null
  );
  const [isSelected, setIsSelected] = useState(0);
  const [theme] = useState(() => localStorage.getItem("theme") || "light");

  const history = useHistory();
  const [cookies] = useCookies();
  const { user_id, token } = cookies;

  function HandleComponents({ id }) {
    if (parseInt(id) === 1) {
      return <Lists mode={theme} />;
    }
    if (parseInt(id) === 2) {
      return <Markeds mode={theme} />;
    }

    return <Default mode={theme} />;
  }
  function handleNavigateToSetting() {
    history.push("/settings");
  }
  const getScores = useCallback(async () => {
    try {
      const response = await api
        .get(`/scores/${user_id}`, {
          headers: { Authorization: token },
        })
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            alert(error.response.data.error);
            console.log(error.response.status);
            return;
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });

      setScores(response.data);
    } catch (err) {
      alert(err.message);
    }
  }, [token, user_id]);
  // "https://github.com/eliasallex" + ".png"

  useEffect(() => {
    document.title = username;
    getScores();
  }, [getScores, username]);

  return (
    <Container mode={theme} className="profile">
      <Header />
      <Main mode={theme}>
        <Aside mode={theme}>
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

        <Article mode={theme}>
          <Top mode={theme}>
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

          <Bottom id="let" mode={theme}>
            <span>Fixado</span>

            <ul id="listeds">
              <HandleComponents id={isSelected} />
            </ul>

            {Scores.map((score) => (
              <Points
                key={score.id}
                one={score.issues_createds}
                two={score.lists_createds}
                three={score.anotations}
                mode={theme}
              >
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
            ))}
          </Bottom>
        </Article>
      </Main>
    </Container>
  );
};

export default Profile;
