import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { setMovies } from "../store";

import { Container } from "../styles/Home";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.users;
  });

  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trendings = [];

  useEffect(() => {
    const dbRef = collection(db, "movies");
    getDocs(dbRef)
      .then((response) => {
        response.docs.map((doc) => {
          console.log(recommends);
          switch (doc.data().type) {
            case "recommend":
              recommends = [...recommends, { id: doc.id, ...doc.data() }];
              break;

            case "new":
              newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
              break;

            case "original":
              originals = [...originals, { id: doc.id, ...doc.data() }];
              break;

            case "trending":
              trendings = [...trendings, { id: doc.id, ...doc.data() }];
              break;

            default:
          }
        });
        dispatch(
          setMovies({
            recommend: recommends,
            newDisney: newDisneys,
            original: originals,
            trending: trendings,
          })
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
}

export default Home;
