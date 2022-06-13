import React from "react";
import styled from "styled-components";
import Hero from "./Hero/Hero";
import Tools from "./Tools/Tools";
import Projects from "./Projects/Projects";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <Container>
      <Hero />
      <Tools />
      <Projects />
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div``;
