import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #74ebd5, #acb6e5);
  padding: 20px;
`;

const ProfileCard = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 10px;
  font-size: 28px;
  font-weight: 700;
`;

const InfoText = styled.p`
  font-size: 16px;
  color: #555;
  margin: 0;
  line-height: 1.5;

  strong {
    color: #333;
    font-weight: 600;
  }
`;

const LogoutButton = styled.button`
  padding: 12px;
  background: #74ebd5;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #66d3c0;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const LoadingText = styled.p`
  font-size: 16px;
  color: #555;
  text-align: center;
`;

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <ProfileContainer>
      <ProfileCard>
        <Title>My Profile</Title>
        {user ? (
          <>
            <InfoText>
              <strong>Name:</strong> {user.name}
            </InfoText>
            <InfoText>
              <strong>Email:</strong> {user.email}
            </InfoText>
            <LogoutButton onClick={logout}>Logout</LogoutButton>
          </>
        ) : (
          <LoadingText>Loading user info...</LoadingText>
        )}
      </ProfileCard>
    </ProfileContainer>
  );
};

export default Profile;