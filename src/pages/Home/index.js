import React from "react";
// COMPONENTS
import Header from "../../components/Header";
import Article from "../../components/Article";
// STYLUS
import { Container, Aside, Main } from "./styles";

const Home = () => {
  return (
    <Container id="App">
      <Header />
      <Aside></Aside>
      <Main></Main>
      <Article />
    </Container>
  );
};

export default Home;
