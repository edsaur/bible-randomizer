import Hamburger from "hamburger-react";
import { useState } from "react";
import { Outlet, useLocation } from "react-router";
import styled from "styled-components";
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
  const locationName = useLocation().pathname;
  const [isOpen, setOpen] = useState(false);

  return (
    <StyledAppLayout $isOpen={isOpen}>
      <Header>
      {
        locationName === '/bible' &&
        <Hamburger toggled={isOpen} toggle={setOpen} />
      }
      </Header>
      {isOpen ? <Sidebar /> : ""}

      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}
