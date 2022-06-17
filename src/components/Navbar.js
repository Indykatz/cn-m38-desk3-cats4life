import {
  Nav,
  NavbarContainer,
  NavLogo,
  // MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
} from "../css/Navbar.styled";

const NavBar = () => {
  return (
    <div>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Logo</NavLogo>

          <NavMenu>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/breeds">Breeds</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/bengals">Bengals</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/checkout">Checkout</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/example">Example</NavLink>
            </NavItem>
          </NavMenu>

          {/* <NavBtn>
            <NavBtnLink>
              <GiBasket to="/Basket" />
            </NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default NavBar;
