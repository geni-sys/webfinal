import React, { useState, useEffect, useCallback } from "react";
import { useCookies } from "react-cookie";
import api from "../../../services/api";
import formatTime from "../../Utils/fomatTimestamps";
//
import { FiBox, FiHash } from "react-icons/fi";
import Miniature from "../../../components/Miniature";

export const Default = () => {
  const [overview, setOverview] = useState([]);
  const [listOver, setListOver] = useState([]);

  // GLOBAL VARs
  const [cookies] = useCookies();
  const { user_id, token } = cookies;

  const handleOverData = useCallback(async () => {
    try {
      const response = await api
        .get(`/user/${user_id}/issues`, {
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

      setOverview(response.data);
    } catch (err) {
      return alert(err.message);
    }
  }, [token, user_id]);
  const handleListData = useCallback(async () => {
    try {
      const response = await api
        .get(`/users/${user_id}/lists`, {
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

      setListOver(response.data.lists);
    } catch (err) {
      return alert(err.message);
    }
  }, [token, user_id]);

  useEffect(() => {
    handleOverData();
    handleListData();
  }, [handleListData, handleOverData]);

  return (
    <>
      {overview.map((over) => (
        <li key={over.id} id="pinned">
          <div id="tper">
            <span id="left">
              <FiBox />
            </span>
            <a href={`/user/learning/${over.id}`}>{over.title}</a>
          </div>

          <p>Create a basic contextmenu with html, css and JS</p>

          <div id="btom">
            <span id="language"></span>
            <span>{over.language}</span>
          </div>
        </li>
      ))}

      {listOver.map((list) => (
        <li key={list.id} id="pinned">
          <div id="tper">
            <span id="left">
              <FiHash />
            </span>
            <a href={`/playlists?watch=${list.id}`}>{list.name}</a>
          </div>

          <p>Create a basic contextmenu with html, css and JS</p>

          <div id="btom">
            <span id="language"></span>
            <span>{list.users_learning}</span>
          </div>
        </li>
      ))}
    </>
  );
};

export const Lists = () => {
  const [listasData, setListas] = useState([]);
  const [issues, setIssues] = useState([]);

  // GLOBAL VARs
  const [cookies] = useCookies();
  const { user_id, token } = cookies;

  const handleListData = useCallback(async () => {
    try {
      const response = await api
        .get(`/user/${user_id}/marked/issues`, {
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

      setListas(response.data);
    } catch (err) {
      return alert(err.message);
    }
  }, [token, user_id]);
  const handleIssueData = useCallback(async () => {
    try {
      const response = await api
        .get(`/user/${user_id}/marked/playlists`, {
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

      setIssues(response.data);
    } catch (err) {
      return alert(err.message);
    }
  }, [token, user_id]);

  useEffect(() => {
    handleListData();
    handleIssueData();
  }, [handleIssueData, handleListData]);

  return (
    <>
      {listasData.map((itm) => (
        <li style={{ minWidth: "200px" }} key={itm.id} id="pinned">
          <div id="tper">
            <span id="left">
              <FiBox />
            </span>
            <a href={`/user/learning/${itm.issue.id}`}>{itm.issue.title}</a>
          </div>

          <p>
            Artigos são descritas pelas suas tags! Artigos marcada pelo usuário.
          </p>

          <div id="btom">
            <p id="language">{formatTime(itm.issue.createdAt)}</p>
            <span>JavaScript</span>
          </div>
        </li>
      ))}

      {issues.map((issue) => (
        <li
          style={{ minWidth: "200px" }}
          key={Number(issue.list_id) * 333}
          id="pinned"
        >
          <div id="tper">
            <span id="left">
              <FiHash />
            </span>
            <a href={`/playlists?watch=${issue.list.id}`}>{issue.list.name}</a>
          </div>

          <p>
            Listas são descritas pelas suas tags! Lista marcada pelo usuário.
          </p>

          <div id="btom">
            <p id="language">{formatTime(issue.list.createdAt)}</p>
            <span>TECH</span>
          </div>
        </li>
      ))}
    </>
  );
};

export const Markeds = () => {
  const [marcados, setMarcados] = useState([]);

  // GLOBAL VARs
  const [cookies] = useCookies();
  const { user_id, token } = cookies;

  const handleMarkedData = useCallback(async () => {
    console.log("called");
    try {
      const response = await api
        .get(`/user/${user_id}/marked/users`, {
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

      setMarcados(response.data);
    } catch (err) {
      return alert(err.message);
    }
  }, [token, user_id]);

  useEffect(() => {
    handleMarkedData();
  }, [handleMarkedData]);

  return (
    <>
      {marcados.map((marked) => (
        <li key={marked.id} id="pinned">
          <div id="tper">
            <span id="left">
              <Miniature
                width={"30px"}
                height={"30px"}
                desc={"Perfil de " + marked.marked.name}
                source={marked.marked.github + ".png"}
              />
            </span>
            <a href={`/users/${marked.marked.email}`}>{marked.marked.name}</a>
          </div>

          <p>{marked.marked.email}</p>
        </li>
      ))}
    </>
  );
};
