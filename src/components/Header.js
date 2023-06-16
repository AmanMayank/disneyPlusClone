import { Nav, Logo, NavMenu } from "../styles/Header";

function Header() {
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>
      <NavMenu>Menu</NavMenu>
    </Nav>
  );
}

export default Header;
