import React, { useState, useEffect, useCallback } from "react";
import { useCookies } from "react-cookie";
import { FiAlertTriangle } from "react-icons/fi";
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
          <a key={note.id} href="/playlist" targer="_blannk" id="alert">
            <span id="ilustry">
              <FiAlertTriangle />
            </span>
            <div id="nlw">
              <span>DE: {note.de.name}</span>
              <p>{note.transcription}</p>
            </div>
          </a>
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
          <a key={note.id} href="/playlist" targer="_blannk" id="alert">
            <span id="ilustry">
              <FiAlertTriangle />
            </span>
            <div id="nlw">
              <span>
                {note.de.name}/{note.para.name}
              </span>
              <p>{note.transcription}</p>
            </div>
          </a>
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
          <a key={note.id} href="/playlist" targer="_blannk" id="alert">
            <span id="ilustry">
              <FiAlertTriangle />
            </span>
            <div id="nlw">
              <span>DE: {note.de.name}</span>
              <p>{note.transcription}</p>
            </div>
          </a>
        ))
      ) : (
        <h1> SEM NOTIFICACÕES </h1>
      )}
    </>
  );
};
