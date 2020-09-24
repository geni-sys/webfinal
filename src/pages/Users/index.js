import React, { useState, useCallback, useEffect } from "react";
import { useCookies } from "react-cookie";
import api from "../../services/api";
// COMPONENTS
import { FiUser } from "react-icons/fi";
import Header from "../../components/Header";
import Miniature from "../../components/Miniature";
import { Default, Lists, Markeds } from "./components";
// STYLUS | STATIC
import { Container, Main, Aside, Article, Top, Bottom, Points } from "./styles";

function Users({ match }) {
  const [Scores, setScores] = useState([]);
  const [data, setData] = useState([]);
  const [isSelected, setIsSelected] = useState(0);
  const [theme] = useState(() => localStorage.getItem("theme") || "light");

  const { friend_email } = match.params;

  function HandleComponents({ id }) {
    if (parseInt(id) === 1) {
      return <Lists mode={theme} user={3} />;
    }
    if (parseInt(id) === 2) {
      return <Markeds mode={theme} user={3} />;
    }

    return <Default mode={theme} user={3} />;
  }

  // GLOBAL VARs
  const [cookies] = useCookies();
  const { token, user_id } = cookies;

  const handleRequest = useCallback(async () => {
    try {
      const response = await api
        .get(`/users_/${friend_email}?eu=${user_id}`, {
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

      setData([response.data]);
    } catch (err) {
      alert(err.message);
    }
  }, [friend_email, token, user_id]);
  const getScores = useCallback(async () => {
    try {
      const response = await api
        .get(`/scores/0?email=${friend_email}`, {
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
  }, [friend_email, token]);

  useEffect(() => {
    handleRequest();
    getScores();
  }, [getScores, handleRequest]);

  async function markUser(id) {
    try {
      const response = await api
        .post(
          `/user/${user_id}/mark/users/${id}`,
          {},
          {
            headers: { Authorization: String(token) },
          }
        )
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

      console.log(response);
      if (response.data) {
        alert("Usuario marcada");
      }
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <Container mode={theme} className="profile">
      <Header />

      <Main mode={theme}>
        {data.map((usr) => (
          <Aside mode={theme} key={usr.id}>
            <span id="badge-overview">#{usr.questions[0].use_case}</span>
            <Miniature source={usr.github + ".png"} desc="Foto de perfil" />
            <div id="user-over">
              <span>
                <FiUser />
              </span>
              <strong>{usr.name}</strong>
            </div>
            <button
              disabled={usr.isFriend && true}
              type="button"
              onClick={() => markUser(usr.id)}
            >
              {usr.isFriend ? "Usuário marcado" : "Marcar Usuário"}
            </button>

            <div id="about-user-overview">
              <div id="about-over">
                <h5>Sobre</h5>
                <p>{usr.questions[0].interests}</p>
              </div>

              <div id="about-over">
                <h5>Descrição</h5>
                <p>{usr.questions[0].tool}</p>
                <p>Experiêcia: {usr.questions[0].experience}</p>
              </div>
            </div>
          </Aside>
        ))}

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
              Marcados
            </li>
          </Top>

          <Bottom mode={theme} id="let">
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
            ))}
          </Bottom>
        </Article>
      </Main>
    </Container>
  );
}

export default Users;
