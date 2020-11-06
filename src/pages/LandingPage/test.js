import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
// STYLES | STATICS
import {
  Container,
  Header,
  Box,
  Aside,
  Checklist,
  CheckIcon,
  Main,
  MobileBox,
} from "./styles.data";
import letit from "../../assets/animations/mobile-news-network.json";

const LandingPage = () => {
  const mobileBox = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: mobileBox.current,
      render: "svg",
      loop: false,
      autoplay: true,
      animationData: letit,
    });
  }, []);

  return (
    <Container>
      <Header>
        <div>
          <small>mantido por </small>
          <h1>GENESIS SYSTEMS</h1>
        </div>
      </Header>

      <Box>
        <Aside>
          <h1>Wheezy</h1>

          <Checklist>
            <CheckIcon /> Dados criptografados de ponta-a-ponta.
          </Checklist>
          <Checklist>
            <CheckIcon /> Atualização contínua.
          </Checklist>
          <Checklist>
            <CheckIcon /> API para integrar com outras aplicações.
          </Checklist>
          <Checklist>
            <CheckIcon /> Layout flexível.
          </Checklist>
          <Checklist>
            <CheckIcon /> Comunidade open source.
          </Checklist>

          <div className="last-group">
            <span>Só mais um passo.</span>
            <p>
              Se ainda não possui registro na plataforma inscreva-se ou pode
              realizar o login abaixo!
            </p>
          </div>

          <div id="buttons">
            <a id="login" href="/login">
              Logar
            </a>
            <a id="new" href="/register">
              registrar-se
            </a>
          </div>
        </Aside>

        <Main>
          <MobileBox ref={mobileBox}></MobileBox>
        </Main>
      </Box>
    </Container>
  );
};

export default LandingPage;
