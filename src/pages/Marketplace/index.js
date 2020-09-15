import React, { useState, useCallback, useEffect } from "react";
import { google } from "../../services/api";
// COMPONENTS
import Header from "../../components/Header";
import Trending from "../../components/Trending";
import OurAPI, { Extention, Feedback } from "./components/OurAPI";
// STYLUS | STATIC
import Illustration from "../../assets/market-illustration.svg";
import Nine from "../../assets/9.png";
import { Container, Main, Aside, Recommended, Article } from "./styles";
import "./styles.css";

const Marketplace = (props) => {
  const [activedGroup] = useState(() => {
    const params = new URLSearchParams(props.location.search);
    const tab = parseInt(params.get("tab"));
    return tab || 0;
  });
  const [theme] = useState(() => localStorage.getItem("theme") || "light");

  function Default() {
    const [news, setNews] = useState([]);

    const handleRequestOnGoogleNews = useCallback(async () => {
      try {
        const response = await google.get();

        const [one, three, two, four] = response.data.articles;
        console.log(one);
        setNews([one, three, two, four]);
      } catch (err) {
        console.log(err.message);
      }
    }, []);

    useEffect(() => {
      handleRequestOnGoogleNews();
    }, [handleRequestOnGoogleNews]);

    return (
      <main id="main-secondary">
        <h4>
          Last news! <span style={{ fontSize: "9px" }}>From google news</span>{" "}
        </h4>
        <Recommended id="recomendations">
          {news.map((nws) => (
            <a
              href={nws.url}
              target="_BLANK"
              rel="noopener noreferrer"
              key={nws.title}
            >
              <img src={nws.image || Nine} alt={nws.description || nws.url} />
              <span id="middle">{nws.title}</span>
            </a>
          ))}
        </Recommended>

        <h4>Artigos mais destacados</h4>
        <Trending />
      </main>
    );
  }

  function DeterminateWhoActive({ id }) {
    if (id === 1) {
      return <OurAPI />;
    }
    if (id === 2) {
      return <Extention />;
    }
    if (id === 5) {
      return <Feedback />;
    }

    return <Default />;
  }

  return (
    <Container mode={theme}>
      <Header />

      <Main id="marketplace">
        <Aside mode={theme} id="aside-primary">
          <div id="first">
            <h2>Expanda GEneSis</h2>
            <p>Encontra ferramentas para melhorar seu fluxo de trabalho</p>
          </div>
          <div id="second">
            <img src={Illustration} alt="Expand whith our products" />
          </div>
        </Aside>

        <Article mode={theme} id="main-primary">
          <aside id="aside-secondary">
            <h4>Categories</h4>
            <ul>
              <li className={activedGroup === 1 ? "actived" : ""}>
                <a href="/marketplace?tab=1">API management</a>
              </li>
              <li className={activedGroup === 2 ? "actived" : ""}>
                <a href="/marketplace?tab=2">Extenção</a>
              </li>
              <li className={activedGroup === 3 ? "actived" : ""}>
                <a href="/marketplace?tab=3">Code quality</a>
              </li>
              <li className={activedGroup === 5 ? "actived" : ""}>
                <a href="/marketplace?tab=5">Feedback</a>
              </li>
            </ul>
          </aside>

          <DeterminateWhoActive id={activedGroup} />
        </Article>
      </Main>
    </Container>
  );
};

export default Marketplace;

// {activedGroup === 1 ? <Default /> : null}
