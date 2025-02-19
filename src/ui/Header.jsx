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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem; /* Adjust spacing for mobile */
    padding: 1.6rem 2.4rem;
  }
`;

const StyledNavList = styled.ul`
  display: flex;
  gap: 1.2rem;

  li {
    list-style-type: none;
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Stack links vertically on mobile */
    gap: 1rem;
    width: 100%;
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

const HamburgerWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    order: -1; /* Move the hamburger to the top on mobile */
    width: 100%; /* Ensure the hamburger spans the width */
    justify-content: space-between; /* Align hamburger and optional branding/logo */
  }
`;

export default function Header({ children }) {
  const activeLink = useLocation().pathname;
  return (
    <StyledNavbar>
      <HamburgerWrapper>
        {children}
        <div style={{ color: "white", fontWeight: "bold" }}>Biblify</div>
      </HamburgerWrapper>
      <StyledNavList>
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
            Generate Random Verses
          </StyledNavItem>
        </li>
        <li>
          <StyledNavItem
            to="/bible"
            className={activeLink === "/bible" ? "active" : ""}
          >
            Read the Bible
          </StyledNavItem>
        </li>
      </StyledNavList>
    </StyledNavbar>
  );
}
