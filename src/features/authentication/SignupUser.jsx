import { useForm } from "react-hook-form";
import { useSignUp } from "./useSignup";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { Link } from "react-router";
import styled from "styled-components";

const StyledParagraph = styled.p`
  margin: 10px 0;
`

export default function SignupUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate: signUpUser, isPending } = useSignUp(reset);
  const onSubmitUserData = (data) => {
    signUpUser(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitUserData)}>
      <FormRow error={errors.username?.message}>
        <Input
          type="text"
          placeholder="Username"
          {...register("username", { required: "Username is required" })}
        />
      </FormRow>

      <FormRow error={errors.email?.message}>
        <Input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          })}
        />
      </FormRow>

      <FormRow error={errors.password?.message}>
        <Input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
      </FormRow>
      <Button disabled={isPending}>Sign Up</Button>

      <div>
        <StyledParagraph>Already have an account?</StyledParagraph>
        <Button as={Link} to="/login">
          Log In
        </Button>
      </div>
    </Form>
  );
}
