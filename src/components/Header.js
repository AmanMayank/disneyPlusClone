import { Nav, Logo, NavMenu, Login } from "../styles/Header";

function Header() {
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

      <Login>Login</Login>
    </Nav>
  );
}

export default Header;
