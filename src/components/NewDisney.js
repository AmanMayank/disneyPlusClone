import { useSelector } from "react-redux";
import { Container, Content, Wrap } from "../styles/Recommends";
import { Link } from "react-router-dom";

function NewDisney() {
  const movies = useSelector((state) => {
    return state.movie.newDisney;
  });
  return (
    <Container>
      <h4>New to Disney+</h4>
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

export default NewDisney;
