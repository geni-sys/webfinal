import React from "react";
// STYLES | STATICS
import { Confirmate, Title, Transcription, Go, Close } from "./styles";

function Confirmations({ title, transcription, link, isShow, onClose }) {
  return (
    <Confirmate className={isShow}>
      <Title>{title || "What you are looking for?"}</Title>
      <Transcription>
        {transcription ||
          "voce ainda não completou todo o seu perfil. responda as questões para a conclusão."}
      </Transcription>
      <Go href={link}>{"Prosseguir"}</Go>

      <Close onClick={onClose} />
    </Confirmate>
  );
}

export default Confirmations;
