import React, { useState, useCallback, useEffect } from "react";
import { useCookies } from "react-cookie";
import api from "../../services/api";
// COMPONENTS
import { FiActivity, FiAirplay, FiStar, FiCheck } from "react-icons/fi";
import Header from "../../components/Header";
// STYLUS | STATIC
import {
  Container,
  Main,
  Center,
  Playlist,
  CreateList,
  Modals,
  Lists,
  Top,
  ListElement,
  Checker,
  CreateTitle,
  AddIn,
} from "./styles";

function Modal({ mode }) {
  const [name, setName] = useState("");
  const [idNewList, setIdNewList] = useState("");
  const [data, setData] = useState([]);
  // const [markeds, setMarkeds] = useState([]);

  const [cookies] = useCookies();
  const { token, user_id } = cookies;

  const getIssuesMarkeds = useCallback(async () => {
    try {
      // const { token, user_id } = cookies;
      const response = await api
        .get(`/user/${user_id}/marked/issues`, {
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

      setData(response.data);
    } catch (err) {
      console.log(err.message);
      return alert(err.message);
    }
  }, [token, user_id]);

  useEffect(() => {
    getIssuesMarkeds();
  }, [getIssuesMarkeds]);

  // function HandleCheck({ checked }) {
  //   if (checked) {
  //     return <FiCheck />;
  //   }

  //   return <FiPlus />;
  // }
  async function addANewIssueInNewList(issue_id) {
    const response = await api.post(
      `/create/list/${idNewList}`,
      {
        issuesx: issue_id,
      },
      { headers: { Authorization: String(token) } }
    );

    if (response.data) alert("Added in new list");
  }
  async function serializeMarkeds(id, inBase) {
    const newArray = data.filter((item) => item.id !== id);
    await addANewIssueInNewList(inBase);

    setData(newArray);
  }
  async function createListName() {
    if (!name) {
      alert("Listas devem ter um nome");
      return;
    }

    try {
      const response = await api.post(
        `/users/${user_id}/create/playlist`,
        {
          name,
        },
        { headers: { Authorization: String(token) } }
      );

      if (response.data) {
        alert("Lista criada!");
        setIdNewList(response.data.id);
      }
    } catch (err) {
      console.log(err.message);
      alert(err.message);
    }
  }

  return (
    <>
      <Modals mode={mode} id="create">
        <Top mode={mode}>
          <input
            type="text"
            name="creation"
            id="creation"
            placeholder="Nome da nova lista"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CreateTitle type="submit" onClick={createListName}>
            <Checker /> Create
          </CreateTitle>
        </Top>

        <Lists mode={mode}>
          {data.length !== 0 ? (
            data.map((marked, index) => (
              <ListElement mode={mode} key={marked.id}>
                <span>{marked.issue.title}</span>
                <AddIn
                  disabled={!name ? true : false}
                  onClick={() => serializeMarkeds(marked.id, marked.issue_id)}
                >
                  <Checker /> adicionar
                </AddIn>
              </ListElement>
            ))
          ) : (
            <strong>
              Comece{" "}
              <a href="/explore" target="_blank" rel="noopener noreferrer">
                adicionando
              </a>{" "}
              artigos na sua lista de favoritos!
            </strong>
          )}
        </Lists>
      </Modals>
    </>
  );
}

function Overview() {
  const [data, setData] = useState([]);
  const [theme] = useState(() => localStorage.getItem("theme") || "light");
  const [isActived, setIsActived] = useState(false);

  const [cookies] = useCookies();

  const { token, user_id } = cookies;
  const getAllLists = useCallback(async () => {
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
      console.log(err.message);
      return alert(err.message);
    }
  }, [token]);

  useEffect(() => {
    getAllLists();
  }, [getAllLists]);

  async function handleMarkList(isStarry, list_id) {
    if (isStarry) {
      return null;
    }

    try {
      const response = await api
        .post(
          `/user/${user_id}/mark/playlists/${list_id}`,
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
      if (response.data.id) {
        window.location.reload(true);
      }
    } catch (err) {
      alert(err.message);
    }
  }

  function HandleChoosed({ state, mode }) {
    if (state) {
      return <Modal mode={theme} />;
    }

    return (
      <Playlist mode={theme}>
        {!(data.length === 0) ? (
          data.map((list) => (
            <li key={list.id}>
              <div id="starred">
                <FiActivity />
                <span>Baseado nas tags mais buscadas.</span>
              </div>

              <div id="list">
                <div id="unik">
                  <FiAirplay />
                  <p>
                    <a href={`/users/${String(list.id).trim()}`}>3lias-allex</a>{" "}
                    /{" "}
                    <strong>
                      <a href={`/share/${list.id}`}>{list.name}</a>
                    </strong>
                  </p>
                </div>

                <div id="side">
                  <button
                    onClick={() => {
                      handleMarkList(list.starry, list.id);
                    }}
                  >
                    {list.starry ? <FiCheck /> : <FiStar />}
                    {list.starry ? "Marcado" : "Marcar"}
                  </button>
                  <span>{list.stars}</span>
                </div>
              </div>

              <div id="stamps">
                <span>Última atualização 3 min ago</span>
                <br />
                <span>* CSS</span>
              </div>
            </li>
          ))
        ) : (
          <h1>SEM LISTAS</h1>
        )}
      </Playlist>
    );
  }

  return (
    <Container mode={theme}>
      <Header />

      <Main mode={theme}>
        <Center mode={theme}>
          <CreateList onClick={() => setIsActived(!isActived)}>
            Criar nova lista
          </CreateList>

          <HandleChoosed state={isActived} />
        </Center>
      </Main>
    </Container>
  );
}

export default Overview;
