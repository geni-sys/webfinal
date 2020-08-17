import React, { useState } from "react";
import { useCookies } from "react-cookie";
import api from "../../../services/api";
// STALYS | STATICS
import { Input, Update } from "./styles";

function Security() {
  const [oldPassword, setOldPassowrd] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [cookies] = useCookies();
  const { user_id, token } = cookies;

  async function handleChangePassword() {
    if (!oldPassword || !newPassword || !confirmPassword) {
      return alert("!PREENCHA OS CAMPOS CORRETAMENTE");
    }
    if (newPassword !== confirmPassword) {
      return alert("AS SENHAS NÃO CORRESPONDEM");
    }
    if (newPassword === oldPassword) {
      return alert("AS SENHAS NÃO PODEM SER INDÊNTICAS");
    }

    try {
      const response = await api
        .put(
          `users/${user_id}/password/update`,
          {
            oldPassword,
            newPassword,
          },
          { headers: { Authorization: String(token) } }
        )
        .catch((error) => alert(error.message));

      if (response.data.oparation) {
        alert("PASSWORD UPDATED :D");
      }
    } catch (err) {
      console.log(err.message);
      alert("ERROR IN UPDATE PASSWORD :-");
    }
  }

  return (
    <>
      <li>
        <label htmlFor="old_password">Senha antiga</label>
        <Input
          required
          type="password"
          name="old_password"
          id="old_password"
          value={oldPassword}
          onChange={(e) => setOldPassowrd(e.target.value)}
        />
      </li>

      <li>
        <label htmlFor="new_password">Nova senha</label>
        <Input
          required
          type="password"
          name="new_password"
          id="new_password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </li>

      <li>
        <label htmlFor="input_confirm">Confirmar nova senha</label>
        <Input
          required
          type="password"
          id="input_confirm"
          placeholder="Nova senha"
          name="input_confirm"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <label htmlFor="input_confirm" id="description">
          Senhas fortes ajudam a manter o seu perfil seguro!
        </label>
      </li>

      <Update type="submit" onClick={handleChangePassword}>
        Update password
      </Update>
    </>
  );
}

export default Security;
