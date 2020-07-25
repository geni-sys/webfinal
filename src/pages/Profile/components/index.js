import React, { useState, useEffect, useCallback } from "react";
import { useCookies } from "react-cookie";
import api from "../../../services/api";
//
import { FiBox } from "react-icons/fi";

export const Default = () => {
  const [overview, setOverview] = useState([]);

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

export const Lists = () => {
  const [listasData, setListas] = useState([]);

  // GLOBAL VARs
  const [cookies] = useCookies();
  const { user_id, token } = cookies;

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

      setListas(response.data.lists);
    } catch (err) {
      return alert(err.message);
    }
  }, [token, user_id]);

  useEffect(() => {
    handleListData();
  }, [handleListData]);

  return (
    <>
      {listasData.map((itm) => (
        <li key={itm.id} id="pinned">
          <div id="tper">
            <span id="left">
              <FiBox />
            </span>
            <a href={`/share/`}>{itm.name}</a>
          </div>

          <p>Listas são descritas pelas suas tags!</p>

          <div id="btom">
            <p id="language">{itm.createdAt}</p>
            <span>JavaScript</span>
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
              <FiBox />
            </span>
            <a href="/user/learning/1">Dotnet Orientation</a>
          </div>

          <p>Create a basic contextmenu with html, css and JS</p>

          <div id="btom">
            <span id="language"></span>
            <span>JavaScript</span>
          </div>
        </li>
      ))}
    </>
  );
};
