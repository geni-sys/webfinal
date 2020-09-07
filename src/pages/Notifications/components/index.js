import React, { useState, useEffect, useCallback } from "react";
import { useCookies } from "react-cookie";
import { Triangle, Notificate, Clicked } from "../styles";
import api from "../../../services/api";
// COMPONENTS
export const All = () => {
  const [notify, setNotify] = useState([]);

  const [cookies] = useCookies();
  const { token, user_id } = cookies;

  const handleRequests = useCallback(async () => {
    try {
      const response = await api.get(`/notifications/${user_id}`, {
        headers: { Authorization: String(token) },
      });

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
            href="/playlist"
            targer="_blannk"
            id="alert"
          >
            <div id="header">
              <span>Usuário: {note.de.name}</span>

              <Triangle />
            </div>

            <div id="nlw">
              <p>Adicionou você em sua lista de usuários marcados</p>
            </div>

            <div id="footer">
              <Clicked href="/">Adicionar</Clicked>
            </div>
          </Notificate>
        ))
      ) : (
        <h1> SEM NOTIFICACÕES </h1>
      )}
    </>
  );
};

export const Mentioned = () => {
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
            href="/playlist"
            targer="_blannk"
            id="alert"
          >
            <div id="header">
              <span>De: {note.de.name}</span>

              <Triangle />
            </div>

            <div id="nlw">
              <p>Está compartilhando uma nova playlist com anotações. </p>
            </div>

            <div id="footer">
              <Clicked target="_BLANK" href={note.transcription}>
                Aceitar
              </Clicked>
            </div>
          </Notificate>
        ))
      ) : (
        <h1> SEM NOTIFICACÕES </h1>
      )}
    </>
  );
};

export const OurTeam = () => {
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
          <Notificate
            key={note.id}
            href="/playlist"
            targer="_blannk"
            id="alert"
          >
            <div id="header">
              <span>De: GEneSis</span>

              <Triangle />
            </div>

            <div id="nlw">
              <p>{note.transcription}</p>
            </div>

            <div id="footer">
              <Clicked target="_BLANK" href={note.state}>
                Prosseguir
              </Clicked>
            </div>
          </Notificate>
        ))
      ) : (
        <h1> SEM NOTIFICACÕES </h1>
      )}
    </>
  );
};
