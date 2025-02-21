import styled from "styled-components";
import Button from "../../ui/Button";
import { useResendLink } from "./useResendLink";

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  max-width: 800px; /* Limit the article width for better readability */
  width: 100%;
  margin: 1rem auto; /* Center the article and add vertical spacing */
  padding: 2rem;
  background-color:rgb(128, 128, 128); /* Set a white background */
  color: white;
  border-radius: 8px; /* Add rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */

  p {
    margin-bottom: 1rem;
  }
`;
export default function ResendUserVerification({ email }) {
  const { mutate: resendConfirmationLink, isLoading } = useResendLink(); // No email passed here

  return (
    <StyledBox>
      <p>Click the button below to resend a new confirmation link to your email</p>
      <Button disabled={isLoading} onClick={() => resendConfirmationLink(email)}>
        Resend Email Confirmation
      </Button>
    </StyledBox>
  );
}
