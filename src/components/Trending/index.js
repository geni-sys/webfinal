import React, { useState, useCallback, useEffect } from "react";
import { useCookies } from "react-cookie";
import api from "../../services/api";
// components
import Miniature from "../Miniature";
import { Trending } from "./styles";

function Trender() {
  const [data, setData] = useState([]);

  const [cookies] = useCookies();
  const { token } = cookies;

  const handleRequest = useCallback(async () => {
    try {
      // const { token, user_id } = cookies;
      const response = await api
        .get(`/issues_/featureds`, {
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
  }, [token]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  return (
    <Trending>
      {!(data.length === 0) ? (
        data.map((item) => (
          <li key={item.id}>
            <div id="top">
              <Miniature
                source={item.user.github + ".png"}
                width={"40px"}
                height={"40px"}
              />
            </div>
            <div id="bottom">
              <div id="header">
                <strong>{item.title}</strong>
                <span>*</span>
              </div>
              <p id="description">
                Artigo destacado com base em tags mais pesquisqadas e com
                maiores marcações. Destacado pelos especialistas da plataforma.
              </p>
            </div>
          </li>
        ))
      ) : (
        <h1>EM BREVE</h1>
      )}
    </Trending>
  );
}

export default Trender;
