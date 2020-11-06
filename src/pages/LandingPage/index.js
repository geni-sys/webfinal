import React from "react";
import { useHistory } from 'react-router-dom'
// STYLES | STATICS
import "./styles.css";

const LandingPage = () => {
  const history = useHistory()

  const handleNavigation = (route) => {
    history.push(`/${route}`)
  }

  return (
    <div id="wrapper">
      <main id="landing">
        <h1>
          <span>GEneSys.</span>
          <span>WHeeZy.</span>
          <span>Ship.</span>
        </h1>

        <div class="buttons">
          <button
            id="do-login"
            type="button"
            onClick={() => handleNavigation('login')}
          >
            Fazer login
          </button>
          <button
            id="new-registry"
            type="button"
            onClick={() => handleNavigation('register')} class="outlined"
          >
            Fazer registro
          </button>
        </div>

        <h2>
          O WHeeZy combina a melhor experiência de desenvolvedor com um foco obsessivo no desempenho do usuário final. Nossa plataforma permite que as equipes fullstack façam seu melhor trabalho.
        </h2>
      </main>

      <footer id="landing">Explore o jeito WHeeZy.</footer>
    </div>
  );
};

export default LandingPage;
