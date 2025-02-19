import { useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { supabase } from "../api/supabase";
import SignupUser from "../features/authentication/SignupUser";

const StyledSignup = styled.div`
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

export default function Signup() {
  const navigate = useNavigate();
  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error fetching session:", error);
      }
      if (data.session) {
        navigate("/");
      }
    }
    checkSession();
  }, [navigate]);
  return (
    <StyledSignup>
      <h1>Signup</h1>
      <SignupUser />

    </StyledSignup>
  );
}
