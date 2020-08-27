import React, { useState , useCallback, useEffect} from "react";
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
  const [userData, setUserDatas] = useState({});
  const [user_email] = useState(() => String(localStorage.getItem('email')) || "");
  const [githubAvatar] = useState(
    () => localStorage.getItem("github_avatar") || null
  );
  const [isSelected, setIsSelected] = useState(0);
  const [cookies] = useCookies()

  const { token } = cookies;
  const handleRequest = useCallback(async () => {

    try {
      const response = await api
        .get(`/users_/${user_email}`, {
          headers: { Authorization: String(token) },
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

        console.log(response.data);
        console.log(response.data.questions[0].tool);
      return setUserDatas(response.data);
    } catch (err) {
      console.log(err.message);
      return alert(err.message);
    }
  }, [token, user_email])

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

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
          <span id="badge-overview">#LEARNING</span>

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
            <strong>{userData.name}</strong>
          </div>
          <button onClick={handleNavigateToSetting}>Editar Usuário</button>

          <div id="about-user-overview">
            <div id="about-over">
              <h5>Sobre</h5>
              <p>Programador das tecnologias em volta da linguagem JS</p>
            </div>

            <div id="about-over">
              <h5>Descrição</h5>
              <p>{userData.name}</p>
              <p>{userData.name}</p>
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
