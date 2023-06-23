import { Container, Content, Wrap } from "../styles/Recommends";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Originals() {
  const movies = useSelector((state) => {
    return state.movie.original;
  });
  return (
    <Container>
      <h4>Originals</h4>
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

export default Originals;
