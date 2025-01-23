import Hamburger from "hamburger-react";
import { useState } from "react";
import { Outlet } from "react-router";
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
  background-color: black;
  padding: 4rem 4.8rem 6.4rem;

`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function AppLayout() {
  const [isOpen, setOpen] = useState(false);

  return (
    <StyledAppLayout $isOpen={isOpen}>
      <Header>
        <Hamburger toggled={isOpen} toggle={setOpen} />
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
