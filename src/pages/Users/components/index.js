import React, { useState, useEffect, useCallback } from "react";
import { useCookies } from "react-cookie";
import api from "../../../services/api";
//COMPONENTS
import { FiBox } from "react-icons/fi";
import Miniature from "../../../components/Miniature";

export const Default = ({ user }) => {
  const [overview, setOverview] = useState([]);

  // GLOBAL VARs
  const [cookies] = useCookies();
  const { token } = cookies;

  const handleOverData = useCallback(async () => {
    try {
      const response = await api
        .get(`/user/${user}/issues`, {
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
  }, [token, user]);

  useEffect(() => {
    handleOverData();
  }, [handleOverData]);

  return (
    <>
      {overview.map((over) => (
        <li key={over.id} id="pinned">
          <div id="tper">
            <span id="left">
              <FiBox />
            </span>
            <a href="/user/learning/1">{over.title}</a>
          </div>

          <p>Create a basic contextmenu with html, css and JS</p>

          <div id="btom">
            <span id="language"></span>
            <span>{over.language}</span>
          </div>
        </li>
      ))}
    </>
  );
};

export const Lists = ({ user }) => {
  const [listasData, setListas] = useState([]);

  // GLOBAL VARs
  const [cookies] = useCookies();
  const { token } = cookies;

  const handleListData = useCallback(async () => {
    try {
      const response = await api
        .get(`/user/${user}/marked/issues`, {
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
  }, [token, user]);

  useEffect(() => {
    handleListData();
  }, [handleListData]);

  return (
    <>
      {listasData.map((itm) => (
        <li style={{ minWidth: "200px" }} key={itm.id} id="pinned">
          <div id="tper">
            <span id="left">
              <FiBox />
            </span>
            <a href={`/share/`}>{itm.issue.title}</a>
          </div>

          <p>
            Listas são descritas pelas suas tags! Lista marcada pelo usuário.
          </p>

          <div id="btom">
            <p id="language">{itm.issue.createdAt}</p>
            <span>JavaScript</span>
          </div>
        </li>
      ))}
    </>
  );
};

export const Markeds = ({ user }) => {
  const [marcados, setMarcados] = useState([]);

  // GLOBAL VARs
  const [cookies] = useCookies();
  const { token } = cookies;

  const handleMarkedData = useCallback(async () => {
    console.log("called");
    try {
      const response = await api
        .get(`/user/${user}/marked/users`, {
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
  }, [token, user]);

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
            <a href="/user/learning/1">{marked.marked.name}</a>
          </div>

          <p>{marked.marked.email}</p>
        </li>
      ))}
    </>
  );
};
