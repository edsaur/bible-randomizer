import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useLogin } from "./useLogin";


const StyledParagraph = styled.p`
  margin: 10px 0;
`
export default function LoginUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const { mutate: loginUser, isPending} = useLogin();
  const location = useLocation().state;
  const emailFromState = location?.email || ""; // Avoids errors
  
  useEffect(() => {
    if (emailFromState) {
      setValue("username", emailFromState);
    }
  }, [emailFromState, setValue]);

  function onSubmitUserData(data) {
    loginUser(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmitUserData)}>
      <FormRow error={errors.username?.message}>
        <Input
          type="text"
          placeholder="Username/Email"
          {...register("username", { required: "Username is required" })}
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
      <Button disabled={isPending}>Login</Button>

      <div>
        <StyledParagraph>Don&lsquo;t have an account?</StyledParagraph>
        <Button as={Link} to="/signup">
          Sign-up
        </Button>
      </div>
    </Form>
  );
}
