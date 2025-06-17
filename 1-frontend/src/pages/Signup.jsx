import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #74ebd5, #acb6e5);
  padding: 20px;
`;

const Form = styled.form`
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

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: #f9f9f9;

  &:focus {
    outline: none;
    border-color: #74ebd5;
    box-shadow: 0 0 8px rgba(116, 235, 213, 0.3);
    background: white;
  }

  &::placeholder {
    color: #aaa;
  }
`;

const Button = styled.button`
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

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost/Room/frontend1/backend/signup.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        alert("Signup successful! Please login.");
      } else {
        alert(data.message || "Signup failed!");
      }
    } catch (error) {
      console.error(error);
      alert("Server error during signup");
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Signup</Title>
        <Input
          name="name"
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <Input
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <Input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <Button type="submit">Signup</Button>
      </Form>
    </FormContainer>
  );
};

export default Signup;