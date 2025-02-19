import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Header from "./Header";
import Sidebar from "./Sidebar";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: ${({ $isOpen }) => ($isOpen ? "20rem 1fr" : "1fr")};
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  display: grid;
  background-color: rgb(251, 255, 236);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function AppLayout() {
  const location = useLocation();
  const { book, chapter, verse } = useParams();
  const [isOpen, setOpen] = useState(false);
  const { user, isLoading, error } = useUser();

  // Close sidebar if navigating to routes outside of /bible
  useEffect(() => {
    const allowedRoutes = [
      "/bible",
      `/bible/${book}/${chapter}`,
      `/bible/${book}/chapters`,
      `/bible/${book}/${chapter}/${verse}`,
    ];

    if (!allowedRoutes.includes(location.pathname)) {
      setOpen(false);
    }
  }, [location.pathname, book, chapter, verse]);

  return (
    <StyledAppLayout $isOpen={isOpen}>
      <Header>
        {location.pathname.startsWith("/bible") && (
          <Hamburger toggled={isOpen} toggle={setOpen} />
        )}
      </Header>
      {isOpen && (
        <Sidebar
          user={user}
          isLoading={isLoading}
          error={error}
          setOpen={setOpen}
        />
      )}
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}
