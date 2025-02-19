import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useGetBibleBooks } from "../features/bible/useGetBibleBooks";
import { Button } from "@mui/material";
import { useUser } from "../features/authentication/useUser";
import { useLogout } from "../features/authentication/useLogout";
// import LoginUser from "../features/authentication/LoginUser";

const StyledSidebar = styled.aside`
  padding: 3.2rem 2.4rem;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  height: 100%; /* Ensure sidebar takes full height */
  width: 100%;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const BrandTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0 1.2rem;
  color: #fff;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  flex-grow: 1; /* Allow the Nav to take up remaining space */
  overflow-y: auto; /* Ensure scrolling in the Nav section */
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* Allow vertical scrolling if content exceeds */
  gap: 1.2rem;
  min-height: 100px; /* You can use a min-height based on your layout */
  height: 25%;
`;

const NavItem = styled.li`
  margin: 0;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.8rem;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: #007bff;
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.2);
    color: #007bff;
  }
`;

export default function Sidebar({setOpen}) {
  const { bookLoading, bibleBooks } = useGetBibleBooks();
  const navigate = useNavigate();

  const books = bibleBooks?.books || [];

  const { user } = useUser();

  const { mutate: logoutUser } = useLogout();

  function handleLogout() {
    logoutUser();
    setOpen(false);
  }

  return (
    <StyledSidebar>
      <BrandTitle>Biblify</BrandTitle>
      {user ? (
        <>
          <h2>Greetings in Christ, {user.user.user_metadata.username}</h2>
          <Button variant="contained" onClick={handleLogout}>
            Logout
          </Button>
        </>
      ) : (
        <>
          <Button variant="contained" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button variant="contained" onClick={() => navigate("/signup")}>
            SignUp
          </Button>
        </>
      )}
      <Nav>
        <h1>Seek the Bible</h1>
        <NavList>
          {/* Example of mapping Bible books */}
          {bookLoading ? (
            <div>Loading...</div> // Or a spinner, something like a loading indicator
          ) : (
            books.map((book) => (
              <NavItem key={book.id}>
                <StyledNavLink to={`/bible/${book.id}/chapters`}>
                  {book.name}
                </StyledNavLink>
              </NavItem>
            ))
          )}

          {/* Add more books dynamically */}
        </NavList>
      </Nav>
    </StyledSidebar>
  );
}
