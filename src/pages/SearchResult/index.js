import React, { useState, useEffect, useCallback } from "react";
import { useCookies } from "react-cookie";
import api from "../../services/api";
// COMPONENS
import { FiHash, FiAirplay } from "react-icons/fi";
import Header from "../../components/Header";
import Miniature from "../../components/Miniature";
// STYLUS STATIC
import { Container, Aside, List, Main, Content, Button } from "./styles";

function Users({ query }) {
  const [DataUsers, setDataUsers] = useState([]);

  const [cookies] = useCookies();
  const { token, user_id } = cookies;
  const handleUsersQuery = useCallback(async () => {
    try {
      const response = await api
        .get(`/users_query?query=${query}&user_id=${user_id}`, {
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
  }, [query, token, user_id]);

  useEffect(() => {
    handleUsersQuery(query);
  }, [handleUsersQuery, query]);

  async function handleMarkUser(isStarry, user_mark) {
    if (isStarry) {
      return null;
    }

    try {
      const response = await api
        .post(
          `/user/${user_id}/mark/users/${user_mark}`,
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

      if (response.data) {
        window.location.reload(true);
        await api.post(
          `/notifications/${user_id}/to/${user_mark}`,
          {
            transcription: "http://localhost/3337/profile",
            state: "pendente",
            type: "request",
          },
          {
            Headers: { Authorization: String(token) },
          }
        );
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
            <Miniature
              source={item.github + ".png"}
              width={"40px"}
              height={"40px"}
            />
          </span>
          <div id="nlw">
            <a href={`/users/${item.email}`}>{item.name}</a>
            <span>{item.email}</span>
            <div id="ftr">
              <Button
                disabled={item.starry}
                type="button"
                onClick={() => handleMarkUser(item.starry, item.id)}
              >
                <FiHash />
                {item.starry ? "Usuário marcado" : "Marcar Usuário"}
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
  const { token, user_id } = cookies;
  const handleDataListQuery = useCallback(async () => {
    try {
      const response = await api
        .get(`/playlists?query=${query}&user_id=${user_id}`, {
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
  }, [query, token, user_id]);

  useEffect(() => {
    handleDataListQuery(query);
  }, [handleDataListQuery, query]);

  async function handleMarkList(isStarry, list_mark) {
    if (isStarry) {
      return null;
    }

    try {
      const response = await api
        .post(
          `/user/${user_id}/mark/playlists/${list_mark}`,
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

  return (
    <>
      {dataList.map((item) => (
        <li key={item.id} href="/playlist">
          <span id="ilustry">
            <FiAirplay />
          </span>
          <div id="nlw">
            <a href={`/playlists?watch=/${item.id}`}>{item.name}</a>
            <span>{item.stars}</span>
            <div id="ftr">
              <Button onClick={() => handleMarkList(item.starry, item.id)}>
                <FiHash />
                {item.starry ? "Lista marcada" : "Marcar lista"}
              </Button>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}

function Issues({ query, mode }) {
  const [dataIssue, setDataIssue] = useState([]);

  const [cookies] = useCookies();
  const { token, user_id } = cookies;
  const handleDataIssueQuery = useCallback(async () => {
    const response = await api
      .get(`/issues?query=${query}&user_id=${user_id}`, {
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
  }, [query, token, user_id]);

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
            <a href={`/search?query_search=${serial}&tab=2`}>{serial}</a>
          </span>
        ))}
      </>
    );
  }

  async function handleMarkIssue(isStarry, issue_id) {
    if (isStarry) {
      return null;
    }

    try {
      const response = await api
        .post(
          `/user/${user_id}/mark/issues/${issue_id}`,
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

  return (
    <>
      {dataIssue.map((item) => (
        <li mode={mode} key={item.id} href="/playlist">
          <span id="ilustry">
            <FiAirplay />
          </span>
          <div id="nlw">
            <a id="serial" href={`/user/learning/${item.id}`}>
              {item.title}
            </a>
            <span>#{parseInt(item.id) * 122}</span>
            <p id="lighs">{serializeTags(item.tags)}</p>
            <div id="ftr">
              <Button onClick={() => handleMarkIssue(item.starry, item.id)}>
                <FiHash />
                {item.starry ? "Artigo marcado" : "Marcar artigo"}
              </Button>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}

const SearchResult = ({ location }) => {
  const [totalUsers, setTotalUsers] = useState(0)
  const [totalLists, setTotalLists] = useState(0)
  const [totalIssues, setTotalIssues] = useState(0)

  const [theme] = useState(() => localStorage.getItem("theme") || "light");
  const [query_search] = useState(() => {
    const params = new URLSearchParams(location.search);
    const searcher = String(params.get("query_search"));

    return searcher || "a";
  });

  const [clicked, setClicked] = useState(() => {
    const params = new URLSearchParams(location.search);
    const tab = parseInt(params.get("tab"));

    return tab || 0;
  });

  // const { query_search } = match.params;
  const [cookies] = useCookies();
  const { token, user_id } = cookies;

  function handleClicked(id, query) {
    // console.log(clicked);
    if (id === 1) {
      return <Lists mode={theme} query={query} />;
    }

    if (id === 2) {
      return <Issues mode={theme} query={query} />;
    }

    // setClicked(0);
    return <Users mode={theme} query={query} />;
  }
  const getTotUsers = useCallback(async () => {
    try {
      const response = await api
        .get(`/users_query?query=${query_search}&user_id=${user_id}`, {
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

      const data = response.data.length;
      setTotalUsers(data);
    } catch (err) {
      console.log(err.message);
      return alert(err.message);
    }
  }, [query_search, token, user_id])
  const getTotLists = useCallback(async () => {
    try {
      const response = await api
        .get(`/playlists?query=${query_search}&user_id=${user_id}`, {
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

      return setTotalLists(response.data.length);
    } catch (err) {
      console.log(err.message);
      return alert(err.message);
    }
  }, [query_search, token, user_id]);
  const getTotIssues = useCallback(async () => {
    const response = await api
      .get(`/issues?query=${query_search}&user_id=${user_id}`, {
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

      setTotalIssues(response.data.length);
  }, [query_search, token, user_id]);

  useEffect(() => {
    document.title = "Resultados para " + query_search;
    getTotUsers()
    getTotLists()
    getTotIssues()
  }, [getTotIssues, getTotLists, getTotUsers, query_search]);

  return (
    <Container mode={theme}>
      <Header />

      <Main mode={theme}>
        <Aside mode={theme}>
          <List mode={theme}>
            <li
              onClick={() => setClicked(0)}
              id={clicked === 0 ? "clicked" : ""}
            >
              <a href={`/search?query_search=${query_search}&tab=0`}>
                Usuários
              </a>
              <strong>{totalUsers}</strong>
            </li>
            <li
              onClick={() => setClicked(1)}
              id={clicked === 1 ? "clicked" : ""}
            >
              <a href={`/search?query_search=${query_search}&tab=1`}>Listas</a>
              <strong>{totalLists}</strong>
            </li>
            <li
              onClick={() => setClicked(2)}
              id={clicked === 2 ? "clicked" : ""}
            >
              <a href={`/search?query_search=${query_search}&tab=2`}>Artigos</a>
              <strong>{totalIssues}</strong>
            </li>
          </List>
        </Aside>

        <Content mode={theme}>
          <ul mode={theme} id="concret">
            {handleClicked(clicked, query_search)}
          </ul>
        </Content>
      </Main>
    </Container>
  );
};

export default SearchResult;
