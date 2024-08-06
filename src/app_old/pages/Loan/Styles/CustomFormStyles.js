import styled from 'styled-components';

export const Form = styled.form`
  width: 75%;
  margin: 0 auto;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #007BFF;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007BFF;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const CancelButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #ef4444;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #dc2626;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #007BFF;
  }
`;

export const ErrorMessage = styled.span`
  color: #FF0000;
`;