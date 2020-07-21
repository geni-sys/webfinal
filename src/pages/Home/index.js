import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import api from "../../services/api";
// COMPONENTS
import { FiActivity, FiPlus, FiUser } from "react-icons/fi";
import IssueList from "../../components/IssueList";
import Header from "../../components/Header";
import Article from "../../components/Article";
// STYLUS
import {
  Container,
  Aside,
  Main,
  TopInformation,
  Entrada,
  List,
  Footer,
} from "./styles";

const Home = () => {
  const [name] = useState(
    () => localStorage.getItem("name") || "Recarregue a página"
  );
  // const [email, setEmail] = useState(() => (localStorage.getItem('email') || "Load the page"))
  const [issues, setIssues] = useState([]);

  const history = useHistory();
  const [cookies, , removeCookie] = useCookies(["token"]);

  const getIssueOfUser = useCallback(async () => {
    const { token, user_id } = cookies;

    try {
      const response = await api
        .get(`/user/${user_id}/issues`, {
          headers: {
            Authorization: String(token),
          },
        })
        .catch((err) => {
          console.log(err.message);
          return;
        });

      setIssues(response.data);
    } catch (err) {
      console.log(err.message);
    }
  }, [cookies]);

  const middleware = useCallback(() => {
    const { token, user_id } = cookies;

    if (!token || !user_id) {
      removeCookie("token");
      removeCookie("user_id");
      localStorage.removeItem("name");
      localStorage.removeItem("email");

      alert("É necessário fazer o login!");

      history.push("/login");
    }
  }, [cookies, history, removeCookie]);

  function newIssue() {
    history.push("/new/issues");
  }

  useEffect(() => {
    middleware();
    getIssueOfUser();
  }, [getIssueOfUser, middleware]);

  return (
    <Container id="Home">
      <Header />

      <Aside>
        <TopInformation id="top-aside">
          <div id="user-aside">
            <FiUser />
            <strong>{name}</strong>
          </div>

          <div id="aside-repo">
            <div>
              <p>Activits</p>
              <button onClick={newIssue}>
                <FiPlus /> New
              </button>
            </div>

            <div>
              <Entrada
                placeholder="Encontrar uma atividade"
                type="search"
                name="search-repo"
                id="search-repo"
              />
            </div>
          </div>
        </TopInformation>

        <div id="navigation-aside">
          <List id="aside-items-group">
            {issues.map((issue) => (
              <li key={issue.id}>
                <a href={issue.link} rel="noopener noreferrer" target="_BLANK">
                  <span className="items-icon">
                    <FiActivity color="#555" />
                  </span>
                  <span>{issue.link}</span>
                </a>
              </li>
            ))}
          </List>
        </div>

        <Footer id="footer">
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.github.com/eliasallex"
            >
              Creator: Elias garcia Alexandre
            </a>
          </p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.github.com/geni-sys"
            >
              &copy;GENESIS SYSTEMS
            </a>
          </p>
        </Footer>
      </Aside>

      <Main>
        <IssueList />
      </Main>
      <Article />
    </Container>
  );
};

export default Home;
