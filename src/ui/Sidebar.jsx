import styled from "styled-components";

const StyledSidebar = styled.aside`
  padding: 3.2rem 2.4rem;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  height: 100vh; /* Full height */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const BrandTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0 1.2rem;
`;

export default function Sidebar() {
  return (
  <StyledSidebar>
    <BrandTitle>Hello World</BrandTitle>
    <div>
        <ul>
            <li>Sample</li>
        </ul>
    </div>
  </StyledSidebar>);
}
