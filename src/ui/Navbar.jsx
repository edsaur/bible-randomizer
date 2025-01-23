import { NavLink, useLocation } from "react-router";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* Space between h1 and rest of the nav */
  align-items: center;
  padding: 2rem 2.5rem;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const BrandTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0 1.2rem;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; /* Space between nav list and input */
  flex-grow: 1;
  justify-content: space-between; /* Push input to the far right */
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const NavItems = styled.li`
  list-style-type: none;

  a {
    text-decoration: none;
    color: white;
    font-size: 1rem;
    transition: color 0.3s ease;

    &.active {
      background-color: #007bff;
      border-radius: 4px;
      padding: 10px;
    }

    &:hover {
      color: rgba(247, 248, 250, 0.25);
    }
  }
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export default function Navbar({children}) {
  const activeLink = useLocation().pathname;
  return (
    <StyledNavbar>
      {children}
      <NavContainer>
        <NavList>
          <NavItems>
            <NavLink to="/home" className={activeLink === "/home" ? "active" : ""}>
              Home
            </NavLink>
          </NavItems>
          <NavItems>
            <NavLink to="/about" className={activeLink === "/about" ? "active" : ""}>
              About
            </NavLink>
          </NavItems>
          <NavItems>
            <NavLink
              to="/random-verse"
              className={activeLink === "/random-verse" ? "active" : ""}
            >
              Generate a Random Verse
            </NavLink>
          </NavItems>
          <NavItems>
            <NavLink to="/bible" className={activeLink === "/bible" ? "active" : ""}>
              The Bible
            </NavLink>
          </NavItems>
        </NavList>
        <SearchInput type="text" placeholder="Search..." />
      </NavContainer>
    </StyledNavbar>
  );
}
