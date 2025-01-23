import { NavLink, useLocation } from "react-router";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4.8rem;
  gap: 2.4rem;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
`;

const StyledNavList = styled.ul`
  display: flex;
  gap: 1.2rem;
  li {
    list-style-type: none;
  }
`;
const StyledNavItem = styled(NavLink)`
  font-weight: bold;
  color: white;
  text-decoration: none;
  &.active {
    background-color: #007bff;
    border-radius: 4px;
    padding: 10px;
  }
`;
export default function Header({children}) {
  const activeLink = useLocation().pathname;
  return (
    <StyledNavbar>
      <StyledNavList>
        <li>
            {children}
        </li>
        <li>
          <StyledNavItem
            to="home"
            className={activeLink === "/home" ? "active" : ""}
          >
            Home
          </StyledNavItem>
        </li>
        <li>
          <StyledNavItem
            to="about"
            className={activeLink === "/about" ? "active" : ""}
          >
            About
          </StyledNavItem>
        </li>
        <li>
          <StyledNavItem
            to="/random-verse"
            className={activeLink === "/random-verse" ? "active" : ""}
          >
            Generate a Random Verse
          </StyledNavItem>
        </li>
        <li>
          <StyledNavItem to='/bible' className={activeLink === "/bible" ? "active" : ""}>
            Read the Bible
          </StyledNavItem>
        </li>
      </StyledNavList>
    </StyledNavbar>
  );
}
