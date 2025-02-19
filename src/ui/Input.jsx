import styled from "styled-components";

const Input = styled.input`
  padding: 12px;
  border: 1px solid #555;
  border-radius: 5px;
  background-color: #222;
  width: 100%;
  color: white;
  font-size: 1rem;
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color: #4caf50;
  }
`;

export default Input;