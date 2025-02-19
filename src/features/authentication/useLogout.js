import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutUser } from "../../api/apiUsers";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
        queryClient.removeQueries(['user']);
        navigate("/", {replace: true});
    }
  });
};
