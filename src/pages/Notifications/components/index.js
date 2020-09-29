import React, { useState, useEffect, useCallback } from "react";
import { useCookies } from "react-cookie";
import { Notificate, Clicked } from "../styles";
import api from "../../../services/api";
// COMPONENTS
import Miniature from "../../../components/Miniature";

export const All = ({ mode }) => {
  const [notify, setNotify] = useState([]);

  const [cookies] = useCookies();
  const { token, user_id } = cookies;

  const handleRequests = useCallback(async () => {
    try {
      const response = await api.get(
        `/notifications/${user_id}?requesting=true`,
        {
          headers: { Authorization: String(token) },
        }
      );

      setNotify(response.data);
    } catch (err) {
      alert(err.message);
      console.log(err.message);
    }
  }, [token, user_id]);

  useEffect(() => {
    handleRequests();
  }, [handleRequests]);

  return (
    <>
      {!(notify.length === 0) ? (
        notify.map((note) => (
          <Notificate key={note.id} mode={mode} id="alert">
            <div id="header">
              <Miniature
                source={note.de.github + ".png"}
                width={"50px"}
                height={"50px"}
              />
            </div>

            <div id="nlw">
              <span>FROM</span>
              <a href={`/users/${note.de.email}`}>{note.de.name}</a>

              <p>Adicionou você em sua lista de usuários marcados</p>

              <div id="footer">
                <Clicked mode={mode} href={`/users/${note.de.email}`}>
                  Adicionar
                </Clicked>
              </div>
            </div>
          </Notificate>
        ))
      ) : (
        <h1> SEM NOTIFICACÕES </h1>
      )}
    </>
  );
};

export const Mentioned = ({ mode }) => {
  const [notify, setNotify] = useState([]);

  const [cookies] = useCookies();
  const { token, user_id } = cookies;

  const handleRequests = useCallback(async () => {
    try {
      const response = await api.get(
        `/notifications/${user_id}?mentioned=true`,
        {
          headers: { Authorization: String(token) },
        }
      );

      setNotify(response.data);
    } catch (err) {
      alert(err.message);
      console.log(err.message);
    }
  }, [token, user_id]);

  useEffect(() => {
    handleRequests();
  }, [handleRequests]);

  return (
    <>
      {!(notify.length === 0) ? (
        notify.map((note) => (
          <Notificate
            key={note.id}
            mode={mode}
            href="/playlist"
            targer="_blannk"
            id="alert"
          >
            <div id="header">
              <Miniature
                source={note.de.github + ".png"}
                width={"50px"}
                height={"50px"}
              />
            </div>

            <div id="nlw">
              <span>FROM</span>
              <a href={`/users/${note.de.email}`}>{note.de.name}</a>

              <p>Está compartilhando uma nova playlist com anotações. </p>

              <div id="footer">
                <Clicked
                  mode={mode}
                  href={`/playlists?watch=${note.id}&box=2314`}
                >
                  Abrir
                </Clicked>
              </div>
            </div>
          </Notificate>
        ))
      ) : (
        <h1> SEM NOTIFICACÕES </h1>
      )}
    </>
  );
};

export const OurTeam = ({ mode }) => {
  const [notify, setNotify] = useState([]);

  const [cookies] = useCookies();
  const { token, user_id } = cookies;

  const handleRequests = useCallback(async () => {
    try {
      const response = await api.get(
        `/notifications/${user_id}?our_team=true`,
        {
          headers: { Authorization: String(token) },
        }
      );

      setNotify(response.data);
    } catch (err) {
      alert(err.message);
      console.log(err.message);
    }
  }, [token, user_id]);

  useEffect(() => {
    handleRequests();
  }, [handleRequests]);

  return (
    <>
      {!(notify.length === 0) ? (
        notify.map((note) => (
          <Notificate key={note.id} mode={mode} id="alert">
            <div id="header">
              <Miniature
                source={note.de.github + ".png"}
                width={"50px"}
                height={"50px"}
              />
            </div>

            <div id="nlw">
              <span>FROM</span>
              <a href={`/users/${note.de.email}`}>Genesis Systems</a>

              <p>{note.transcription}</p>

              <div id="footer">
                <Clicked mode={mode} href="/">
                  Abrir
                </Clicked>
              </div>
            </div>
          </Notificate>
        ))
      ) : (
        <h1> SEM NOTIFICACÕES </h1>
      )}
    </>
  );
};
