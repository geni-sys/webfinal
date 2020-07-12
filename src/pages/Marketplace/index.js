import React from "react";
import { FiAirplay } from "react-icons/fi";
// COMPONENTS
import Header from "../../components/Header";
// STYLUS | STATIC
import Illustration from "../../assets/market-illustration.svg";
import Nine from "../../assets/9.png";
import {
  Container,
  Main,
  Aside,
  Recommended,
  Article,
  Trending,
} from "./styles";
import "./styles.css";

const Marketplace = () => {
  return (
    <Container>
      <Header />

      <Main id="marketplace">
        <Aside id="aside-primary">
          <div id="first">
            <h2>Expanda GEneSis</h2>
            <p>Encontra ferramentas para melhorar seu fluxo de trabalho</p>
          </div>
          <div id="second">
            <img src={Illustration} alt="Expand whith our products" />
          </div>
        </Aside>

        <Article id="main-primary">
          <aside id="aside-secondary">
            <h4>Categories</h4>
            <ul>
              <li>API management</li>
              <li>Chat</li>
              <li>Code quality</li>
              <li>Continuos integration</li>
              <li>Dependency management</li>
              <li>Deployment</li>
            </ul>
          </aside>

          <main id="main-secondary">
            <h4>Recommended for you</h4>
            <Recommended id="recomendations">
              <li>
                <img src={Nine} alt="Alternative" />
                <span id="middle">Azure pipelines</span>
              </li>

              <li>
                <img src={Nine} alt="Alternative" />
                <span id="middle">Azure pipelines</span>
              </li>

              <li>
                <img src={Nine} alt="Alternative" />
                <span id="middle">Azure pipelines</span>
              </li>

              <li>
                <img src={Nine} alt="Alternative" />
                <span id="middle">Azure pipelines</span>
              </li>
            </Recommended>

            <h4>Trending</h4>
            <Trending id="trends">
              <li>
                <div id="top">
                  <FiAirplay />
                </div>
                <div id="bottom">
                  <div id="header">
                    <strong>BuildPulse</strong>
                    <span>*</span>
                  </div>
                  <p id="description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dignissimos beatae optio culpa, deleniti ratione enim libero
                  </p>
                </div>
              </li>

              <li>
                <div id="top">
                  <FiAirplay />
                </div>
                <div id="bottom">
                  <div id="header">
                    <strong>BuildPulse</strong>
                    <span>*</span>
                  </div>
                  <p id="description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dignissimos beatae optio culpa, deleniti ratione enim libero
                  </p>
                </div>
              </li>

              <li>
                <div id="top">
                  <FiAirplay />
                </div>
                <div id="bottom">
                  <div id="header">
                    <strong>BuildPulse</strong>
                    <span>*</span>
                  </div>
                  <p id="description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dignissimos beatae optio culpa, deleniti ratione enim libero
                  </p>
                </div>
              </li>

              <li>
                <div id="top">
                  <FiAirplay />
                </div>
                <div id="bottom">
                  <div id="header">
                    <strong>BuildPulse</strong>
                    <span>*</span>
                  </div>
                  <p id="description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dignissimos beatae optio culpa, deleniti ratione enim libero
                  </p>
                </div>
              </li>
            </Trending>
          </main>
        </Article>
      </Main>
    </Container>
  );
};

export default Marketplace;
