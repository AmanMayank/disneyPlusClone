import React from "react";
import { Container, Content, Wrap } from "../styles/Recommends";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Trending() {
  const movies = useSelector((state) => {
    return state.movie.trending;
  });
  return (
    <Container>
      <h4>Trending</h4>
      <Content>
        {movies &&
          movies.map((movie, key) => {
            return (
              <Wrap key={key}>
                {movie.id}
                <Link to={"/detail/" + movie.id}>
                  <img src={movie.cardImg} alt={movie.title} />
                </Link>
              </Wrap>
            );
          })}
      </Content>
    </Container>
  );
}

export default Trending;
