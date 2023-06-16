import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Nav, Logo, NavMenu, Login, UserImg } from "../styles/Header";
import { firebaseApp } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setUserLoginDetails } from "../store";

function Header() {
  const dispatch = useDispatch();

  const user = useSelector((state) => {
    return state.users;
  });

  const handleAuth = async () => {
    try {
      const auth = getAuth(firebaseApp);
      const provider = new GoogleAuthProvider();
      const userData = await signInWithPopup(auth, provider);
      dispatch(setUserLoginDetails(userData.user));
      console.log(userData.user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>

      {user.name === "" ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="home" />
              <span>Home</span>
            </a>

            <a href="/home">
              <img src="/images/search-icon.svg" alt="Search" />
              <span>Search</span>
            </a>

            <a href="/home">
              <img src="/images/watchlist-icon.svg" alt="Watchlist" />
              <span>Watchlist</span>
            </a>

            <a href="/home">
              <img src="/images/original-icon.svg" alt="Originals" />
              <span>Originals</span>
            </a>

            <a href="/home">
              <img src="/images/movie-icon.svg" alt="Movies" />
              <span>Movies</span>
            </a>

            <a href="/home">
              <img src="/images/series-icon.svg" alt="Series" />
              <span>Series</span>
            </a>
          </NavMenu>
          <UserImg src={user.photo} alt={user.name} />
        </>
      )}

      {/* <Login onClick={handleAuth}>Login</Login> */}
    </Nav>
  );
}

export default Header;
