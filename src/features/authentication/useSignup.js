import { useMutation } from "@tanstack/react-query"
import { signUpUser } from "../../api/apiUsers";
import { useNavigate } from "react-router-dom";

export const useSignUp = (reset) => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: signUpUser,
        onSuccess: (data) => {
            alert("User signed up successfully");
            console.log(data?.user.email);
            navigate("/confirm-email", {state: {email: data?.user.email, hasSignedUp: true}});
            reset();
        },
        onError: (err) => {
            alert(err?.message);
        },
    })
}