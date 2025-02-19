import styled from "styled-components";
import LoginUser from "../features/authentication/LoginUser";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { supabase } from "../api/supabase";

const StyledLoginPage = styled.div`
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

export default function Login() {
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
    <StyledLoginPage>
      <h1>Login to your Account</h1>
      <LoginUser />
    </StyledLoginPage>
  );
};
