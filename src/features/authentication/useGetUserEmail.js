import { useQuery } from "@tanstack/react-query"
import { getUserEmail } from "../../api/apiUsers"

export const useGetUserEmail = (username) => {
    const {data: userEmail, isLoading, error} = useQuery({
        queryFn: () => getUserEmail(username),
        queryKey: ['user-email'],
    })
    return {userEmail, isLoading, error}
}