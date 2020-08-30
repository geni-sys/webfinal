import React, { useState, memo } from "react";
// COMPONENS
import { FiTarget, FiGitBranch, FiShield } from "react-icons/fi";
import Header from "../../components/Header";
import { All, Mentioned, OurTeam } from "./components";
// STYLUS STATIC
import { Container, Aside, List, Main, Content } from "./styles";

const Notifications = ({ match }) => {
  const [activeTab, setActiveTab] = useState(0);

  // const { tab } = match.params;

  function ChooseComponent() {
    if (activeTab === 0) {
      return <All />;
    }
    if (activeTab === 1) {
      return <Mentioned />;
    }
    if (activeTab === 2) {
      return <OurTeam />;
    }
  }

  return (
    <Container>
      <Header />

      <Main>
        <Aside>
          <List>
            <li
              id={activeTab === 0 ? "clicked" : ""}
              onClick={() => setActiveTab(0)}
            >
              <FiTarget color="#2ea44f" />
              <a href="/notifications?tab=1">All</a>
            </li>

            <li
              id={activeTab === 1 ? "clicked" : ""}
              onClick={() => setActiveTab(1)}
            >
              <FiGitBranch color="#f9a839" />
              <a href="/notifications?tab=2">Mentioned</a>
            </li>

            <li
              id={activeTab === 2 ? "clicked" : ""}
              onClick={() => setActiveTab(2)}
            >
              <FiShield color="#f84a4b" />
              <a href="/notifications?tab=3">Our team</a>
            </li>
          </List>
        </Aside>

        <Content>
          <ul>{ChooseComponent()}</ul>
        </Content>
      </Main>
    </Container>
  );
};

export default memo(Notifications);
