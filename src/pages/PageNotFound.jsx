import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: #f7f7f7; /* Light grey background */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  background-color: #ffffff; /* White background */
  border: 1px solid #e0e0e0; /* Light border */
  border-radius: 8px; /* Medium border radius */
  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
    font-size: 2rem; /* Adjust font size */
    color: #333333; /* Dark grey text */
  }

  & button {
    padding: 0.8rem 1.6rem;
    font-size: 1.2rem;
    color: #ffffff;
    background-color: #007bff; /* Blue button background */
    border: none;
    border-radius: 4px; /* Small border radius */
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3; /* Darker blue on hover */
    }
  }
`;

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <StyledPageNotFound>
      <Box>
        <h1>The page you are looking for could not be found 😢</h1>
        <button onClick={() => navigate(-1)} size="large">
          &larr; Go back
        </button>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
