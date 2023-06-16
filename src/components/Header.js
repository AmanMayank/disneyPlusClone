import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Nav, Logo, NavMenu, Login } from "../styles/Header";
import { firebaseApp } from "../firebase";

function Header() {
  const handleAuth = async () => {
    try {
      const auth = getAuth(firebaseApp);
      const provider = new GoogleAuthProvider();
      const userData = await signInWithPopup(auth, provider);
      console.log(userData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>
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

      <Login onClick={handleAuth}>Login</Login>
    </Nav>
  );
}

export default Header;
