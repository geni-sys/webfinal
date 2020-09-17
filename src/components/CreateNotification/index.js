import React, { useState, useEffect, useCallback } from "react";
import { useCookies } from "react-cookie";
import api from "../../services/api";
// COMP0NENTS
import Miniature from "../Miniature";
// STYLUS
import { Container, Aside, Main, Shareit, Send } from "./styles";

function CreateNotification({ clsName, closeIt }) {
  const [data, setData] = useState([]);
  const [link, setLink] = useState("");
  const [type, setType] = useState("mention");
  const [userSelected, setUserSelected] = useState(0);

  const [cookies] = useCookies();
  const { token, user_id } = cookies;

  const transcription = String(link).trim();

  const handleRequests = useCallback(async () => {
    try {
      const response = await api.get(`/user/${user_id}/marked/users`, {
        headers: { Authorization: String(token) },
      });

      setData(response.data);
    } catch (err) {
      alert(err.message);
      console.log(err.message);
    }
  }, [token, user_id]);

  useEffect(() => {
    handleRequests();
  }, [handleRequests]);

  async function handleNotificate() {
    if (!userSelected || userSelected === 0 || !link || !type) {
      return alert("Seleciona um usuário da sua lista de marcações");
    }
    try {
      const response = await api.post(
        `/notifications/${user_id}/to/${userSelected}`,
        {
          transcription,
          state: "pendente",
          type,
        },
        {
          headers: { Authorization: String(token) },
        }
      );

      if (response.data) {
        alert("Notificação enviada!");
        closeIt(true);
      }
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <Container className={clsName}>
      <Aside>
        <strong>Enviar para:</strong>

        {data.map((user) => (
          <li
            key={user.marked.id}
            className={userSelected === user.marked.id ? "selected" : null}
            onClick={() => setUserSelected(user.marked.id)}
          >
            <Miniature
              source={user.marked.github + ".png"}
              width={"20px"}
              height={"20px"}
            />
            {user.marked.name}
          </li>
        ))}
      </Aside>
      <Main>
        <div>
          <span>Notificação:</span>
        </div>

        <ul>
          <select name="typeof" id="typeof">
            <option
              key="mention"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              Partilhamento de Lista
            </option>
          </select>
        </ul>

        <Shareit
          id="shareit"
          required
          name="shareit"
          placeholder="link de compartilhamento"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <Send onClick={handleNotificate} type="Submit">
          Enviar
        </Send>
      </Main>
    </Container>
  );
}

export default CreateNotification;
