import React from "react";
import { Container } from "../styles/Home";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";

function Home() {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
    </Container>
  );
}

export default Home;
