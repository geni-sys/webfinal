import React, { useState, useEffect, useCallback, memo } from "react";
import { useCookies } from "react-cookie";
import api from "../../services/api";
// COMPONENS
import {
  FiAlertTriangle,
  FiTarget,
  FiGitBranch,
  FiShield,
} from "react-icons/fi";
import Header from "../../components/Header";
// STYLUS STATIC
import { Container, Aside, List, Main, Content } from "./styles";

const Notifications = () => {
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
    <Container>
      <Header />

      <Main>
        <Aside>
          <List>
            <li id="clicked">
              <FiTarget color="#2ea44f" />
              <a href="/notifications?tab=1">All</a>
            </li>
            <li>
              <FiGitBranch color="#f9a839" />
              <a href="/notifications?tab=2">Mentioned</a>
            </li>
            <li>
              <FiShield color="#f84a4b" />
              <a href="/notifications?tab=3">Our team</a>
            </li>
          </List>
        </Aside>

        <Content>
          <ul>
            <a id="mentioned" href="/playlist">
              <span id="ilustry">
                <FiAlertTriangle />
              </span>
              <div id="nlw">
                <span>eliasallex/aplication-route-tabs</span>
                <p>
                  Potential security vulnerability found in the logkitty
                  dependency
                </p>
              </div>
            </a>

            <a href="/playlist" id="convided">
              <span id="ilustry">
                <FiAlertTriangle />
              </span>
              <div id="nlw">
                <span>eliasallex/aplication-route-tabs</span>
                <p>
                  Potential security vulnerability found in the logkitty
                  dependency
                </p>
              </div>
            </a>

            <a href="/playlist" id="mentioned">
              <span id="ilustry">
                <FiAlertTriangle />
              </span>
              <div id="nlw">
                <span>eliasallex/aplication-route-tabs</span>
                <p>
                  Potential security vulnerability found in the logkitty
                  dependency
                </p>
              </div>
            </a>

            {notify.map((note) => (
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
            ))}
          </ul>
        </Content>
      </Main>
    </Container>
  );
};

export default memo(Notifications);
