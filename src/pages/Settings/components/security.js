import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import api from "../../../services/api";
// STALYS | STATICS
import { Input, Update } from "./styles";

function Security({ mode, username }) {
  const [oldPassword, setOldPassowrd] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [cookies] = useCookies();
  const { user_id, token } = cookies;
  const [, , removeCookie] = useCookies();
  const history = useHistory();

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
        alert("SENHA ATUALIZADA :D");
      }
    } catch (err) {
      console.log(err.message);
      alert("ERROR IN UPDATE PASSWORD :-");
    }
  }
  async function handleDesactiveAccount() {
    const confirmation = prompt(`Para desativar a conta digite: *${username}*`)
    if(confirmation === username) {
      try {
        const response = await api
          .delete(
            `users/${user_id}/desactive_account`,
            { headers: { Authorization: String(token) } }
          )
          .catch((error) => alert(error.message));

        if (response.status === 200) {
          alert("USUÁRIO DESATIVADO!");

          removeCookie("token");
          removeCookie("user_id");
          localStorage.removeItem("name");
          localStorage.removeItem("email");
          localStorage.removeItem("github_avatar");
          localStorage.removeItem("questions_status");
          localStorage.removeItem("user_description");

          history.push("/login")
          // return handleSignOut()
        }
      } catch (err) {
        console.log(err.message);
      }
    }
  }

  return (
    <>
      <li>
        <label htmlFor="old_password">Senha antiga</label>
        <Input
          mode={mode}
          required
          type="password"
          name="old_password"
          id="old_password"
          autocapitalize="none"
          autocomplete="off"
          autocorrect="off"
          value={oldPassword}
          onChange={(e) => setOldPassowrd(e.target.value)}
        />
      </li>

      <li>
        <label htmlFor="new_password">Nova senha</label>
        <Input
          mode={mode}
          required
          type="password"
          name="new_password"
          id="new_password"
          autocapitalize="none"
          autocomplete="off"
          autocorrect="off"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </li>

      <li>
        <label htmlFor="input_confirm">Confirmar nova senha</label>
        <Input
          mode={mode}
          required
          type="password"
          id="input_confirm"
          placeholder="Nova senha"
          name="input_confirm"
          autocapitalize="none"
          autocomplete="off"
          autocorrect="off"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <label htmlFor="input_confirm" id="description">
          Senhas fortes ajudam a manter o seu perfil seguro!
        </label>
      </li>

      <Update type="submit" onClick={handleChangePassword}>
        Atualizar Senha
      </Update>

      <Update disabled={!(oldPassword === "")}  id="delete" type="button" onClick={handleDesactiveAccount}>
        Desativar conta <span role="img" aria-label="triste pro voce ter que ir">😢</span>
      </Update>
    </>
  );
}

export default Security;
