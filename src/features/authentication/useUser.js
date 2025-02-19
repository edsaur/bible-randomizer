import { useQuery } from "@tanstack/react-query"
import { getUser } from "../../api/apiUsers"

export const useUser = () => {
    const {data: user, isLoading, error} = useQuery({
        queryFn: getUser,
        queryKey: ['user'],
    })
    return {user, isLoading, error};
}