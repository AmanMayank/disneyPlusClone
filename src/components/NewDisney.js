import { Container, Content, Wrap } from "../styles/Recommends";
import { Link } from "react-router-dom";

function NewDisney() {
  return (
    <Container>
      <h4>New to Disney+</h4>
      <Content>
        <Wrap>
          <Link to="/">
            <img src="/images/viewers-disney.png" alt="" />
          </Link>
        </Wrap>

        <Wrap>
          <Link to="/">
            <img src="/images/viewers-disney.png" alt="" />
          </Link>
        </Wrap>

        <Wrap>
          <Link to="/">
            <img src="/images/viewers-disney.png" alt="" />
          </Link>
        </Wrap>

        <Wrap>
          <Link to="/">
            <img src="/images/viewers-disney.png" alt="" />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
}

export default NewDisney;
