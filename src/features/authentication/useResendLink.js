import { useMutation } from "@tanstack/react-query";
import { resendConfirmationLink } from "../../api/apiUsers";
import { useNavigate } from "react-router";

export const useResendLink = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: resendConfirmationLink,
        onSuccess: () => {
            alert("Confirmation link resent successfully, please check your email and login");
            navigate("/login");
        },
        onError: (err) => {
            alert(err?.message);
        },
    });
};