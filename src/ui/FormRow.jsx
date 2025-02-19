import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ErrorText = styled.p`
  color: #ff4d4d;
  font-size: 0.9rem;
`;


export default function FormRow({error = null, children}) {
  return (
    <StyledFormRow>
      {children}
      {error && <ErrorText>{error}</ErrorText>}
    </StyledFormRow>
  );
};

