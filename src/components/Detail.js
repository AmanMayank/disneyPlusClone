import {
  Container,
  Background,
  ImageTitle,
  ContentMeta,
  Controls,
  Player,
  Trailer,
  AddList,
  GroupWatch,
  SubTitle,
  Description,
} from "../styles/Detail";

function Detail() {
  return (
    <Container>
      <Background>
        <img
          alt=""
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AAC4808815AE5721A6AAB372DD14B8CE2E7E9EFF3A27942EF2B6B45EBF4E65CB/scale?width=1440&aspectRatio=1.78&format=jpeg"
        />
      </Background>

      <ImageTitle>
        <img
          alt=""
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9562874BAB22B22A698368819B9EBF30FEB0291543552EB2416A5A61A73F63F4/scale?width=1440&aspectRatio=1.78"
        />
      </ImageTitle>

      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>
          2016 • 1h 47m • Family, Fantasy, Animation, Action-Adventure, Musical
        </SubTitle>
        <Description>
          Moana sets sail on a daring mission to save her people. Along the way,
          she meets the mighty demigod Maui–together they cross the ocean on a
          fun-filled, action-packed voyage from Walt Disney Animation Studios.
        </Description>
      </ContentMeta>
    </Container>
  );
}

export default Detail;
