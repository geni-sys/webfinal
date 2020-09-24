import React, { useState, useCallback, useEffect } from "react";
import { useCookies } from "react-cookie";
import { FiActivity, FiAirplay, FiStar, FiCheck } from "react-icons/fi";
import api from "../../services/api";
// COMPONENTS
import Header from "../../components/Header";
import IssueList from "../../components/IssueList";

// STYLES STATIC
import {
  Container,
  Aside,
  Article,
  Banner,
  Main,
  Playlist,
  Icone,
} from "./styles";
import PlayingImg from "../../assets/playing.png";

const Explore = () => {
  const [theme] = useState(() => localStorage.getItem("theme") || "light");
  const [data, setData] = useState([]);

  const [cookies] = useCookies();
  const { token } = cookies;

  const handleRequest = useCallback(async () => {
    try {
      const response = await api
        .get("/playlists", {
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

      setData(response.data.lists);
    } catch (err) {
      alert(err.message);
    }
  }, [token]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  function dataAtualFormatada(stamps) {
    const msec = new Date(String(stamps));
    const hour = msec.getHours();
    const sec = msec.getHours();
    const hourF = hour.length === 1 ? "0" + hour : hour;
    const secF = hour.length === 1 ? "0" + sec : sec;

    const date = hourF + ":" + msec.getMinutes() + ":" + secF;

    return date;
  }

  function fomartDate(stamps) {
    var data = new Date(stamps),
      dia = data.getDate().toString(),
      diaF = dia.length === 1 ? "0" + dia : dia,
      mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = mes.length === 1 ? "0" + mes : mes,
      anoF = data.getFullYear();

    return dataAtualFormatada(stamps) + " em " + diaF + "/" + mesF + "/" + anoF;
  }

  return (
    <Container mode={theme}>
      <Header />

      <Main mode={theme}>
        <Banner mode={theme}>
          <Icone src={PlayingImg} alt="playing" draggable={false} />

          <h1>
            Todos os conteúdos para levar a sua carreira para o outro nível.
          </h1>
        </Banner>

        <div id="contents">
          <Aside mode={theme}>
            <h1>Artigos</h1>

            <IssueList mode={theme} withoutFilter={true} />
          </Aside>

          <Article mode={theme}>
            <h1>Listas</h1>

            <Playlist mode={theme}>
              {!(data.length === 0) ? (
                data.map((list) => (
                  <li key={list.id}>
                    <div id="starred">
                      <FiActivity />
                      <span>Baseado nos artigos definidos na plataforma.</span>
                    </div>

                    <div id="list">
                      <div id="unik">
                        <FiAirplay />
                        <p>
                          <a href={`/users/${String(list.user.email).trim()}`}>
                            {list.user.name}
                          </a>{" "}
                          /{" "}
                          <strong>
                            <a href={`/playlists?watch=${list.id}`}>
                              {list.name}
                            </a>
                          </strong>
                        </p>
                      </div>

                      <div id="side">
                        <button>
                          {true ? <FiCheck /> : <FiStar />}
                          {true ? "Estrelas" : "Marcar"}
                        </button>
                        <span>{list.stars}</span>
                      </div>
                    </div>

                    <div id="stamps">
                      <span>
                        Última atualização {fomartDate(list.updatedAt)}
                      </span>
                      <br />
                      {/* <span>*</span> */}
                    </div>
                  </li>
                ))
              ) : (
                <h1>SEM LISTAS</h1>
              )}
            </Playlist>
          </Article>
        </div>
      </Main>
    </Container>
  );
};

export default Explore;
