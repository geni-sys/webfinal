import React, { useState, useEffect, useCallback } from "react";
import { useCookies } from "react-cookie";
import api from "../../services/api";
// COMPONENS
import { FiUser, FiHash, FiAirplay } from "react-icons/fi";
import Header from "../../components/Header";
// STYLUS STATIC
import { Container, Aside, List, Main, Content, Button } from "./styles";

function Users({ query }) {
  const [DataUsers, setDataUsers] = useState([]);

  const [cookies] = useCookies();
  const { token, user_id } = cookies;
  const handleUsersQuery = useCallback(async () => {
    try {
      const response = await api
        .get(`/users?query=${query}`, {
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

      const data = response.data;
      setDataUsers(data);
    } catch (err) {
      console.log(err.message);
      return alert(err.message);
    }
  }, [query, token]);

  useEffect(() => {
    handleUsersQuery(query);
  }, [handleUsersQuery, query]);

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
        alert("Usuario marcado");
      }
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <>
      {DataUsers.map((item) => (
        <li key={item.id} href="/playlist">
          <span id="ilustry">
            <FiUser />
          </span>
          <div id="nlw">
            <a href={`/users/${item.email}`}>{item.name}</a>
            <span>{item.email}</span>
            <p>
              Potential security vulnerability found in the logkitty dependency
            </p>
            <div id="ftr">
              <Button
                disabled={item.isFriend && true}
                type="button"
                onClick={() => markUser(item.id)}
              >
                <FiHash />
                {item.isFriend ? "Usuário marcado" : "Marcar Usuário"}
              </Button>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}

function Lists({ query }) {
  const [dataList, setDataList] = useState([]);

  const [cookies] = useCookies();
  const handleDataListQuery = useCallback(async () => {
    const { token } = cookies;

    try {
      const response = await api
        .get(`/playlists?query=${query}`, {
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

      return setDataList(response.data);
    } catch (err) {
      console.log(err.message);
      return alert(err.message);
    }
  }, [cookies, query]);

  useEffect(() => {
    handleDataListQuery(query);
  }, [handleDataListQuery, query]);

  return (
    <>
      {dataList.map((item) => (
        <li key={item.id} href="/playlist">
          <span id="ilustry">
            <FiAirplay />
          </span>
          <div id="nlw">
            <a href={`/share?title=${item.id}`}>{item.name}</a>
            <span>{item.stars}</span>
            <div id="ftr">
              <Button>
                <FiHash />
                Marcar
              </Button>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}

function Issues({ query }) {
  const [dataIssue, setDataIssue] = useState([]);

  const [cookies] = useCookies();
  const handleDataIssueQuery = useCallback(async () => {
    const { token } = cookies;

    const response = await api
      .get(`/issues?query=${query}`, {
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

    setDataIssue(response.data);
  }, [cookies, query]);

  useEffect(() => {
    handleDataIssueQuery(query);
  }, [handleDataIssueQuery, query]);

  function serializeTags(tags) {
    const separete = String(tags).split(",");
    const serials = separete.map((tag) => tag.trim());

    return (
      <>
        {serials.map((serial) => (
          <span key={serial}>
            <a style={{ color: "#4764f1" }} href={`/search/${serial}`}>
              {serial}
            </a>
          </span>
        ))}
      </>
    );
  }

  return (
    <>
      {dataIssue.map((item) => (
        <li key={item.id} href="/playlist">
          <span id="ilustry">
            <FiAirplay />
          </span>
          <div id="nlw">
            <a href={`/lists?title=${item.id}`}>{item.title}</a>
            <span>#{parseInt(item.id) * 122}</span>
            <p id="lighs">{serializeTags(item.tags)}</p>
            <div id="ftr">
              <Button>
                <FiHash />
                Marcar
              </Button>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}

const SearchResult = ({ match }) => {
  const [clicked, setClicked] = useState(0);

  const { query_search } = match.params;

  function handleClicked(id, query) {
    if (id === 1) {
      return <Lists query={query} />;
    }

    if (id === 2) {
      return <Issues query={query} />;
    }

    return <Users query={query} />;
  }

  return (
    <Container>
      <Header />

      <Main>
        <Aside>
          <List>
            <li
              onClick={() => setClicked(0)}
              id={clicked === 0 ? "clicked" : ""}
            >
              <a href="/search?tab=1&query=elias">Usuários</a>
              <strong>234</strong>
            </li>
            <li
              onClick={() => setClicked(1)}
              id={clicked === 1 ? "clicked" : ""}
            >
              <a href="/search?tab=2&query=elias">Listas</a>
              <strong>897</strong>
            </li>
            <li
              onClick={() => setClicked(2)}
              id={clicked === 2 ? "clicked" : ""}
            >
              <a href="/search?tab=3&query=elias">Artigos</a>
              <strong>6453</strong>
            </li>
          </List>
        </Aside>

        <Content>
          <ul id="concret">{handleClicked(clicked, query_search)}</ul>
        </Content>
      </Main>
    </Container>
  );
};

export default SearchResult;
