import React from "react";
// COMP0NENTS
import Miniature from "../Miniature";
// STYLUS
import { Container, Aside, Main } from "./styles";

function CreateNotification({ clsName }) {
  return (
    <Container className={clsName}>
      <Aside>
        <strong>Enviar para:</strong>

        <li>
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
          <span>Tipo da notificação:</span>
        </div>
        <ul>
          <li>Menção</li>
          <li>Requisição</li>
          <li>Partilhamento</li>
        </ul>
      </Main>
    </Container>
  );
}

export default CreateNotification;
