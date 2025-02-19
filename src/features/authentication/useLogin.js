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
        onError: (error) => {
            alert(`Error logging in: ${error.message}`);
        },
    });
}