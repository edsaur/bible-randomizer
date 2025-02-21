import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import UserProfile from "../features/profile/UserProfile";
import { useEffect } from "react";
import { replace, useNavigate } from "react-router";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  min-height: 80vh; /* Ensures good spacing */
  padding: 2rem;
  background-color: #f7f7f7; /* Light background */
  
  h2 {
    font-weight: 700;
  }
`;

const ProfileHeading = styled.h1`
  font-size: 2.4rem;
  font-weight: 500;
`;

const ProfileGreeting = styled.h1`
  font-size: 2rem;
`;

const ProfileCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export default function Profile() {
  const { user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if(!user) {
      navigate("/login", {replace: true});
    }
  }, [user, navigate]);

  if(!user) return null;
  return (
    <ProfileContainer>
      <ProfileCard>
        <ProfileHeading>Your Profile</ProfileHeading>
        <ProfileGreeting>Welcome, {user?.user?.user_metadata.username}</ProfileGreeting>
        <UserProfile />
      </ProfileCard>
    </ProfileContainer>
  );
}
