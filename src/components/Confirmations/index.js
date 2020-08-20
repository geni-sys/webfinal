import React from "react";
// STYLES | STATICS
import { Confirmate, Title, Transcription, Go } from "./styles";

function Confirmations({ title, transcription, link }) {
  return (
    <Confirmate>
      <Title>Looking for</Title>
      <Transcription>we have the better for moment!</Transcription>
      <Go>lets go</Go>
    </Confirmate>
  );
}

export default Confirmations;
