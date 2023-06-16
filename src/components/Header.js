import { Nav, Logo, NavMenu } from "../styles/Header";

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
      </NavMenu>
    </Nav>
  );
}

export default Header;
