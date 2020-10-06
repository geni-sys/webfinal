import React, { useState, memo, useEffect } from "react";
// COMPONENS
import { FiTarget, FiGitBranch, FiShield } from "react-icons/fi";
import { All, Mentioned, OurTeam } from "./components";
import Header from "../../components/Header";
import CreateNotification from "../../components/CreateNotification";
// STYLUS STATIC
import { Container, Aside, List, Main, Content, New } from "./styles";

const Notifications = ({ match }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isCreatingNotification, setIsCreatingNotification] = useState(false);
  const [theme] = useState(() => localStorage.getItem("theme") || "light");

  // const { tab } = match.params;

  useEffect(() => {
    document.title = "Notificações";
  }, []);

  function ChooseComponent() {
    if (activeTab === 0) {
      return <All mode={theme} />;
    }
    if (activeTab === 1) {
      return <Mentioned mode={theme} />;
    }
    if (activeTab === 2) {
      return <OurTeam mode={theme} />;
    }
  }
  function handleCerateNotification() {
    setIsCreatingNotification(!isCreatingNotification);
  }

  return (
    <Container mode={theme}>
      <Header />

      <Main mode={theme}>
        <Aside mode={theme}>
          <List mode={theme}>
            <li
              id={activeTab === 0 ? "clicked" : ""}
              onClick={() => setActiveTab(0)}
            >
              <FiTarget color="#2ea44f" />
              <a href="/notifications?tab=1">Usuários adicionando</a>
            </li>

            <li
              id={activeTab === 1 ? "clicked" : ""}
              onClick={() => setActiveTab(1)}
            >
              <FiGitBranch color="#f9a839" />
              <a href="/notifications?tab=2">Requisições de listas</a>
            </li>

            <li
              id={activeTab === 2 ? "clicked" : ""}
              onClick={() => setActiveTab(2)}
            >
              <FiShield color="#f84a4b" />
              <a href="/notifications?tab=3">Nossa equipe</a>
            </li>

            <New onClick={handleCerateNotification}>New</New>
          </List>
        </Aside>

        <Content mode={theme}>
          {isCreatingNotification ? (
            <CreateNotification
              closeIt={handleCerateNotification}
              clsName={"monted"}
            />
          ) : (
            <ul>{ChooseComponent()}</ul>
          )}
        </Content>
      </Main>
    </Container>
  );
};

export default memo(Notifications);
