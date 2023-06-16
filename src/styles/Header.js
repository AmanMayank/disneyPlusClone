import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  top: 0;
  right: 0;
  left: 0;
  background-color: #090b13;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 100;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top:4px
  max-height:70px;
  font-size:0;
  display:inline-block;

  img{
    display:block;
    width:100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export { Nav, Logo, NavMenu };
