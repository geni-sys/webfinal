import React, { useState } from "react";
import { useCookies } from "react-cookie";
import api from "../../../services/api";
// STYLES | STATICS
import { Input, Description, Update } from "./styles";

function Default() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [github, setGithub] = useState("");

  const [cookies] = useCookies();
  const { user_id, token } = cookies;

  async function handleUpdateProfile() {
    if (!name || !bio || !github) {
      return alert("!PREENCHA OS CAMPOS CORRETAMENTE");
    }

    try {
      const response = await api
        .put(
          `users/${user_id}/update`,
          {
            name,
            bio,
            github,
          },
          { headers: { Authorization: String(token) } }
        )
        .catch((error) => alert(error.message));

      if (response.data.oparation) {
        alert("PROFILE UPDATED :D");
      }
    } catch (err) {
      console.log(err.message);
      alert("ERROR IN UPDATE PROFILE :-");
    }
  }
  return (
    <>
      <li>
        <label htmlFor="input_name">Nome</label>
        <Input
          id="input_name"
          name="input_name"
          placeholder="Eliasallex"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="input_name" id="description">
          Seu nome pode aparecer em torno do GitHub onde você contribui ou é
          mencionado.
        </label>
      </li>

      <li>
        <label htmlFor="input_description">Bio</label>
        <Description
          id="input_description"
          placeholder="EX: Programmer Focused on technologies around the JS language."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <label htmlFor="input_description" id="description">
          como voce se descreve em torno da sua carreira?.
        </label>
      </li>

      <li>
        <label htmlFor="input_git">Github</label>
        <Input
          id="input_git"
          placeholder="EX: https://github.com/*username*"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />
        <label htmlFor="input_git" id="description">
          Vai servir para pegarmos sua foto de perfil e sua descrição.
        </label>
      </li>

      <Update onClick={handleUpdateProfile}>Update profile</Update>
    </>
  );
}

export default Default;
