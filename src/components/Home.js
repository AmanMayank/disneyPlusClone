import React from "react";
import { Container } from "../styles/Home";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";

function Home() {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
    </Container>
  );
}

export default Home;
