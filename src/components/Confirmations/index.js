import React from "react";
// STYLES | STATICS
import { Confirmate, Title, Transcription, Go, Close } from "./styles";

function Confirmations({ title, transcription, link, isShow }) {
  return (
    <Confirmate className={isShow}>
      <Title>{title || "What you are looking for?"}</Title>
      <Transcription>
        {transcription ||
          "voce ainda não completou todo o seu perfil. responda as questões para a conclusão."}
      </Transcription>
      <Go>{link || "Prosseguir"}</Go>

      <Close />
    </Confirmate>
  );
}

export default Confirmations;
