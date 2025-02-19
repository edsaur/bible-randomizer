import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import { useEffect } from "react";

const StyledSuccess = styled.div`
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

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 15px;
  padding: 20px;
  background-color: #3a3a3a;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  color: white;
`;

export default function SuccessSignup() {
  const navigate = useNavigate();
  const locationState = useLocation().state;
  const {email} = locationState || {};

  useEffect(() => {
    if (!locationState) {
      navigate("/", { replace: true });
    }
  }, [locationState, navigate]);

  if (!locationState) return null; // Prevents rendering before redirecting

  return (
    <StyledSuccess>
      <SuccessContainer>
        <h1>Sign-up success!</h1>
        <p>Check your email ({email}) to verify your account</p>
        <Button onClick={() => navigate("/login", {replace: true, state: {email}})}>Log-in to your account</Button>
      </SuccessContainer>
    </StyledSuccess>
  );
}
