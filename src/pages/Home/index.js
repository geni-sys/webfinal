import React, { useState, useEffect, useCallback } from "react";
import * as _ from "lodash";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import api from "../../services/api";
// COMPONENTS
import { FiActivity, FiPlus } from "react-icons/fi";
import IssueList from "../../components/IssueList";
import Header from "../../components/Header";
import Article from "../../components/Article";
import Miniature from "../../components/Miniature";
import Confirmations from "../../components/Confirmations";
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
  const [filterValue, setFilterValue] = useState("");
  const [issues, setIssues] = useState([]);
  const [profileCompleted, setProfileCompleted] = useState(() => {
    const state = localStorage.getItem("questions_status");
    if (state === "null" || state === "false" || state === "undefined") {
      console.log("questions_status: " + state);
      return false;
    }
    if (state === "true") return true;

    return true;
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [name] = useState(
    () => localStorage.getItem("name") || "Recarregue a página"
  );
  // const [email, setEmail] = useState(() => (localStorage.getItem('email') || "Load the page"))

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
    history.push("/new/issue");
  }

  const userAlreadyCompleteProfile = useCallback(async () => {
    if (profileCompleted) {
      return setShowConfirmation(false);
    }

    return setShowConfirmation(true);
  }, [profileCompleted]);
  function closeConfirmation() {
    setProfileCompleted(true);
  }

  useEffect(() => {
    middleware();
    getIssueOfUser();
    userAlreadyCompleteProfile();
  }, [getIssueOfUser, middleware, userAlreadyCompleteProfile]);

  function filterActivities(collection, newValue) {
    const arrayFiltered = _.filter(collection, (item) =>
      String(item.link).toLowerCase().includes(String(newValue).toLowerCase())
    );

    if (!(arrayFiltered.length === 0)) {
      setIssues(arrayFiltered);
      return arrayFiltered;
    }
    getIssueOfUser();

    return arrayFiltered;
  }

  return (
    <Container id="Home">
      <Header />

      <Aside>
        <TopInformation id="top-aside">
          <div id="user-aside">
            <Miniature width="30px" height="30px" />
            <a href="/profile">{name}</a>
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
                value={filterValue}
                onChange={(e) => {
                  setFilterValue(e.target.value);
                  console.log(filterActivities(issues, filterValue));
                }}
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

      <Confirmations
        title={"Atualizar o perfil!"}
        link={"/questions"}
        isShow={showConfirmation && "confirmate"}
        onClose={closeConfirmation}
      />
    </Container>
  );
};

export default Home;
