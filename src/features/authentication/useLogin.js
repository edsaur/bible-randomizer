import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../api/apiUsers";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: loginUser,
        onSuccess: async () => {
            alert("User logged in successfully");
            navigate("/bible");
        },
        onError: (error, data) => {
            const {username} = data || {};
            alert(`Error logging in: ${error.message}`);

            if (error.message === "Email not confirmed") {
            // redirect to a resend confirmation page
                navigate('/resend-confirmation', {state: {username}});
            }

        },
    });
}