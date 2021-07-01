import React from "react";
import styled from "styled-components";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Container>
        <Navbar />
        <Hero />
      </Container>
    </div>
  );
};

export default App;

const Container = styled.div``