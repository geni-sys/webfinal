import React, { useState, useCallback, useEffect } from "react";
import { useCookies } from "react-cookie";
import api from "../../services/api";
// COMPONENTS
import { FiActivity, FiAirplay, FiStar, FiPlus } from "react-icons/fi";
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
  Controls,
  Create,
} from "./styles";

function Modal() {
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
      <Modals id="create">
        <Lists>
          {data.map((marked, index) => (
            <li key={marked.id}>
              <strong>{marked.issue.title}</strong>
              <button
                onClick={() => serializeMarkeds(marked.id, marked.issue_id)}
              >
                <FiPlus />
                Add
              </button>
            </li>
          ))}
        </Lists>

        <Controls>
          Nome da lista
          <input
            placeholder="Que não exista"
            type="text"
            name="namer"
            id="namer"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span>
            Artigos: <strong>{idNewList}</strong>
          </span>
          <Create onClick={createListName}>Criar</Create>
        </Controls>
      </Modals>
    </>
  );
}

function Overview() {
  const [data, setData] = useState([]);
  // const [star, setStar] = useState(false);
  const [isActived, setIsActived] = useState(false);

  const [cookies] = useCookies();

  const getAllLists = useCallback(async () => {
    try {
      const { token } = cookies;
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

      setData(response.data);
    } catch (err) {
      console.log(err.message);
      return alert(err.message);
    }
  }, [cookies]);

  useEffect(() => {
    getAllLists();
  }, [getAllLists]);

  function HandleChoosed({ state }) {
    if (state) {
      return <Modal />;
    }

    return (
      <Playlist>
        {data.map((list) => (
          <li key={list.id}>
            <div id="starred">
              <FiActivity />
              <span>Based on repositories you´re starred</span>
            </div>

            <div id="list">
              <div id="unik">
                <FiAirplay />
                <p>
                  <a href={`/users/${list.id}`}>microsoft</a> /{" "}
                  <strong>
                    <a href={`/share/${list.id}`}>{list.name}</a>
                  </strong>
                </p>
              </div>

              <div id="side">
                <button>
                  <FiStar />
                  Star
                </button>
                <span>{list.issues.length}</span>
              </div>
            </div>

            <div id="stamps">
              <span>Updated 3 min ago</span>
              <br />
              <span>* CSS</span>
            </div>
          </li>
        ))}
      </Playlist>
    );
  }

  return (
    <Container>
      <Header />

      <Main>
        <Center>
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
