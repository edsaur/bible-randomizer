import styled from "styled-components";
import ResendUserVerification from "../features/authentication/ResendUserVerification";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { useGetUserEmail } from "../features/authentication/useGetUserEmail";


const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #2c2c2c;
  color: #fff;
  
  h1 {
    margin-bottom: 20px;
    font-size: 2rem;
  }
`;
export default function ResendConfirmation() {
  const locationState = useLocation().state;
  const {userEmail} = useGetUserEmail(locationState?.username);
  const navigate = useNavigate();

    useEffect(() => {
      if (!locationState) {
        navigate("/", { replace: true });
      }
    }, [locationState, navigate]);
  
    if (!locationState) return null; // Prevents rendering before redirecting

  return (
    <StyledPage>
        <h1>Resend Confirmation to your Email ({userEmail?.email})</h1>
        <ResendUserVerification email={userEmail?.email}/>
    </StyledPage>
  );
};
