import React, { useState, useCallback, useEffect } from "react";
import { useCookies } from "react-cookie";
import api from "../../services/api";
// COMPONENTS
import { FiActivity, FiAirplay, FiStar, FiPlus, FiCheck } from "react-icons/fi";
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
  function HandleCheck({ checked }) {
    if (checked) {
      return <FiCheck />;
    }

    return <FiPlus />;
  }

  return (
    <>
      <Modals id="create">
        <Lists>
          <li>
            <strong>vscode-docs</strong>
            <button>
              <FiPlus />
              Add
            </button>
          </li>

          <li className="added">
            <strong>DotNet Orientation</strong>
            <button>
              <HandleCheck checked={true} />
              Add
            </button>
          </li>

          <li>
            <strong>Initial with NodeJS</strong>
            <button>
              <FiPlus />
              Add
            </button>
          </li>
        </Lists>

        <Controls>
          Nome da lista
          <input
            placeholder="Que não exista"
            type="text"
            name="namer"
            id="namer"
          />
          <span>
            Artigos: <strong>3</strong>
          </span>
          <Create>Criar</Create>
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
