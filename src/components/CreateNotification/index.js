import React, { useState } from "react";
import { useCookies } from "react-cookie";
import api from "../../services/api";
// COMP0NENTS
import Miniature from "../Miniature";
// STYLUS
import { Container, Aside, Main, Shareit, Send } from "./styles";

function CreateNotification({ clsName, closeIt }) {
  const [link, setLink] = useState("");
  const [userSelected, setUserSelected] = useState(0);

  const [cookies] = useCookies();
  const { token, user_id } = cookies;

  const transcription = String(link).trim();

  async function handleNotificate() {
    if (!userSelected || userSelected === 0) {
      return alert("Seleciona um usuário da sua lista de marcações");
    }
    try {
      const response = await api.post(
        `/notifications/${user_id}/to/${userSelected}`,
        {
          transcription,
          state: "pendente",
          type: "mention",
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

        <li
          className={userSelected === 2 ? "selected" : null}
          onClick={() => setUserSelected(2)}
        >
          <Miniature width={"20px"} height={"20px"} />
          elias alexandre
        </li>

        <li>
          <Miniature width={"20px"} height={"20px"} />
          gabirel castro
        </li>

        <li>
          <Miniature width={"20px"} height={"20px"} />
          alciomar hollanda
        </li>

        <li>
          <Miniature width={"20px"} height={"20px"} />
          barraba serencovich
        </li>
      </Aside>
      <Main>
        <div>
          <span>Notificação:</span>
        </div>
        <ul>
          <select name="typeof" id="typeof">
            <option value="share">Partilhamento</option>
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
